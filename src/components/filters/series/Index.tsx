import React from "react";
import * as classes from "../filters.module.scss";
import PrimaryFilters from "./PrimaryFilters";
import { useState } from "react";
import SecondaryFilters from "./SecondaryFilters";
import ActiveFilters from "./ActiveFilters";
import { useAppSelector } from "../../../redux/hooks";
const Filters: React.FC = () => {
  const activeFiltersStore = useAppSelector(
    (state) => state.seriesFilters.activeFilters
  );
  const [showPrimaryFilters, setShowPrimaryFilters] = useState(true);
  const [showSecondaryFilters, setShowSecondaryFilters] = useState(false);

  const hidePrimaryFiltersHandler = () => {
    setShowPrimaryFilters(false);
    setShowSecondaryFilters(true);
  };
  const showPrimaryFiltersHandler = () => {
    setShowPrimaryFilters(true);
    setShowSecondaryFilters(false);
  };
  return (
    <div className={classes["filters-container"]}>
      {showPrimaryFilters && (
        <PrimaryFilters onHide={hidePrimaryFiltersHandler} />
      )}
      {showSecondaryFilters && (
        <SecondaryFilters onHide={showPrimaryFiltersHandler} />
      )}
      {activeFiltersStore.length > 0 && <ActiveFilters />}
    </div>
  );
};
export default Filters;
