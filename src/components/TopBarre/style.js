import styled from "styled-components";

export const TopStyled = styled.section`
  width: 100%;
  padding: 2.8em 0em 2.5em 0.1em;
  display: flex;
  justify-content: space-between;
  color: white;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    padding: 0.7em 0em 2.1em 0.1em;
  }
`;
export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 0.38em;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    font-size: 1.65em;
  }
`;
export const Switch = styled.img`
  width: 1.7em;
  height: max-content;
  padding: 0.2em 0em 0em 0em;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    width: 1.3em;
    padding: 0em 0em 0em 0em;
  }
`;
