import React, { useRef } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import Button from "components/SharedComponents/Button/Button";
import {
  ModalContentContainer,
  ModalDiv,
  ModalFooter,
  ModalHeader,
  ReactImageCropContainer,
} from "../CustomFileInput.styled";
import Typography from "components/SharedComponents/Typography/Typography";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "redux/imageSlice";
import { getColor } from "utils/styles/getStyle/getColor";

interface ImageCropProps {
  crop?: Crop;
  handleCrop: (cropValue: Crop) => void;
  selectedImage: string | null;
  handleSelectedImageChange: (
    image: string | null,
    imageNumber: number | null
  ) => void;
  handleSaveImage: (index: number) => void;
  selectedImageNumber: number | null;
  handleSaveUncroppedImage: (index: number) => void;
}

const ImageCrop: React.FC<ImageCropProps> = ({
  selectedImage,
  crop,
  handleCrop,
  handleSelectedImageChange,
  handleSaveUncroppedImage,
  handleSaveImage,
  selectedImageNumber,
}) => {
  const imgRef = useRef<null>(null);
  const dispatch = useDispatch();

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    if (imgRef.current) {
      const computedStyle = window.getComputedStyle(imgRef.current);
      const width = computedStyle.getPropertyValue("width");
      const height = computedStyle.getPropertyValue("height");
      const numericValueWidth = parseFloat(width);
      const numericValueHeight = parseFloat(height);
      dispatch(setWidth(numericValueWidth));
      dispatch(setHeight(numericValueHeight));
    }

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 20,
        },
        16 / 9,
        width,
        height
      ),
      width,
      height
    );

    handleCrop(crop);
  }

  return (
    <ModalDiv>
      <ModalContentContainer>
        <ModalHeader>
          <Typography
            variant="Heading 18 Semi Bold"
            color="darkGray2">
            Edytuj zdjęcie
          </Typography>
        </ModalHeader>
        <ReactImageCropContainer
          ruleOfThirds
          aspect={16 / 9}
          maxHeight={900}
          maxWidth={2000}
          crop={crop}
          onChange={(newCrop: PixelCrop) => handleCrop(newCrop)}>
          <img
            style={{ border: `2px solid ${getColor("facebook")}` }}
            ref={imgRef}
            onLoad={onImageLoad}
            src={selectedImage || ""}
            alt=""
          />
        </ReactImageCropContainer>
        <ModalFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              handleSelectedImageChange(null, null);
            }}>
            Anuluj
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (typeof selectedImageNumber === "number") {
                handleSaveImage(selectedImageNumber);
              }
            }}>
            Zapisz
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (typeof selectedImageNumber === "number") {
                handleSaveUncroppedImage(selectedImageNumber);
              }
            }}>
            Zapisz (bez przycinania)
          </Button>
        </ModalFooter>
      </ModalContentContainer>
    </ModalDiv>
  );
};

export default ImageCrop;
