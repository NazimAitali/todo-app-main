import styled from "styled-components";

export const InputStyled = styled.section`
  width: 99%;
  margin: 0em auto 1.55em auto;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
  border-radius: 0.3em;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 50px;
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    margin: 0em auto 1.1em auto;
  }
`;

export const InpuTodo = styled.input`
  width: 80%;
  border: none;
  outline: none;
  font-size: 1.1em;
  color: ${({ theme }) => theme.Colors.DisplayTxt};
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
  &::placeholder {
    color: ${({ theme }) => theme.Colors.DisplayTxt};
  }
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    font-size: 0.8em;
  }
`;
