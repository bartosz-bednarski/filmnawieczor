import classes from "./buttons.module.scss";
const FilterBtn: React.FC<{
  value: string | number;
  onClick: any;
}> = ({ value, onClick }) => {
  //   const [btnActive, setBtnActive] = useState(false);

  //   const onClickHandler = () => {
  //     onClick();
  //     setActive(true);
  //   };
  return (
    <div
      // className={active ? classes["box--active"] : classes["box"]}
      className={classes["box"]}
      onClick={() => onClick()}
    >
      {value}
    </div>
  );
};
export default FilterBtn;
