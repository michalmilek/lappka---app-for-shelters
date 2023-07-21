import React, { useRef, useState } from "react";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { CloseIcon, PlusIcon } from "../icons/icons";
import Typography from "../Typography/Typography";

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FileInputContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FileInputContainer = styled.label`
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  padding: 8px 0 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 1px solid ${getColor("lightGray1")};
  border-radius: 6px;
  background: ${getColor("white")};
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  background: ${getColor("lightGray1")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledImgPreviewContainer = styled.div`
  position: relative;
  width: 56px;
  height: 72px;
  object-fit: "cover";
`;

const StyledPlusIcon = styled(PlusIcon)`
  cursor: pointer;
  height: 16px;
  width: 16px;
  & path {
    stroke: ${getColor("midGray2")};
  }
`;

const StyledPreviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: "cover";
  border-radius: 6px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: -5%;
  right: -5%;
  z-index: 10;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background: ${getColor("white")};
  box-shadow: 0px 1px 2px 0px #1018280d;

  & path {
    stroke: ${getColor("midGray2")};
  }
`;

interface CustomFileInputProps {
  label?: string;
  description?: string;
  onFileChange: (files: FileList | null) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  onFileChange,
  description = "",
  label = "",
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          <IconContainer>
            <StyledPlusIcon />
          </IconContainer>
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
              />
              <StyledCloseIcon onClick={() => handleRemoveFile(index)} />
            </StyledImgPreviewContainer>
          ))}
        </StyledImgsContainer>
      )}
    </FullContainer>
  );
};

export default CustomFileInput;
