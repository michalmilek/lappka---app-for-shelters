import {
  usePostShelterCardsAnimal,
  usePostShelterCardsCat,
  usePostShelterCardsDog,
  usePostShelterCardsOther,
} from "services/pet/petServices";
import {
  Animal,
  GenderType,
  GenreType,
  PetBreed,
  PetBreedLabel,
} from "services/pet/petTypes";
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
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { BreedArray } from "./AnimalCardsUtils";
import useToast from "hooks/useToast";
import { setLoading } from "redux/loadingSlice";
import { useDispatch } from "react-redux";

export interface AddNewAnimalCardInterface {
  name: string;
  description: string;
  type: GenreType | "";
  gender: GenderType | "";
  color: string;
  months: number | undefined;
  weight: number | undefined;
  breed: PetBreed | "";
  photos: File[] | string[];
  profilePhoto: string;
  isSterilized: boolean | "";
  isVisible: boolean | "";
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("To pole jest wymagane"),
  description: Yup.string().required("To pole jest wymagane"),
  type: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  breed: Yup.string().when("type", {
    is: (type: string) => type === "Dog" || type === "Cat",
    then: () =>
      Yup.string()
        .oneOf(BreedArray, "Nieprawidłowy wybór")
        .required("To pole jest wymagane"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  color: Yup.string().required("To pole jest wymagane"),
  months: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  weight: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  isSterilized: Yup.bool()
    .oneOf([true, false], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  isVisible: Yup.bool()
    .oneOf([true, false], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
});

const AnimalCardsAddNewCardPage = () => {
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: AddNewAnimalCardInterface = {
    name: "",
    description: "",
    type: "",
    gender: "",
    color: "",
    months: undefined,
    weight: undefined,
    photos: [],
    isSterilized: "",
    isVisible: "",
    profilePhoto: "",
    breed: "",
  };

  const { isLoading, isError, mutate } = usePostStoragePictures();
  const {
    isLoading: isLoadingAnimal,
    isError: isErrorAnimal,
    isSuccess: isSuccessAnimal,
    mutate: postAnimalFn,
  } = usePostShelterCardsAnimal();

  const { mutate: deleteImgFromStorage } = useDeleteStorageImage();

  const onSubmit = async (values: AddNewAnimalCardInterface) => {
    if (values.photos instanceof Array<File>) {
      console.log(values.photos);

      mutate(values.photos as File[], {
        onSuccess: (responseData) => {
          formik.setFieldValue("photos", responseData);
          formik.setFieldValue("profilePicture", responseData[0]);
          postAnimalFn(formik.values as Animal, {
            onSuccess: () => {
              showToast(
                `Karta dla zwierzęcia o imieniu ${values.name} została utworzona`,
                "success"
              );
              //navigate("/dashboard");
            },
          });
        },
      });
    }
    //deleteImgFromStorage("26a15980-b2ef-49e1-b27e-86679852cf77");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isLoading && isLoadingAnimal) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, isLoading, isLoadingAnimal]);

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
