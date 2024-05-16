import classes from "./buttons.module.scss";
import arrowup from "../../assets/chevron-up.png";
const ArrowUpBtn: React.FC<{
  onClick: any;
  text: string;
}> = ({ onClick, text }) => {
  return (
    <span className={classes["arrow-up-button-box"]} onClick={() => onClick}>
      <img
        src={arrowup}
        width="50px"
        alt="arrow-back"
        onClick={() => onClick()}
      />
      <span className={classes["arrow-up-button-box__text"]}>{text}</span>
    </span>
  );
};
export default ArrowUpBtn;
