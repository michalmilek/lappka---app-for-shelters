import Button from "components/SharedComponents/Button/Button";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Crop, PercentCrop, PixelCrop } from "react-image-crop";
import {
  ModalContentContainer,
  ModalDiv,
  ModalFooter,
  ModalHeader,
  ReactImageCropContainer,
} from "../CustomFileInput.styled";

//ReactImageCropContainer

interface Props {
  handleSaveUncroppedImage: (index: number) => void;
  handleSaveEditUncroppedImage: (index: number) => void;
  editFileFlag: boolean;
  crop: Crop | undefined;
  handleCrop: (cropValue: PercentCrop) => void;
  handleCompletedCrop: (c: PixelCrop) => void;
  selectedImage: string | null;
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  completedCrop: PixelCrop | undefined;
  selectedImageNumber: null | number;
  handleSaveImage: (index: number) => void;
  handleRemoveFilesUpToIndex: (index: number) => void;
  handleSelectedImageChange: (
    image: string | null,
    imageNumber: number | null
  ) => void;
  handleSaveEditImage: (index: number) => void;
}

export interface RefInterface {
  imgRef: HTMLImageElement | null;
  previewCanvasRef: HTMLCanvasElement | null;
}

const CropImage = forwardRef<RefInterface, Props>(
  (
    {
      handleSaveEditUncroppedImage,
      handleSaveUncroppedImage,
      handleSaveEditImage,
      editFileFlag,
      crop,
      handleCrop,
      handleCompletedCrop,
      selectedImage,
      onImageLoad,
      completedCrop,
      selectedImageNumber,
      handleSaveImage,
      handleRemoveFilesUpToIndex,
      handleSelectedImageChange,
    },
    ref
  ) => {
    const { t } = useTranslation();
    const imgRef = useRef<HTMLImageElement | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

    useImperativeHandle(ref, () => ({
      imgRef: imgRef.current,
      previewCanvasRef: previewCanvasRef.current,
    }));

    return (
      <ModalDiv>
        <ModalContentContainer>
          <ModalHeader>
            <Typography
              variant="Heading 18 Semi Bold"
              color="darkGray2">
              {t("editPhoto")}
            </Typography>
          </ModalHeader>

          {!!selectedImage && (
            <ReactImageCropContainer
              crop={crop}
              onChange={(_: PixelCrop, percentCrop: PercentCrop) =>
                handleCrop(percentCrop)
              }
              onComplete={(c: PixelCrop) => handleCompletedCrop(c)}>
              <img
                style={{ minWidth: "400px" }}
                ref={imgRef}
                alt="Crop me"
                src={selectedImage}
                onLoad={onImageLoad}
              />
            </ReactImageCropContainer>
          )}
          {!!completedCrop && (
            <>
              <div>
                <canvas
                  hidden
                  ref={previewCanvasRef}
                  style={{
                    border: "1px solid black",
                    objectFit: "contain",
                    width: completedCrop.width,
                    height: completedCrop.height,
                  }}
                />
              </div>
            </>
          )}
          <ModalFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                if (typeof selectedImageNumber === "number") {
                  if (!editFileFlag) {
                    handleRemoveFilesUpToIndex(selectedImageNumber);
                  }
                  handleSelectedImageChange(null, null);
                }
              }}>
              {t("buttons.cancel")}
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (typeof selectedImageNumber === "number") {
                  if (editFileFlag) {
                    handleSaveEditImage(selectedImageNumber);
                  } else handleSaveImage(selectedImageNumber);
                }
              }}>
              {t("buttons.save")}
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (typeof selectedImageNumber === "number") {
                  if (editFileFlag) {
                    handleSaveEditUncroppedImage(selectedImageNumber);
                  } else handleSaveUncroppedImage(selectedImageNumber);
                }
              }}>
              {t("buttons.saveWithoutCutting")}
            </Button>
          </ModalFooter>
        </ModalContentContainer>
      </ModalDiv>
    );
  }
);

export default CropImage;
