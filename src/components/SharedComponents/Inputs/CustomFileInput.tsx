import React, { useRef, useState } from "react";
import Typography from "../Typography/Typography";
import { Crop } from "react-image-crop";
import { PencilIcon } from "@heroicons/react/24/solid";
import "react-image-crop/dist/ReactCrop.css";
import {
  FileInput,
  FileInputContainer,
  FileInputContainerContent,
  FullContainer,
  PlusIconContainer,
  StyledCloseIcon,
  StyledImgPreviewContainer,
  StyledImgsContainer,
  StyledPlusIcon,
  StyledPreviewPhoto,
  StyledProfileIcon,
} from "./CustomFileInput.styled";
import ImageCrop from "./Crop/ImageCrop";
import { useSelector } from "react-redux";
import { selectImageHeight, selectImageWidth } from "redux/imageSlice";
import useDeviceType from "hooks/useDeviceType";
import {
  closestCenter,
  DndContext,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "../SortableItem";
import { KeyboardSensor, MouseSensor } from "utils/dndKitUtils/customEvents";
import toastService from "singletons/toastService";

export interface CustomFileInputProps {
  existingFiles?: number;
  isAddNewCard?: boolean;
  photos: string[] | File[];
  label?: string;
  description?: string;
  onFileChange: (files: File[] | null | File) => void;
  onFileDelete: (index: number) => void;
  handleIndexFileChangeForm: (files: File[]) => void;
}

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
  const deviceType = useDeviceType();
  const largerThanTablet = deviceType !== "tablet" && deviceType !== "mobile";
  const imgHeight = useSelector(selectImageHeight);
  const imgWidth = useSelector(selectImageWidth);
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

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleCrop = (cropValue: Crop) => {
    setCrop(cropValue);
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

  const saveImage = (index: number, preserveAspectRatio?: boolean) => {
    if (!selectedImage || !crop) {
      return;
    }

    const image = document.createElement("img");
    image.src = selectedImage;
    const canvas = document.createElement("canvas");

    const scaleX = image.naturalWidth / imgWidth!;
    const scaleY = image.naturalHeight / imgHeight!;

    const pixelRatio = window.devicePixelRatio;
    let transformedWidth: number, transformedHeight: number;

    if (preserveAspectRatio) {
      transformedWidth = crop.width * scaleX * pixelRatio;
      transformedHeight = crop.height * scaleY * pixelRatio;
    } else {
      transformedWidth = image.naturalWidth;
      transformedHeight = image.naturalHeight;
    }

    canvas.width = transformedWidth;
    canvas.height = transformedHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    if (preserveAspectRatio) {
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        transformedWidth,
        transformedHeight
      );
    } else {
      ctx.drawImage(image, 0, 0);
    }

    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }

      const file = new File([blob], fileNames[index], {
        type: "image/jpeg",
      });

      const updatedPreviews = [...filePreviews];
      updatedPreviews.splice(index, 1, canvas.toDataURL("image/jpeg"));
      setFilePreviews(updatedPreviews);

      onFileChange(file);
    }, "image/jpeg");
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

  return (
    <FullContainer>
      <FileInputContainerContent>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="darkGray2">
          {label}
        </Typography>
        <FileInputContainer>
          <FileInput
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
                <SortableItem
                  stringImg={preview}
                  key={preview + index}>
                  <StyledImgPreviewContainer
                    addNewCard
                    index={index}
                    key={preview + index}>
                    <StyledPreviewPhoto
                      title="Kliknij, aby edytować zdjęcie"
                      key={index}
                      src={preview}
                      alt={`Preview ${fileNames[index]}`}
                      className="previewImg"
                      onClick={() => {
                        setSelectedImage(preview);
                        setSelectedImageNumber(index);
                      }}
                    />
                    {index === 0 && isAddNewCard && (
                      <StyledProfileIcon
                        className="profilePictureIcon"
                        title="Zdjęcie profilowe, aby wybrać inne zdjęcie przeciągnij je na początek."
                      />
                    )}

                    <PencilIcon
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="editBtn"
                    />

                    <StyledCloseIcon
                      className="deleteIcon"
                      title="Kliknij, aby usunąć zdjęcie"
                      onClick={() => handleRemoveFile(index)}
                    />
                  </StyledImgPreviewContainer>
                </SortableItem>
              ))}
            </StyledImgsContainer>
          </SortableContext>
        </DndContext>
      )}

      {selectedImage && !editFileFlag && largerThanTablet && (
        <ImageCrop
          editFileFlag={editFileFlag}
          handleRemoveFilesUpToIndex={handleRemoveFilesUpToIndex}
          crop={crop}
          handleCrop={handleCrop}
          handleSaveImage={handleSaveImage}
          handleSelectedImageChange={handleSelectedImageChange}
          selectedImage={selectedImage}
          selectedImageNumber={selectedImageNumber}
          handleSaveUncroppedImage={handleSaveUncroppedImage}
        />
      )}

      {selectedImage && editFileFlag && largerThanTablet && (
        <ImageCrop
          editFileFlag={editFileFlag}
          handleRemoveFilesUpToIndex={handleRemoveFilesUpToIndex}
          crop={crop}
          handleCrop={handleCrop}
          handleSaveImage={handleSaveEditImage}
          handleSaveUncroppedImage={handleSaveEditUncroppedImage}
          handleSelectedImageChange={handleSelectedImageChange}
          selectedImage={selectedImage}
          selectedImageNumber={selectedImageNumber}
        />
      )}
    </FullContainer>
  );
};

export default CustomFileInput;
