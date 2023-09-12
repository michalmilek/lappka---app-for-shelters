import { ReactCrop } from "react-image-crop";
import styled, { css } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { CloseIcon, PlusIcon } from "../icons/icons";
import { CheckIcon } from "@heroicons/react/20/solid";

interface StyledImgPreviewContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  addNewCard?: boolean;
  index?: number;
}

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

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
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
  flex-wrap: wrap;
`;

export const StyledImgPreviewContainer = styled.div<StyledImgPreviewContainerProps>`
  position: relative;
  width: 100px;
  height: 100px;
  object-fit: "cover";

  .editBtn {
    display: none;
    z-index: 1000;
    height: 30px;
    width: 30px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: 700;
    fill: ${getColor("darkGray2")};
  }

  .profilePictureIcon:hover ~ .editBtn,
  .previewImg:hover ~ .editBtn,
  .deleteIcon:hover ~ .editBtn {
    display: block !important;
  }

  /* ${({ addNewCard, index }) =>
    addNewCard &&
    index === 0 &&
    css`
      border: 2px solid ${getColor("darkGray2")};
      border-radius: 6px;
    `} */
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

export const StyledProfileIcon = styled(CheckIcon)`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 0;
  left: 0;
  background: ${getColor("white")};
  color: ${getColor("darkGray2")};
  font-size: 12px;
  font-weight: 600;
  padding: 2px;
  cursor: not-allowed;
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
`;


export const ModalDiv = styled.div`
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2500;
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
  max-height: 80vh;
  display: flex;
`;
