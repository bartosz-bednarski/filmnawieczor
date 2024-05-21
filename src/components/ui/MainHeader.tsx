import classes from "./mainHeader.module.scss";
const MainHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classes["header-container"]}>
      <h2>{title}</h2>
    </div>
  );
};
export default MainHeader;
