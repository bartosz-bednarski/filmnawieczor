import React from "react";
import * as classes from "./error.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import layoutRight from "../../assets/error/error_layout_right.webp";
import errorImg from "../../assets/error/Error_icon.webp";
import ButtonYellow from "../ui/buttons/ButtonYellow";
const Error: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { message } = state;
  let code = 404;
  let outputMessage = "";
  if (message === "Failed to fetch") {
    code = 404;
    outputMessage =
      "Wystąpił problem podczas komunikacji z serwerem. Sprawdź swoje połączenie z Internetem, spróbuj odświeżyć stronę. Jeżeli problem nadal występuje skontaktuj się z naszym administratorem.";
  }
  if (message === "HTTP error! status: 404") {
    code = 404;
    outputMessage =
      "Błędne zapytanie do serwera. Podana ścieżka żądania nie istnieje. Skontaktuj się z naszym administratorem w celu rozwiązania problemu.";
  }
  if (message === "HTTP error! status: 500") {
    code = 500;
    outputMessage =
      "Błędne zapytanie do serwera. Podana ścieżka żądania nie istnieje. Skontaktuj się z naszym administratorem w celu rozwiązania problemu.";
  }
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
export default Error;
