import React, { useState } from "react";
import ReactCrop, { centerCrop, makeAspectCrop, Crop } from "react-image-crop";
import Button from "components/SharedComponents/Button/Button";
import {
  ModalContentContainer,
  ModalDiv,
  ModalFooter,
  ModalHeader,
} from "../CustomFileInput.styled";
import Typography from "components/SharedComponents/Typography/Typography";

interface ImageCropProps {
  selectedImage: string | null;
  handleSelectedImageChange: (
    image: string | null,
    imageNumber: number | null
  ) => void;
  handleSaveImage: (index: number) => void;
  selectedImageNumber: number | null;
}

const ImageCrop: React.FC<ImageCropProps> = ({
  selectedImage,
  handleSelectedImageChange,
  handleSaveImage,
  selectedImageNumber,
}) => {
  const [crop, setCrop] = useState<Crop>();

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
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
    <ModalDiv>
      <ModalContentContainer>
        <ModalHeader>
          <Typography
            variant="Heading 18 Semi Bold"
            color="darkGray2">
            Edytuj zdjęcie
          </Typography>
        </ModalHeader>
        <ReactCrop
          ruleOfThirds
          aspect={16 / 9}
          maxHeight={600}
          maxWidth={600}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}>
          <img
            onLoad={onImageLoad}
            src={selectedImage || ""}
            alt=""
          />
        </ReactCrop>
        <ModalFooter>
          <Button
            variant="outline"
            onClick={() => {
              handleSelectedImageChange(null, null);
            }}>
            Anuluj
          </Button>
          <Button
            onClick={() => {
              if (typeof selectedImageNumber === "number") {
                handleSaveImage(selectedImageNumber);
              }
            }}>
            Zapisz
          </Button>
        </ModalFooter>
      </ModalContentContainer>
    </ModalDiv>
  );
};

export default ImageCrop;
