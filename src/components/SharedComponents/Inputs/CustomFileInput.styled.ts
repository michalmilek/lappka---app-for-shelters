import { ReactCrop } from "react-image-crop";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { CloseIcon, PlusIcon } from "../icons/icons";

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FileInputContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FileInputContainer = styled.label`
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

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const PlusIconContainer = styled.div`
  height: 40px;
  width: 40px;
  background: ${getColor("lightGray1")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImgsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledImgPreviewContainer = styled.div`
  position: relative;
  width: 56px;
  height: 72px;
  object-fit: "cover";

  .editBtn {
    display: none;
  }

  &:hover {
    .editBtn {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      pointer-events: none;
      color: ${getColor("red800")};
      transform: translate(-50%, -50%);
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  cursor: pointer;
  height: 16px;
  width: 16px;
  & path {
    stroke: ${getColor("midGray2")};
  }
`;

export const StyledPreviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: "cover";
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
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

  &:hover {
    .editBtn {
      display: none;
    }
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #131212ac;
`;

export const ModalContentContainer = styled.div`
  border-radius: 8px;

  background: ${getColor("white")};

  box-shadow: 0px 24px 32px 0px #5b68713d;

  box-shadow: 0px 0px 1px 0px #1a202452;
`;

export const ModalHeader = styled.header`
  padding: 8px 16px;
  width: 100%;
`;

export const ModalFooter = styled.footer`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const CroppedImage = styled.img`
  max-height: 800px;
  max-width: 1200px;
  object-fit: cover;
  object-position: center;
`;

export const ReactImageCropContainer = styled(ReactCrop)`
  max-height: 800px;

  @media screen and (max-width: 1440px) {
    max-height: 700px;
  }

  @media screen and (max-width: 1024px) {
    max-height: 600px;
  }
`;
