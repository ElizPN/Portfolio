import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import FlippyCard from "./modules/views/FlippyCard";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
