import { InputStyled, InpuTodo } from "./style";
import Circle from "../common/Circle";
import { useState } from "react";
const Input = ({ list, setList }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setList([...list, { title: newTodo, status: "Active" }]);
    setNewTodo("");
  };
  return (
    <InputStyled>
      <Circle />
      <InpuTodo
        placeholder="Currently typing"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && newTodo.length !== 0 ? addTodo() : null
        }
      />
    </InputStyled>
  );
};

export default Input;
