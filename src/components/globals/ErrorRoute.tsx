import React from "react";
import * as classes from "./error.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import layoutRight from "../../assets/error/error_layout_right.webp";
import errorImg from "../../assets/error/Error_icon.webp";
import ButtonYellow from "../ui/ButtonYellow";
const ErrorRoute: React.FC = () => {
  const navigate = useNavigate();
  let code = 400;
  let outputMessage =
    "Błędny adres url zapytania. Wygląda na to, że strona, której szukasz nie istnieje. Sprawdź jeszcze raz adres URL.";

  return (
    <div className={classes.error}>
      <div className={classes["error__left"]}>
        <div className={classes["error__left__content"]}>
          <h3>Błąd {code}</h3>
          <h1>O cholibka!</h1>
          <img
            src={errorImg}
            className={classes["error__left__content__image"]}
            width={248}
            height={248}
            alt="error-icon"
            title="error"
            loading="eager"
          />
          <p>{outputMessage}</p>
          <ButtonYellow value="Strona główna" onClick={() => navigate("/")} />
        </div>
      </div>
      <div className={classes["error__right"]}>
        <img
          src={layoutRight}
          className={classes["error__right__image"]}
          alt="layout error"
          width="auto"
          height="auto"
          title="layout error"
          loading="eager"
        />
      </div>
    </div>
  );
};
export default ErrorRoute;
