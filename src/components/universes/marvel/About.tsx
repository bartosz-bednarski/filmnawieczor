import React from "react";
import * as classes from "./marvelUniverse.module.scss";
const About: React.FC = () => {
  return (
    <span className={classes["marvel-container__about"]}>
      <b>Marvel Cinematic Universe (MCU)</b> to rozbudowane i wielowątkowe
      uniwersum filmowe i telewizyjne, stworzone przez Marvel Studios, oparte na
      postaciach i historiach z komiksów Marvela. MCU to jedno z najbardziej
      udanych filmowych uniwersów, które rozpoczęło się w 2008 roku od premiery
      filmu "Iron Man". Jest znane z wprowadzania licznych superbohaterów,
      których losy są wzajemnie splecione, tworząc jedno z najbardziej złożonych
      narracyjnie światów w historii kina.
      <br />
      <br />
      <b>MCU</b> jest podzielone na fazy, które składają się z różnych filmów i
      seriali, często prowadzących do większych wydarzeń, w których różni
      bohaterowie spotykają się w ramach wspólnych projektów, takich jak seria
      filmów "Avengers".
    </span>
  );
};
export default About;
