import { CircleHovred, CircleStyled } from "./style";
import check from "../../../images/icon-check.svg";
const Circle = ({ item, onClick }) => {
  return (
    <CircleStyled
      bg={
        item
          ? item.status === "Completed"
            ? " linear-gradient(135deg, #57ddff, #c058f3)"
            : null
          : null
      }
    >
      <CircleHovred
        onClick={onClick}
        display={item ? (item.status === "Completed" ? "flex" : "none") : null}
        border={
          item
            ? item.status === "Completed"
              ? "none"
              : "0.1em solid transparent"
            : null
        }
        bg={
          item
            ? item.status === "Completed"
              ? " linear-gradient(135deg, #57ddff, #c058f3)"
              : null
            : null
        }
      >
        {item ? (
          item.status === "Completed" ? (
            <img src={check} alt="o" />
          ) : null
        ) : null}
      </CircleHovred>
    </CircleStyled>
  );
};

export default Circle;
