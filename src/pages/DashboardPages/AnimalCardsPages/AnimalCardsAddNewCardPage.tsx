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
import { AnimalCreatePetInterface } from "services/pet/petTypes";

const AnimalCardsAddNewCardPage = () => {
  const navigate = useNavigate();

  const { mutate: postStorageFn } = usePostStoragePictures();
  const { mutate: postAnimalFn } = usePostShelterCardsCreatePet();

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    if (formik.values.photos instanceof Array<File>) {
      const photovalues = formik.values.photos;

      postStorageFn(photovalues, {
        onSuccess: (data) => {
          postAnimalFn({
            ...values,
            photos: data,
            profilePhoto: data[0],
          } as AnimalCreatePetInterface);
        },
      });
    }
  };

  const formik = useFormik({
    initialValues: addNewCardInitialValues,
    validationSchema: cardValidationSchema,
    onSubmit,
  });

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
