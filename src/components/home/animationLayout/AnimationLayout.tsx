import React, { useEffect, useState } from "react";
import * as classes from "./animationLayout.module.scss";
import logo from "../../../assets/logo-footer.webp";
import fs0 from "../../../assets/home/home-fs-0.webp";
import fs1 from "../../../assets/home/home-fs-1.webp";
import fs2 from "../../../assets/home/home-fs-2.webp";
import fs3 from "../../../assets/home/home-fs-3.webp";
import fs4 from "../../../assets/home/home-fs-4.webp";
import fs1cover from "../../../assets/home/home-fs-1-cover.webp";
import fs2cover from "../../../assets/home/home-fs-2-cover.webp";
import fs3cover from "../../../assets/movies/iron-man-3.webp";
import fs4cover from "../../../assets/movies/1917.webp";
const AnimationLayout: React.FC = () => {
  const [restartScreen, setRestartScreen] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const fs4Id = document.getElementById("fs-4");
      const style = fs4Id !== null ? window.getComputedStyle(fs4Id) : 0;
      const opacity = style !== 0 ? style.getPropertyValue("opacity") : 0;
      if (Number(opacity) < 0.8) {
        setRestartScreen(false);
      }
      if (Number(opacity) > 0.9) {
        console.log("123");
        setRestartScreen(true);
      }
    }, 1000);
  }, [restartScreen]);
  return (
    <div className={classes["animation-container"]}>
      <div className={classes["shelf"]}>
        <span className={classes["shelf-item"]}></span>
        <span className={classes["shelf-item-2"]}></span>
        {!restartScreen && (
          <>
            <section
              className={`${classes["movie-box"]} ${classes["movie-box__fs-1-cover"]}`}
              style={{ zIndex: 6, left: 0, bottom: 70, position: "absolute" }}
            >
              <img
                src={fs1cover}
                className={classes["movie-box__image"]}
                alt="aktualnosci"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={classes["movie-box__logo-box"]}>
                <img
                  src={logo}
                  className={classes["movie-box__logo-box__logo"]}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={classes["movie-box__text-absolute"]}>
                AKTUALNOŚCI
              </span>
            </section>{" "}
            <section
              className={`${classes["movie-box"]} ${classes["movie-box__fs-2-cover"]}`}
              style={{ zIndex: 5, left: 17, bottom: 93, position: "absolute" }}
            >
              <img
                src={fs2cover}
                className={classes["movie-box__image"]}
                alt="nasze filtry"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={classes["movie-box__logo-box"]}>
                <img
                  src={logo}
                  className={classes["movie-box__logo-box__logo"]}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={classes["movie-box__text-absolute"]}>
                NASZE FILTRY
              </span>
            </section>
            <section
              className={`${classes["movie-box"]} ${classes["movie-box__fs-3-cover"]}`}
              style={{ zIndex: 4, left: 34, bottom: 116, position: "absolute" }}
            >
              <img
                src={fs3cover}
                className={classes["movie-box__image"]}
                alt="iron man 3"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={classes["movie-box__logo-box"]}>
                <img
                  src={logo}
                  className={classes["movie-box__logo-box__logo"]}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={classes["movie-box__text-absolute"]}>
                IRON MAN 3
              </span>
            </section>
            <section
              className={`${classes["movie-box"]} ${classes["movie-box__fs-4-cover"]}`}
              style={{ zIndex: 3, left: 51, bottom: 139, position: "absolute" }}
            >
              <img
                src={fs4cover}
                className={classes["movie-box__image"]}
                alt="1917"
                width={135}
                height={196}
                loading="eager"
              />
              <span className={classes["movie-box__logo-box"]}>
                <img
                  src={logo}
                  className={classes["movie-box__logo-box__logo"]}
                  alt="logo"
                  width={75}
                  height={15}
                  loading="eager"
                />
              </span>

              <span className={classes["movie-box__text-absolute"]}>1917</span>
            </section>
          </>
        )}
      </div>
      <section className={classes["screen-frame"]}>
        <section className={classes["screen-frame__screen"]}>
          <span className={classes["screen-frame__screen__static"]}></span>
          <img
            src={fs0}
            className={classes["screen-frame__screen__fs-0"]}
            alt="logo"
            width={1140}
            height={600}
            loading="eager"
          />
          {!restartScreen && (
            <>
              <img
                src={fs1}
                className={classes["screen-frame__screen__fs-1"]}
                alt="aktualności"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs2}
                className={classes["screen-frame__screen__fs-2"]}
                alt="nasze filtry"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs3}
                className={classes["screen-frame__screen__fs-3"]}
                alt="iron man 3"
                width={1140}
                height={600}
                loading="eager"
              />
              <img
                src={fs4}
                className={classes["screen-frame__screen__fs-4"]}
                alt="1917"
                width={1140}
                height={600}
                loading="eager"
                id="fs-4"
              />
            </>
          )}
        </section>
      </section>
      {/* second shelf */}
      <div className={classes["shelf-2"]}>
        <span className={classes["projector-eye"]}></span>
        <section className={classes["projector"]}>
          {!restartScreen && (
            <span className={classes["projector__loading"]}></span>
          )}
          <div className={classes["projector__buttons"]}>
            {!restartScreen && (
              <>
                {" "}
                <span className={classes["projector__buttons__play"]}></span>
                <span className={classes["projector__buttons__pause"]}></span>
              </>
            )}
          </div>
        </section>
        <span className={classes["shelf-2-item"]}></span>
        <span className={classes["shelf-2-item-2"]}></span>
      </div>
    </div>
  );
};

export default AnimationLayout;
