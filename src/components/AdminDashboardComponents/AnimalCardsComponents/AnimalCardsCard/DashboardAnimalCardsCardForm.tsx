import { GenreType, PetItem } from "services/pet/petTypes";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  StyledCardFooter,
  StyledCardFormContentContainer,
  StyledCardImgContainer,
  StyledCardInputContainer,
} from "./utils/DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import {
  useDeleteStorageImages,
  useGetStorageImagesForAnimal,
  usePostStoragePictures,
} from "services/storage/storageServices";
import { useQueryClient } from "@tanstack/react-query";
import CustomFileInput from "components/SharedComponents/FileInput/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePutShelterCardsAnimal } from "services/pet/petServices";
import DashboardAnimalCardsCardFields from "./DashboardAnimalCardsCardFields";
import { PetCard } from "./utils/DashboardAnimalCardsUtils";
import AnimalCardsCardActions from "./AnimalCardsCardActions";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { KeyboardSensor, MouseSensor } from "utils/dndKitUtils/customEvents";
import PhotoPreviewImage from "components/SharedComponents/DragAndDrop/PhotoPreviewImage";
import DeleteAllImagesModal from "./DeleteAllImagesModal";
import ImageSkeleton from "./utils/ImageSkeleton";
import { ErrorSkeleton } from "./utils/ErrorSkeleton";
import toastService from "singletons/toastService";
import { useTranslation } from "react-i18next";
import useAnimalCardsValidation from "./utils/useAnimalCardsValidation";

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: PetItem;
}) => {
  const { t } = useTranslation(["animalCards", "translation"]);
  const { animalCardsCardValidationSchema } = useAnimalCardsValidation();
  const {
    isSuccess: GetStorageImagesIsSuccess,
    data: imagesUrls,
    isLoading: GetStorageImagesIsLoading,
    isError: GetStorageImagesIsError,
  } = useGetStorageImagesForAnimal(data.photos, data.petId);
  const [localImageUrls, setLocalImageUrls] = useState<string[]>([]);
  const { mutate: postStoragePicture, isSuccess: postStorageIsSuccess } =
    usePostStoragePictures();
  const { mutate: putShelterCardsFn } = usePutShelterCardsAnimal();
  const { mutate: deleteStorageImagesFn } = useDeleteStorageImages();
  const navigate = useNavigate();
  const initialValues: PetCard = {
    ...data,
    isSterilized: data.isSterilized.toString(),
    isVisible: data.isSterilized.toString(),
    months: data.months,
    animalCategory: data.animalCategory as GenreType,
    species: data.species,
    newPhotos: [],
  };

  const handleOnFileDelete = (index: number) => {
    const photoList = [...photos];
    photoList.splice(index, 1);

    formik.setFieldValue("photos", photoList);
  };



const removeNewPhotoAtIndex = (index: number) => {
  if (Array.isArray(formik.values.newPhotos))
    formik.setFieldValue(
      "newPhotos",
      formik.values.newPhotos.filter((_, i) => i !== index)
    );
};

const handleSubmit = () => {
  if (formik.values.newPhotos && formik.values.newPhotos.length > 0) {
    postStoragePicture(formik.values.newPhotos, {
      onSuccess: (newData) => {
        formik.setFieldValue("photos", [...photos, ...newData]);
        const { newPhotos, ...values } = formik.values;
        putShelterCardsFn(
          {
            ...values,
            isSterilized: JSON.parse(values.isSterilized),
            isVisible: JSON.parse(values.isVisible),
            photos: [...values.photos, ...newData],
          } as PetItem,
          {
            onSuccess: () => {
              const animalName = formik.values.name;

              toastService.showToast(
                t("cardPromises.cardUpdateSuccess", { animalName }),
                "success"
              );

              const newPhotos = data.photos.filter((dataPhoto) => {
                console.log(values.photos);
                return ![...values.photos, ...newData].includes(dataPhoto);
              });
              deleteStorageImagesFn(newPhotos, {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: ["shelterCardsCard", data.petId],
                  });
                  queryClient.invalidateQueries({
                    queryKey: ["storageImages", data.petId],
                  });
                  formik.setFieldValue("newPhotos", []);
                },
              });
            },
          }
        );
      },
    });
  } else {
    const { newPhotos, ...values } = formik.values;
    putShelterCardsFn(
      {
        ...values,
        isSterilized: JSON.parse(values.isSterilized),
        isVisible: JSON.parse(values.isVisible),
      } as PetItem,
      {
        onSuccess: () => {
          const animalName = formik.values.name;
          toastService.showToast(
            t("cardPromises.cardUpdateSuccess", { animalName }),
            "success"
          );

          const newPhotos = data.photos.filter((dataPhoto) => {
            return !values.photos.includes(dataPhoto);
          });
          deleteStorageImagesFn(newPhotos, {
            onSuccess: () => {
              queryClient.invalidateQueries(["shelterCardsCard", data.petId]);
              queryClient.invalidateQueries(["storageImages", data.petId]);
            },
          });
        },
      }
    );
  }
};

