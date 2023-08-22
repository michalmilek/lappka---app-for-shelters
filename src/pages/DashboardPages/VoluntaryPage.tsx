import { useShelterVolunteering } from "services/pet/petServices";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import { StyledDashboardVoluntaryMainContent } from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import SkeletonVoluntary from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/SkeletonVoluntary";
import VoluntaryForm from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/VoluntaryForm";
import useToast from "hooks/useToast";
import { useEffect } from "react";
import ErrorVoluntary from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/ErrorVoluntary";

const VoluntaryPage = () => {
  const { data, isLoading, isError, error, isSuccess } =
    useShelterVolunteering("123");

  const { showToast } = useToast();

  useEffect(() => {
    if (isError) {
      //console.log(error.message);
      showToast("error", "error");
    }
  }, [isError, showToast, error]);

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wolontariat" />
      <StyledDashboardVoluntaryMainContent>
        {isLoading && <SkeletonVoluntary />}
        {isSuccess && data && <VoluntaryForm data={data} />}
        {isError && <ErrorVoluntary />}
      </StyledDashboardVoluntaryMainContent>
    </StyledProtectedPageContent>
  );
};

export default VoluntaryPage;
