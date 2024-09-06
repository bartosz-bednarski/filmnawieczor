import React from "react";
import * as classes from "./marvelUniverse.module.scss";
import * as classesGlobal from "../../ui/mainContainerWithAdverts500ad.module.scss";
import marvelLogo from "../../../assets/universes/Marvel-main-logo.webp";
import SectionName from "./SectionName";
import Timeline from "./timeline/Timeline";
import About from "./About";
const MarvelUniverse: React.FC = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["marvel-logo"]}>
        <img
          src={marvelLogo}
          height={120}
          width={300}
          alt="Marvel"
          title="Marvel"
          loading="eager"
        />
        <span className={classes["marvel-logo__text"]}>UNIVERSE</span>
      </div>
      <h1 style={{ visibility: "hidden" }}>Uniwersum Marvela</h1>
      <div className={classesGlobal["main-container"]}>
        <div className={classesGlobal["main-container__advert-box"]}> </div>
        <div className={classesGlobal["main-container__content-container"]}>
          {" "}
          <div className={classes["marvel-container"]}>
            <About />
            <SectionName title="Oś czasu" />
            <Timeline />
          </div>
        </div>

        <div className={classesGlobal["main-container__advert-box"]}> </div>
      </div>
    </div>
  );
};
export default MarvelUniverse;
