import { useState } from "react";
import Display from "../components/Display";
import Input from "../components/Input";
import TopBarre from "../components/TopBarre";
import { ScreenStyled, Copyright } from "./style";

const Screen = ({ Dark, setDark }) => {
  const [list, setList] = useState([
    { title: "Complete online JavaScript course", status: "Active" },
    { title: "Jog around the park 3x", status: "Active" },
    { title: "10 minutes meditation", status: "Active" },
    { title: "Read for 1 hour", status: "Active" },
    { title: "Pick up groceries", status: "Active" },
    { title: "Complete Todo App on Frontend Mentor", status: "Active" },
  ]);
  return (
    <ScreenStyled>
      <TopBarre setDark={setDark} Dark={Dark} />
      <Input list={list} setList={setList} />
      <Display list={list} setList={setList} />
      <Copyright>Drag and drop to reorder list</Copyright>
    </ScreenStyled>
  );
};

export default Screen;
