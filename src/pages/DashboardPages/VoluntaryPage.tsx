import { useShelterVolunteering } from "services/pet/petServices";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import { StyledDashboardVoluntaryMainContent } from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import SkeletonVoluntary from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/SkeletonVoluntary";
import VoluntaryForm from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/VoluntaryForm";
import ErrorVoluntary from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/ErrorVoluntary";

const VoluntaryPage = () => {
  const { data, isLoading, isError, isSuccess } = useShelterVolunteering();

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
