import React, { useRef, useState, useEffect } from "react";
import Typography from "../Typography/Typography";
import { Crop } from "react-image-crop";
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
} from "./CustomFileInput.styled";
import ImageCrop from "./Crop/ImageCrop";
import { useSelector } from "react-redux";
import { selectImageHeight, selectImageWidth } from "redux/imageSlice";
import useDeviceType from "hooks/useDeviceType";
export interface CustomFileInputProps {
  label?: string;
  description?: string;
  onFileChange: (files: File[] | null | File) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  onFileChange,
  description = "",
  label = "",
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
    if (files) {
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);

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
    }
  };

  const handleClearFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFileNames([]);
    setFilePreviews([]);
    onFileChange(null);
  };

  const handleRemoveFile = (index: number) => {
    const updatedPreviews = [...filePreviews];
    updatedPreviews.splice(index, 1);
    setFilePreviews(updatedPreviews);

    const updatedNames = [...fileNames];
    updatedNames.splice(index, 1);
    setFileNames(updatedNames);

    if (updatedPreviews.length === 0) {
      handleClearFiles();
    } else {
      const dataTransfer = new DataTransfer();
      updatedPreviews.forEach((preview, idx) => {
        const base64String = preview.split(",")[1];
        const byteString = atob(base64String);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([arrayBuffer], { type: "image/jpeg" });
        const file = new File([blob], updatedNames[idx]);
        dataTransfer.items.add(file);
      });
    }
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
        <StyledImgsContainer>
          {filePreviews.map((preview, index) => (
            <StyledImgPreviewContainer key={preview + index}>
              <StyledPreviewPhoto
                title="Edytuj zdjęcie"
                key={index}
                src={preview}
                alt={`Preview ${fileNames[index]}`}
                onClick={() => {
                  setSelectedImage(preview);
                  setSelectedImageNumber(index);
                }}
              />
              {<span className="editBtn">Edytuj</span>}
              <StyledCloseIcon
                title="Usuń zdjęcie"
                onClick={() => handleRemoveFile(index)}
              />
            </StyledImgPreviewContainer>
          ))}
        </StyledImgsContainer>
      )}

      {selectedImage && !editFileFlag && largerThanTablet && (
        <ImageCrop
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
