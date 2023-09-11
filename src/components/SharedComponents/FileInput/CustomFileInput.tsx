import React, { useRef, useState } from "react";
import Typography from "../Typography/Typography";
import { Crop, PercentCrop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  FileInput,
  FileInputContainer,
  FileInputContainerContent,
  FullContainer,
  PlusIconContainer,
  StyledImgsContainer,
  StyledPlusIcon,
} from "./CustomFileInput.styled";
import {
  closestCenter,
  DndContext,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { KeyboardSensor, MouseSensor } from "utils/dndKitUtils/customEvents";
import toastService from "singletons/toastService";
import PhotoPreviewNewPhotos from "../DragAndDrop/PhotoPreviewNewPhotos";
import { useDebounceEffect } from "hooks/useDebounceEffect";
import { canvasPreview } from "./Crop/canvasCrop";
import CropImage, { RefInterface } from "./Crop/CropImage";
import { centerAspectCrop, CustomFileInputProps } from "./CustomFileInputUtils";

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  existingFiles,
  isAddNewCard,
  handleIndexFileChangeForm,
  onFileChange,
  description = "",
  label = "",
  onFileDelete,
  photos,
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState<number | null>(
    null
  );
  const [initialFileUpload, setInitialFileUpload] = useState(true);
  const [editFileFlag, setEditFileFlag] = useState(false);

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const childRef = useRef<RefInterface>(null);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 16 / 9));
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleCrop = (cropValue: PercentCrop) => {
    setCrop(cropValue);
  };

  const handleCompletedCrop = (c: PixelCrop) => {
    setCompletedCrop(c);
  };

  const handleSelectedImageChange = (
    image: string | null,
    imageNumber: number | null
  ) => {
    setSelectedImage(image);
    setSelectedImageNumber(imageNumber);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const filesInput = existingFiles ? existingFiles : 0;

    if (files && files.length + filesInput <= 5) {
      const newFileNames = Array.from(files).map((_file, index) => {
        let newFileName = `image${index + 1}`;
        let counter = 1;

        while (fileNames.includes(newFileName)) {
          newFileName = `image${index + counter}`;
          counter++;
        }
        return newFileName;
      });

      setFileNames([...fileNames, ...newFileNames]);

      const fileReaders = Array.from(files).map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
      });

      Promise.all(
        fileReaders.map(
          (reader) =>
            new Promise<string>((resolve) => {
              reader.onload = () => resolve(reader.result as string);
            })
        )
      ).then((previews) => {
        setFilePreviews([...filePreviews, ...previews]);
        if (filePreviews.length === 0) {
          setSelectedImage(previews[0]);
          setSelectedImageNumber(0);
        } else {
          setSelectedImage(previews[0]);
          setSelectedImageNumber(filePreviews.length);
        }
      });
    } else {
      toastService.showToast(
        "Zwierzak może posiadać maksymalnie 5 zdjęć.",
        "error"
      );
    }
  };

  const handleRemoveFilesUpToIndex = (index: number) => {
    const updatedPreviews = filePreviews.slice(0, index);
    setFilePreviews(updatedPreviews);

    const updatedNames = fileNames.slice(0, index);
    setFileNames(updatedNames);
  };

  const handleRemoveFile = (index: number) => {
    const updatedPreviews = [...filePreviews];
    updatedPreviews.splice(index, 1);
    setFilePreviews(updatedPreviews);

    const updatedNames = [...fileNames];
    updatedNames.splice(index, 1);
    setFileNames(updatedNames);
    onFileDelete(index);
  };

  const saveImage = (index: number, cutImg?: boolean) => {
    if (!childRef.current?.imgRef) {
      throw new Error("Crop canvas does not exist");
    }

    const canvasRef = childRef.current?.previewCanvasRef;

    if (!canvasRef) {
      throw new Error("Canvas reference does not exist");
    }

    if (!cutImg) {
      const imgElement = childRef.current.imgRef;
      const base64String = imgElement.src;
      const updatedPreviews = [...filePreviews];
      updatedPreviews.splice(index, 1, base64String);
      setFilePreviews(updatedPreviews);

      const file = new File([base64String], fileNames[index], {
        type: "image/jpeg",
      });

      onFileChange(file);
    } else {
      canvasRef.toBlob((blob) => {
        if (!blob) {
          throw new Error("Failed to create blob");
        }

        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          const updatedPreviews = [...filePreviews];
          updatedPreviews.splice(index, 1, base64String);
          setFilePreviews(updatedPreviews);

          const file = new File([blob], fileNames[index], {
            type: "image/jpeg",
          });

          onFileChange(file);
        };
        reader.readAsDataURL(blob);
      });
    }
  };

  const handleSaveImage = (index: number) => {
    saveImage(index, true);

    if (fileNames.length === 1 && typeof selectedImageNumber === "number") {
      setInitialFileUpload(false);
      setSelectedImage(null);
      setSelectedImageNumber(null);
      setEditFileFlag(true);
    } else if (
      typeof selectedImageNumber === "number" &&
      fileNames.length - 1 > selectedImageNumber
    ) {
      if (initialFileUpload) {
        setInitialFileUpload(false);
      }
      setSelectedImage(filePreviews[selectedImageNumber + 1]);
      setSelectedImageNumber(selectedImageNumber + 1);
    } else if (
      typeof selectedImageNumber === "number" &&
      fileNames.length - 1 <= selectedImageNumber
    ) {
      setSelectedImage(null);
      setSelectedImageNumber(null);
      setEditFileFlag(true);
    }
  };

  const handleSaveUncroppedImage = (index: number) => {
    saveImage(index, false);
    if (fileNames.length === 1 && typeof selectedImageNumber === "number") {
      setInitialFileUpload(false);
      setSelectedImage(null);
      setSelectedImageNumber(null);
      setEditFileFlag(true);
    } else if (
      typeof selectedImageNumber === "number" &&
      fileNames.length - 1 > selectedImageNumber
    ) {
      if (initialFileUpload) {
        setInitialFileUpload(false);
      }
      setSelectedImage(filePreviews[selectedImageNumber + 1]);
      setSelectedImageNumber(selectedImageNumber + 1);
    } else if (
      typeof selectedImageNumber === "number" &&
      fileNames.length - 1 <= selectedImageNumber
    ) {
      setSelectedImage(null);
      setSelectedImageNumber(null);
      setEditFileFlag(true);
    }
  };

  const handleSaveEditImage = (index: number) => {
    saveImage(index, true);
    setSelectedImage(null);
    setSelectedImageNumber(null);
  };

  const handleSaveEditUncroppedImage = (index: number) => {
    saveImage(index, false);
    setSelectedImage(null);
    setSelectedImageNumber(null);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over?.id) {
      setFilePreviews((previews) => {
        const activeIndex = previews.indexOf(String(active.id));
        const overIndex = previews.indexOf(String(over.id));

        const updatedPreviews = arrayMove(previews, activeIndex, overIndex);
        const rearrangedPhotos = arrayMove<File>(
          photos as File[],
          activeIndex,
          overIndex
        );
        handleIndexFileChangeForm(rearrangedPhotos);
        setFilePreviews(updatedPreviews);

        setFileNames((names) => {
          const updatedNames = arrayMove(names, activeIndex, overIndex);
          return updatedNames;
        });

        return updatedPreviews;
      });
    }
  };

  const handlePreviewImage = (preview: string, index: number) => {
    setSelectedImage(preview);
    setSelectedImageNumber(index);
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        childRef.current?.imgRef &&
        childRef.current?.previewCanvasRef
      ) {
        canvasPreview(
          childRef.current?.imgRef,
          childRef.current?.previewCanvasRef,
          completedCrop
        );
      }
    },
    100,
    [completedCrop]
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  return (
    <FullContainer>
      <FileInputContainerContent>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="darkGray2">
          {label}
        </Typography>
        <FileInputContainer
          onKeyDown={handleKeyDown}
          tabIndex={0}>
          <FileInput
            tabIndex={-1}
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
            accept="image/*"
          />

          <Typography
            variant="UI/UI Text 14 Reg"
            color="midGray4"
            tag="span">
            Upload
          </Typography>
          <PlusIconContainer>
            <StyledPlusIcon />
          </PlusIconContainer>
        </FileInputContainer>
        <Typography
          variant="UI Small/UI Text 12 Reg"
          color="midGray4">
          {description}
        </Typography>
      </FileInputContainerContent>

      {selectedImage && (
        <CropImage
          handleSaveUncroppedImage={handleSaveUncroppedImage}
          handleSaveEditUncroppedImage={handleSaveEditUncroppedImage}
          editFileFlag={editFileFlag}
          ref={childRef}
          selectedImageNumber={selectedImageNumber}
          selectedImage={selectedImage}
          onImageLoad={onImageLoad}
          handleSelectedImageChange={handleSelectedImageChange}
          completedCrop={completedCrop}
          crop={crop}
          handleCompletedCrop={handleCompletedCrop}
          handleCrop={handleCrop}
          handleRemoveFilesUpToIndex={handleRemoveFilesUpToIndex}
          handleSaveImage={handleSaveImage}
          handleSaveEditImage={handleSaveEditImage}
        />
      )}

      {filePreviews.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}>
          <SortableContext
            items={filePreviews}
            strategy={horizontalListSortingStrategy}>
            <StyledImgsContainer>
              {filePreviews.map((preview, index) => (
                <PhotoPreviewNewPhotos
                  fileName={fileNames[index]}
                  handlePreviewImage={handlePreviewImage}
                  handleRemoveFile={handleRemoveFile}
                  index={index}
                  preview={preview}
                  isAddNewCard={isAddNewCard}
                  key={preview + index}
                />
              ))}
            </StyledImgsContainer>
          </SortableContext>
        </DndContext>
      )}
    </FullContainer>
  );
};

export default CustomFileInput;
