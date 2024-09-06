import React from "react";
import { useParams } from "react-router-dom";
import MarvelUniverse from "../components/universes/marvel/MarvelUniverse";
import { encodePolishChars } from "../components/globals/scripts/encodePolishChars";
import { Helmet } from "react-helmet-async";
import { UNIVERSES_SEO } from "../utils/universes/seo";
const UniversePage = () => {
  let { universeId } = useParams();
  return (
    <>
      <Helmet>
        <title>{UNIVERSES_SEO[universeId].title}</title>
        <meta
          name="description"
          content={UNIVERSES_SEO[universeId].description}
        />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/uniwersa/${encodePolishChars(
            universeId
          )}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={UNIVERSES_SEO[universeId].title} />
        <meta
          property="og:description"
          content={UNIVERSES_SEO[universeId].description}
        />
        <meta
          property="og:image"
          content="https://filmnawieczor.pl/dist/src/assets/home/home-fs-2.webp"
        />
        <meta
          property="og:url"
          content={`https://filmnawieczor.pl/uniwersa/${encodePolishChars(
            universeId
          )}`}
        ></meta>
        <meta name="twitter:creator" content="Film na wieczór" />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content={UNIVERSES_SEO[universeId].title} />
        <meta
          name="twitter:description"
          content={UNIVERSES_SEO[universeId].description}
        />
      </Helmet>
      {universeId === "marvel" && <MarvelUniverse />}
    </>
  );
};
export default UniversePage;
