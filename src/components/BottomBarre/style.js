import styled from "styled-components";
export const BottomBarreStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.35em 1.6em;
  font-size: 0.9em;
  font-weight: 700;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.93em;
    flex: 1.5;
    @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
      font-size: 0.6em;
    }
    li {
      cursor: pointer;
    }
  }
  span {
    font-size: 0.91em;
    flex: 1.5;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
      font-size: 0.5em;
    }
  }
  p {
    font-size: 0.9em;
    flex: 1.5;
    @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
      font-size: 0.5em;
    }
  }
`;
