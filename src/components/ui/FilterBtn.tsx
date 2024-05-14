import classes from "./filterBtn.module.scss";
const FilterBtn: React.FC<{
  value: string | number;
  onClick: any;
  id: string;
  active: boolean;
}> = ({ value, onClick, id, active }) => {
  //   const [btnActive, setBtnActive] = useState(false);

  //   const onClickHandler = () => {
  //     onClick();
  //     setActive(true);
  //   };
  return (
    <div
      className={active ? classes["box--active"] : classes["box"]}
      onClick={() => onClick()}
    >
      {value}
    </div>
  );
};
export default FilterBtn;
