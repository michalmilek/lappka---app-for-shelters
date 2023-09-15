import { useGetStorageImagesForId } from "services/storage/storageServices";
import {
  StyledTableImg,
  StyledTableImgError,
  StyledTableImgSkeleton,
} from "./AnimalCardsTable.styled";

export const TableProfileImage = ({
  imgId,
  animalName,
}: {
  imgId: string;
  animalName: string;
}) => {
  const {
    data: img,
    isLoading,
    isSuccess,
    isError,
  } = useGetStorageImagesForId(imgId);

    if (isError && imgId) {
      return <StyledTableImgError />;
    }

    if (isLoading && imgId) {
      return <StyledTableImgSkeleton />;
    }

    if (isSuccess && img && imgId) {
      return (
        <StyledTableImg
          src={img}
          alt={animalName + " profile photo"}
        />
      );
    }

    return null;
};
