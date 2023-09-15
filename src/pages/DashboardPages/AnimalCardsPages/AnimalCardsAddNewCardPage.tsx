import { usePostShelterCardsCreatePet } from "services/pet/petServices";
import { usePostStoragePictures } from "services/storage/storageServices";
import AnimalCardsAddNewCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm";
import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import {
  AddNewAnimalCardInterface,
  addNewCardInitialValues,
  cardValidationSchema,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AddNewCardUtils";
import { CreatePet } from "services/pet/petTypes";
import { useTranslation } from "react-i18next";
import useAddNewCardValidation from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/useAddNewCardValidation";

const AnimalCardsAddNewCardPage = () => {
  const { addNewCardValidation } = useAddNewCardValidation();
  const navigate = useNavigate();
  const { t } = useTranslation(["translation, animalCards"]);
  const { mutate: postStorageFn, isSuccess: postStorageIsSuccess } =
    usePostStoragePictures();
  const { mutate: postAnimalFn } = usePostShelterCardsCreatePet();

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    if (formik.values.photos instanceof Array<File>) {
      const photovalues = formik.values.photos;

      postStorageFn(photovalues, {
        onSuccess: (data) => {
          postAnimalFn({
            ...values,
            isSterilized: JSON.parse(values.isSterilized),
            isVisible: JSON.parse(values.isSterilized),
            photos: data,
            profilePhoto: data[0],
          } as CreatePet);
        },
      });
    }
  };

  const formik = useFormik({
    initialValues: addNewCardInitialValues,
    validationSchema: addNewCardValidation,
    onSubmit,
  });

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        Button={
          <Button
            onClick={() => navigate(-1)}
            variant="outline">
            {t("translation:buttons.cancel")}
          </Button>
        }
      />
      <StyledDashboardAddNewCardMainContent>
        <AnimalCardsAddNewCardForm
          postStorageIsSuccess={postStorageIsSuccess}
          formik={formik}
        />
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsAddNewCardPage;
