import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ActionAreaCard from "./ActionAreaCard";
import ProductHeroLayout from "./ProductHeroLayout";
import backgroundImage from "./images/woman-5653501.jpeg";

export default function ProductHero(): JSX.Element {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography color='inherit' align='center' variant='h2' marked='center'>
        Front End developer
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        TypeScript, JavaScript, React, Redux, CSS, HTML
      </Typography>

      <ActionAreaCard></ActionAreaCard>
    </ProductHeroLayout>
  );
}
