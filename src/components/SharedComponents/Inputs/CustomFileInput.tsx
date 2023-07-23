import React, { useRef, useState } from "react";
import Typography from "../Typography/Typography";
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Button from "../Button/Button";
import {
  FileInput,
  FileInputContainer,
  FileInputContainerContent,
  FullContainer,
  ModalContentContainer,
  ModalDiv,
  ModalFooter,
  ModalHeader,
  PlusIconContainer,
  StyledCloseIcon,
  StyledImgPreviewContainer,
  StyledImgsContainer,
  StyledPlusIcon,
  StyledPreviewPhoto,
} from "./CustomFileInput.styled";
import ImageCrop from "./Crop/ImageCrop";
export interface CustomFileInputProps {
  label?: string;
  description?: string;
  onFileChange: (files: FileList | File | null) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  onFileChange,
  description = "",
  label = "",
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState<number | null>(
    null
  );

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
        setFilePreviews(previews);
      });

      onFileChange(files);
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

      onFileChange(dataTransfer.files);
    }
  };

  const handleSaveImage = (index: number) => {
    const image = document.createElement("img");
    image.src = selectedImage!;
    const canvas = document.createElement("canvas");

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop!.width!;
    canvas.height = crop!.height!;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(
      image,
      crop!.x * scaleX,
      crop!.y * scaleY,
      crop!.width * scaleX,
      crop!.height * scaleY,
      0,
      0,
      crop!.width!,
      crop!.height!
    );

    canvas.toBlob(
      (blob) => {
        const base64String = canvas.toDataURL();
        const byteString = atob(base64String.split(",")[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i);
        }
        const newFile = new File([arrayBuffer], fileNames[index], {
          type: "image/jpeg",
        });

        const updatedPreviews = [...filePreviews];
        updatedPreviews.splice(index, 1, base64String);
        setFilePreviews(updatedPreviews);

        onFileChange(newFile);
        setSelectedImage(null);
        setSelectedImageNumber(null);
      },
      "image/jpeg",
      1
    );
  };

  function onImageLoad(e: any) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        16 / 9,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  }

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
                key={index}
                src={preview}
                alt={`Preview ${fileNames[index]}`}
                onClick={() => {
                  setSelectedImage(preview);
                  setSelectedImageNumber(index);
                }}
              />
              <StyledCloseIcon onClick={() => handleRemoveFile(index)} />
            </StyledImgPreviewContainer>
          ))}
        </StyledImgsContainer>
      )}

      {selectedImage && (
        <ImageCrop
          handleSaveImage={handleSaveImage}
          handleSelectedImageChange={handleSelectedImageChange}
          selectedImage={selectedImage}
          selectedImageNumber={selectedImageNumber}
        />
      )}
    </FullContainer>
  );
};

export default CustomFileInput;
