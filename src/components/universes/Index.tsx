import React from "react";
import { useNavigate } from "react-router-dom";
import * as classesGlobal from "../ui/mainContainerWithAdverts.module.scss";
import MainHeader from "../ui/MainHeader";
import * as classes from "./universes.module.scss";
const Universes: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["container"]}>
      <MainHeader title="Uniwersa Filmowe" />
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>

        <div className={classes["universes-container"]}>
          <span className={classes["universes-container__about"]}>
            <h1>Witamy w świecie Filmowych Uniwersów</h1>
            Na naszej stronie odkryjesz fascynujące uniwersa filmowe, które
            przeniosą Cię w niesamowite światy pełne bohaterów, epickich starć i
            niezwykłych przygód. Od potężnych Avengers w Marvel Cinematic
            Universe, przez mroczne zakamarki Wizarding World, aż po pełne grozy
            historie w Conjuring Universe – każda z tych opowieści ma coś
            wyjątkowego do zaoferowania.
          </span>
          <div className={classes["universes-container__universes-box"]}>
            <img
              width={300}
              height={200}
              alt="Marvel"
              loading="eager"
              src={
                require("../../assets/universes/Marvel-main-logo.webp").default
              }
              title="Marvel"
              onClick={() => navigate("marvel")}
            />
          </div>
        </div>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default Universes;
