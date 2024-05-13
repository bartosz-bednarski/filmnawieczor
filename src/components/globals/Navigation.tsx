import React from "react";
import classes from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
const Navigation = () => {
  return (
    <div className={classes["navigation"]}>
      <img src={logo} />
      <ul className={classes["list"]}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? classes["pending"] : "navLink",
                isActive ? classes["active"] : "navLink",
                isTransitioning ? classes["transitioning"] : "navLink",
              ].join(" ")
            }
          >
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/aktualnosci"}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? classes["pending"] : "navLink",
                isActive ? classes["active"] : "navLink",
                isTransitioning ? classes["transitioning"] : "navLink",
              ].join(" ")
            }
          >
            Aktualności
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/filmy"}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? classes["pending"] : "navLink",
                isActive ? classes["active"] : "navLink",
                isTransitioning ? classes["transitioning"] : "navLink",
              ].join(" ")
            }
          >
            Filmy
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/seriale"}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? classes["pending"] : "navLink",
                isActive ? classes["active"] : "navLink",
                isTransitioning ? classes["transitioning"] : "navLink",
              ].join(" ")
            }
          >
            Seriale
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
