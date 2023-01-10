import styled from "styled-components";
import bgDeskLight from "../images/bg-desktop-light.jpg";
import bgDeskDark from "../images/bg-desktop-dark.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.Colors.bg};
  background-image: ${({ Dark }) =>
    !Dark ? `url(${bgDeskLight})` : `url(${bgDeskDark})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  overflow-y: auto;
  scrollbar-width: thin;
  position: relative;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    background-image: ${({ Dark }) =>
      !Dark ? `url(${bgMobileLight})` : `url(${bgMobileDark})`};
    background-position-y: -6.6%;
    align-items: flex-start;
  }
`;
