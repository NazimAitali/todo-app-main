import styled from "styled-components";
export const DisplayStyled = styled.section`
  width: 99%;
  height: 27.5em;
  overflow-y: auto;
  scrollbar-width: thin;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 0.3em;
  color: ${({ theme }) => theme.Colors.DisplayTxt};
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    //box-shadow: none;
    height: 22em;
  }
`;
export const TodoContainer = styled.section`
  width: 100%;
  height: max-content;
  overflow-y: auto;
  scrollbar-width: thin;
  margin: 0em auto 0em auto;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;
export const Todo = styled.section`
  width: 100%;
  display: flex;
  border-bottom: 0.05em solid ${({ theme }) => theme.Colors.TodoBorder};
`;
export const ListEmpty = styled.img`
  width: 50%;
  margin: 11.4% 25%;
`;
export const TodoDetail = styled.section`
  display: flex;
  flex: 2;
`;
export const Txt = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.095em;
  text-decoration: ${({ line }) => line};
  color: ${({ color }) => color};
  @media (max-width: ${({ theme }) => theme.screen.Mobile}) {
    font-size: 0.73em;
  }
`;
export const Close = styled.section`
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5em;
  flex: 0.5;
  ${Todo}:hover & {
    display: flex;
  }
  img {
    width: 17%;
    cursor: pointer;
  }
`;
