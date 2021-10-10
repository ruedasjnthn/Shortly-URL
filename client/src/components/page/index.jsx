import React from "react";
import Header from "./header";
import UrlShortener from "./urlShortener";
import Stat from "./stat";
import CallToAction from "./callToAction"

function Page() {
  return (
    <>
      <Header />
      <UrlShortener />
      <Stat />
      <CallToAction />
    </>
  );
}

export default Page;
