import React from "react";
import { Helmet } from "react-helmet-async";
import PrivacyPolicy from "../components/privacyPolicy/Index";
const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Aktualności</title>
        <meta
          name="description"
          content="Polityka prywatności serwisu Film na wieczór"
        />
        <link
          rel="canonical"
          href={`https://filmnawieczor.pl/politykaprywatnosci`}
        />
      </Helmet>
      <PrivacyPolicy />;
    </>
  );
};
export default PrivacyPolicyPage;
