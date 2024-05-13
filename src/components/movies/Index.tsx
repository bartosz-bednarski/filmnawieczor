import Filters from "../globals/Filters";
import classes from "./movies.module.scss";
const Movies = () => {
  return (
    <div className={classes.container}>
      <Filters />
    </div>
  );
};
export default Movies;
