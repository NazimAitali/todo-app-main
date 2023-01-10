import styled from "styled-components";

export const CircleStyled = styled.section`
  width: 1.43em;
  height: 1.43em;
  background: ${({ bg, theme }) => bg || theme.Colors.DarkGrayishBlue};
  border-radius: 10em;
  margin: 1.3em 1.5em 1.27em 1.5em;
  cursor: pointer;
  position: relative;
  &:hover {
    background: linear-gradient(135deg, #57ddff, #c058f3);
  }
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    width: 1.2em;
    height: 1.2em;
    margin: 0.85em 0.7em 0.85em 1.2em;
  }
`;
export const CircleHovred = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.33em;
  height: 1.33em;
  border: ${({ border }) => border};
  background: ${({ bg, theme }) => bg || theme.Colors.BgSecondary};
  border-radius: 10em;
  cursor: pointer;
  position: absolute;
  top: 0.055em;
  left: 0.055em;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    width: 1.1em;
    height: 1.1em;
  }
  img {
    width: 55%;
  }
`;
