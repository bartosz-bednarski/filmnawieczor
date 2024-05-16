import classes from "./buttons.module.scss";
const ActiveFilterBtn: React.FC<{
  value: string | number;
  onClick: any;
}> = ({ value, onClick }) => {
  return (
    <div className={classes["active-filter-box"]} onClick={() => onClick()}>
      {value}
    </div>
  );
};
export default ActiveFilterBtn;
