import React from "react";
import { NavLink } from "react-router-dom";
import * as classes from "./footer.module.scss";
import logo from "../../assets/logo-footer.webp";
const Footer: React.FC = () => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer__content-container"]}>
        <div className={classes["footer__content-container__nav-menu-box"]}>
          <ul>
            <li>
              <NavLink to={"/"}>Strona główna</NavLink>
            </li>
            <li>
              <NavLink to={"/aktualnosci"}>Aktualności</NavLink>
            </li>
            <li>
              <NavLink to={"/filmy"}>Filmy</NavLink>
            </li>
            <li>
              <NavLink to={"/seriale"}>Seriale</NavLink>
            </li>
            <li>
              <NavLink to={"/politykaprywatnosci"}>
                Polityka prywatności
              </NavLink>
            </li>
          </ul>
        </div>
        <img
          src={logo}
          width={194}
          height={37}
          alt="logo"
          title="logo"
          loading="lazy"
        />
        <span className={classes["footer__content-container__copyright"]}>
          © 2024 filmnawieczor.pl
        </span>
      </div>
    </div>
  );
};

export default Footer;
