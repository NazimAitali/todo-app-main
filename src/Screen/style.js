import styled from "styled-components";

export const ScreenStyled = styled.section`
  width: 34em;
  height: max-content;
  margin: 2em 0em 0em 0em;
  @media (min-width: ${({ theme }) => theme.screen.Desktop}) {
    width: 40em;
  }
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    width: 20.5em;
  }
`;
export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.83em;
  padding: 3.2em;
  color: ${({ theme }) => theme.Colors.DisplayTxt};
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    padding: 1.5em 3.2em 1.5em 3.2em;
  }
`;
