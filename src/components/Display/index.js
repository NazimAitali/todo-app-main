import {
  DisplayStyled,
  Todo,
  ListEmpty,
  TodoDetail,
  Txt,
  Close,
  TodoContainer,
} from "./style";
import { useState, useRef } from "react";
import CloseImg from "../../images/icon-cross.svg";
import Empty from "../../images/undraw_no_data_re_kwbl.svg";
import Circle from "../common/Circle";
import { dragEnter, dragStart, drop, FilterFunction } from "../../functions";
import BottomBarre from "../BottomBarre";
import { theme } from "../../styles/theme";

const Display = ({ list, setList }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const [Filter, setFilter] = useState("All");
  const [refresh, setRefresh] = useState(true);
  return (
    <DisplayStyled>
      <TodoContainer>
        {FilterFunction(Filter, list).map((item, i) =>
          !item.title ? (
            <ListEmpty src={Empty} alt="Empty" />
          ) : (
            <Todo
              key={i}
              onDragStart={(e) => dragStart(e, i, dragItem)}
              onDragEnter={(e) => dragEnter(e, i, dragOverItem)}
              onDragEnd={(e) => drop(e, list, setList, dragItem, dragOverItem)}
              draggable
            >
              <TodoDetail>
                <Circle
                  item={item}
                  onClick={() => {
                    item.status !== "Completed"
                      ? (item.status = "Completed")
                      : (item.status = "Active");
                    setRefresh(refresh ? false : true);
                  }}
                />
                <Txt
                  line={item.status === "Completed" ? "line-through" : "none"}
                  color={
                    item.status === "Completed"
                      ? theme.Colors.DarkGrayishBlue
                      : "none"
                  }
                >
                  {item.title}
                </Txt>
              </TodoDetail>
              <Close>
                <img
                  src={CloseImg}
                  alt="close"
                  onClick={() =>
                    setList(list.filter((el, index) => i !== index))
                  }
                />
              </Close>
            </Todo>
          )
        )}
       
      </TodoContainer>
      <BottomBarre
          list={list}
          setList={setList}
          Filter={Filter}
          filterActive={() => setFilter("Active")}
          filterComplet={() => setFilter("Completed")}
          filterAll={() => setFilter("All")}
        />
    </DisplayStyled>
  );
};

export default Display;