const formik = useFormik({
  initialValues,
  validationSchema: animalCardsCardValidationSchema,
  onSubmit: handleSubmit,
});

const photos = formik.values.photos;
const photosLength =
  (formik.values.photos
    ? formik.values.photos.length + formik.values.newPhotos!.length
    : formik.values.newPhotos!.length) || 0;

const queryClient = useQueryClient();

const handleIndexFileChangeForm = (files: File[]) => {
  formik.setFieldValue("photos", files);
};

const sensors = useSensors(
  useSensor(MouseSensor, {
    activationConstraint: {
      distance: 8,
    },
  }),
  useSensor(KeyboardSensor)
);

const onDragEnd = (event: DragEndEvent) => {
  if (isEditOn) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over?.id) {
      setLocalImageUrls((urls) => {
        const activeIndex = urls.indexOf(String(active.id));
        const overIndex = urls.indexOf(String(over.id));

        const updatedPhotos = arrayMove(photos, activeIndex, overIndex);
        const updatedUrls = arrayMove(localImageUrls, activeIndex, overIndex);
        formik.setFieldValue("photos", updatedPhotos);

        return updatedUrls;
      });
    }
  }
};

const removePhotoAtIndex = (indexToRemove: number) => {
  const updatedPhotos = formik.values.photos.filter(
    (_, index) => index !== indexToRemove
  );
  const updatedPhotosUrls = localImageUrls.filter(
    (_, index) => index !== indexToRemove
  );

  formik.setFieldValue("photos", updatedPhotos);
  setLocalImageUrls(updatedPhotosUrls);
};

const handleOnFileChange = (files: File[] | null | File, index: number) => {
  const prevFiles = formik.values.newPhotos;
  const updatedFiles = prevFiles ? [...prevFiles] : [];

  if (files instanceof File && files) {
    updatedFiles[index] = files;
  }

  if (Array.isArray(files) && files.length > 0) {
    updatedFiles[index] = files[0];
  }

  formik.setFieldValue("newPhotos", updatedFiles);
};

useEffect(() => {
  if (GetStorageImagesIsSuccess && imagesUrls) {
    setLocalImageUrls(imagesUrls);
  }
}, [GetStorageImagesIsSuccess, imagesUrls]);

return (
  <StyledCardFormContentContainer
    isEditOn={isEditOn}
    onSubmit={formik.handleSubmit}>
    {!isEditOn && <AnimalCardsCardActions id={data.petId} />}

    {GetStorageImagesIsError && (
      <StyledCardImgContainer>
        {data.photos.map((photo, index) => (
          <ErrorSkeleton key={photo + index} />
        ))}
      </StyledCardImgContainer>
    )}

    {GetStorageImagesIsLoading && (
      <StyledCardImgContainer>
        {data.photos.map((photo, index) => (
          <ImageSkeleton key={photo + index} />
        ))}
      </StyledCardImgContainer>
    )}

    {localImageUrls && (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}>
        <SortableContext
          items={localImageUrls}
          strategy={horizontalListSortingStrategy}>
          <StyledCardImgContainer>
            {localImageUrls.map((photo, index) => (
              <PhotoPreviewImage
                removePhotoAtIndex={removePhotoAtIndex}
                id={data.petId}
                index={index}
                key={photo + index}
                isEditOn={isEditOn}
                photo={photo}
              />
            ))}
          </StyledCardImgContainer>
        </SortableContext>
      </DndContext>
    )}
    {data.photos && data.photos.length > 0 && isEditOn && (
      <DeleteAllImagesModal id={data.petId} />
    )}

    <StyledCardInputContainer>
      <DashboardAnimalCardsCardFields
        isEditOn={isEditOn}
        formik={formik}
      />

      {isEditOn && (
        <FormRow label={t("translation:animalCard.addNewPhotos")}>
          <CustomFileInput
            isUploadSuccess={postStorageIsSuccess}
            existingFiles={photosLength}
            photos={photos}
            isAddNewCard={photos.length === 0}
            handleIndexFileChangeForm={handleIndexFileChangeForm}
            onFileDelete={removeNewPhotoAtIndex}
            onFileChange={handleOnFileChange}
            description={t("translation:animalCard.addNewPhotosDesc")}
          />
        </FormRow>
      )}
    </StyledCardInputContainer>
    {isEditOn && (
      <StyledCardFooter>
        <Button
          type="button"
          onClick={() => navigate(-1)}
          variant="outline">
          {t("translation:buttons.cancel")}
        </Button>
        <Button>{t("translation:buttons.save")}</Button>
      </StyledCardFooter>
    )}
  </StyledCardFormContentContainer>
);
};

export default DashboardAnimalCardsCardForm;
