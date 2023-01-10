import { FilterFunction } from "../../functions";
import { theme } from "../../styles/theme";
import { BottomBarreStyled } from "./style";
const BottomBarre = ({
  list,
  setList,
  Filter,
  filterActive,
  filterComplet,
  filterAll,
}) => {
  return (
    <BottomBarreStyled>
      <p>{FilterFunction(Filter, list).length} items left</p>
      <ul>
        <li
          onClick={filterAll}
          style={{
            color: Filter === "All" ? theme.Primary.BrightBlue : "unset",
          }}
        >
          All
        </li>
        <li
          onClick={filterActive}
          style={{
            color: Filter === "Active" ? theme.Primary.BrightBlue : "unset",
          }}
        >
          Active
        </li>
        <li
          onClick={filterComplet}
          style={{
            color: Filter === "Completed" ? theme.Primary.BrightBlue : "unset",
          }}
        >
          Completed
        </li>
      </ul>

      <span onClick={() => setList(list.filter((el) => el.status === "Active"))}>
        Clear Completed
      </span>
    </BottomBarreStyled>
  );
};

export default BottomBarre;
