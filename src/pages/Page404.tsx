import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LappkaLogo from "assets/LappkaLogo.png";
import { getColor } from "utils/styles/getStyle/getColor";
import { useTranslation } from "react-i18next";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${getColor("lightGray5")};
`;

const NotFoundLogo = styled.img`
  height: 50px;
  object-fit: cover;
`;

const NotFoundHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const RedirectText = styled.p`
  font-size: 1.2rem;
`;

const HomeLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0.5rem;
`;

function Page404() {
  const [redirectCountdown, setRedirectCountdown] = useState(3);
  const navigate = useNavigate();
  const hasPrevious = document.referrer !== "";
  const { t } = useTranslation("page404");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRedirectCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      if (hasPrevious) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate, hasPrevious]);

  return (
    <NotFoundContainer>
      <NotFoundLogo
        src={LappkaLogo}
        alt={"Łappka logo"}
      />
      <NotFoundHeading>{t("404")}</NotFoundHeading>
      <RedirectText>{t("redirect", { redirectCountdown })} </RedirectText>
      <HomeLink onClick={() => navigate("/")}>{t("dontWannaWait?")}</HomeLink>
      <HomeLink onClick={() => navigate(-1)}>{t("orMainSite")}</HomeLink>
    </NotFoundContainer>
  );
}

export default Page404;
