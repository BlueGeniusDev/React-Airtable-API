import { Fragment } from "react";

import Compare from "../sections/Compare";
import AboutUS from "../sections/AboutUS";
import FAQ from "../sections/FAQ";

const Home = () => {
  return (
    <Fragment>
      <Compare />
      <AboutUS />
      <FAQ />
    </Fragment>
  );
};

export default Home;
