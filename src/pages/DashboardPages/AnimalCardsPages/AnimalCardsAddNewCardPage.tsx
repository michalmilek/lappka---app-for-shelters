import { usePostShelterCardsCreatePet } from "services/pet/petServices";
import {
  useDeleteStorageImage,
  usePostStoragePictures,
} from "services/storage/storageServices";
import AnimalCardsAddNewCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm";
import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useToast from "hooks/useToast";
import {
  AddNewAnimalCardInterface,
  addNewCardInitialValues,
  cardValidationSchema,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AddNewCardUtils";
import { AnimalCreatePetInterface } from "services/pet/petTypes";

const AnimalCardsAddNewCardPage = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const { mutate: postStorageFn } = usePostStoragePictures();
  const { isSuccess: isSuccessAnimal, mutate: postAnimalFn } =
    usePostShelterCardsCreatePet();

  const { mutate: deleteImgFromStorage } = useDeleteStorageImage();

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    if (formik.values.photos instanceof Array<File>) {
      const photovalues = formik.values.photos;

      postStorageFn(photovalues, {
        onSuccess: (data) => {
          postAnimalFn({
            ...values,
            shelterId: "A6313BAD-5AE9-48B8-BED5-08DB9A61FEEF",
            photos: data,
            profilePhoto: data[0],
          } as AnimalCreatePetInterface);
        },
      });
    }
    //deleteImgFromStorage("64fb0b8e-6143-4117-aa75-ca85aed92c16");
  };

  const formik = useFormik({
    initialValues: addNewCardInitialValues,
    validationSchema: cardValidationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isSuccessAnimal) {
      showToast(
        `Karta dla zwierzęcia o imieniu ${formik.values.name} została utworzona`,
        "success"
      );
    }
  }, [formik.values.name, isSuccessAnimal, showToast]);

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        previousTitle="Karty zwierząt / "
        title="Nowa karta"
        Button={
          <Button
            onClick={() => navigate(-1)}
            variant="outline">
            Anuluj
          </Button>
        }
      />
      <StyledDashboardAddNewCardMainContent>
        <AnimalCardsAddNewCardForm formik={formik} />
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsAddNewCardPage;
