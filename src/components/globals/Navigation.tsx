import React from "react";
import { useEffect } from "react";
import * as classes from "./navigation.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.webp";
import hamburgerIcon from "../../assets/hamburger-icon.png";
import arrowUp from "../../assets/chevron-up.png";
const Navigation: React.FC = () => {
  const location = useLocation();
  const [showMobileList, setShowMobileList] = useState(false);
  useEffect(() => {
    setShowMobileList(false);
  }, [location]);
  return (
    // <div></div>
    <div className={classes["navigation"]}>
      <img
        src={logo}
        alt="logo"
        className={classes["navigation__logo-img"]}
        width={194}
        height={37}
        title="Film na wieczór"
        loading="eager"
      />
      <ul className={classes["navigation__list"]}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? classes["pending"] : "navLink",
                isActive ? classes["active"] : "navLink",
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
                alt="arrowUp button"
                title="schowaj menu"
                loading="eager"
              />
              <span>Schowaj menu</span>
            </span>
          </li>
        </ul>
      )}
      <img
        src={hamburgerIcon}
        className={classes["navigation__mobile-hamburger-icon"]}
        width={40}
        height={40}
        onClick={() => setShowMobileList(true)}
        alt="hamburger button"
        title="film na wieczor menu"
        loading="eager"
      />
      <img
        src={logo}
        alt="logo"
        className={classes["navigation__img-2"]}
        width={194}
        height={37}
        title="film na wieczor"
        loading="eager"
      />
    </div>
  );
};
export default Navigation;
