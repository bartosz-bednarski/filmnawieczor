import React from "react";
import { MARVEL_TIMELINE } from "../../../../utils/universes/marvel";
import * as classes from "./timeline.module.scss";
import TimelineMovie from "./TimelineMovie";
const Timeline: React.FC = () => {
  return (
    <div className={classes["timeline-container"]}>
      <span className={classes["timeline-container__line"]}></span>
      {MARVEL_TIMELINE.map((movie) => {
        return (
          <TimelineMovie
            link={movie.link}
            title={movie.title}
            actionTime={movie.actionTime}
            description={movie.description}
            image={movie.image}
            view={movie.id % 2 === 0 ? "left" : "right"}
          />
        );
      })}
    </div>
  );
};
export default Timeline;
