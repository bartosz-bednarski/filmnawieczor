import React, { useEffect } from "react";
import classes from "./Navigation.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import hamburgerIcon from "../../assets/hamburger-icon.png";
import arrowUp from "../../assets/chevron-up.png";
const Navigation = () => {
  const location = useLocation();
  const [showMobileList, setShowMobileList] = useState(false);
  useEffect(() => {
    setShowMobileList(false);
  }, [location]);
  return (
    <div className={classes["navigation"]}>
      <img src={logo} alt="logo" className={classes["navigation__logo-img"]} />
      <ul className={classes["navigation__list"]}>
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
      {showMobileList && (
        <ul className={classes["navigation__list-mobile"]}>
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
          <li>
            <span
              className={classes["navigation__list-mobile__arrow-up-button"]}
            >
              <img
                src={arrowUp}
                className={classes["navigation__mobile-hamburger-icon"]}
                width={100}
                height={50}
                onClick={() => setShowMobileList(false)}
              />
              <span>Schowaj menu</span>
            </span>
          </li>
        </ul>
      )}
      <img
        src={hamburgerIcon}
        className={classes["navigation__mobile-hamburger-icon"]}
        width={50}
        height={50}
        onClick={() => setShowMobileList(true)}
      />
      <img src={logo} alt="logo" className={classes["navigation__img-2"]} />
    </div>
  );
};
export default Navigation;
