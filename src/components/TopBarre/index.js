import { Switch, Title, TopStyled } from "./style";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg"
const TopBarre = ({ setDark, Dark }) => {
  return (
    <TopStyled>
      <Title>TODO</Title>
      <Switch
        src={Dark?sun:moon}
        alt="switch"
        onClick={() => (Dark ? setDark(false) : setDark(true))}
      />
    </TopStyled>
  );
};

export default TopBarre;
