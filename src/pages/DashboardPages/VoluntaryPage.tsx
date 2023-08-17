import { useShelterVolunteering } from "services/pet/petServices";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import { StyledDashboardVoluntaryMainContent } from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import SkeletonVoluntary from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/SkeletonVoluntary";
import VoluntaryForm from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/VoluntaryForm";
import useToast from "hooks/useToast";
import { useEffect } from "react";

const VoluntaryPage = () => {
  const { data, isLoading, isError, error, isSuccess } =
    useShelterVolunteering("123");

  const { showToast } = useToast();

  /*   useEffect(() => {
    if (!initialUpdate && data && isSuccess) {
      setInitialUpdate(true);
      handleValues();
    }
  }, [data, handleValues, initialUpdate, isSuccess]); */

  useEffect(() => {
    if (isError) {
      showToast("error", "error");
    }
  }, [isError, showToast]);

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wolontariat" />
      <StyledDashboardVoluntaryMainContent>
        {isLoading && <SkeletonVoluntary />}
        {data && <VoluntaryForm data={data} />}
      </StyledDashboardVoluntaryMainContent>
    </StyledProtectedPageContent>
  );
};

export default VoluntaryPage;
