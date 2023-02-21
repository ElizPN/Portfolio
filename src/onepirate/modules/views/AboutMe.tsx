import * as React from "react";
import Typography from "../components/Typography";
import ActionAreaCard from "./ActionAreaCard";
import AboutMeLayout from "./AboutMeLayout";
import backgroundImage from "./images/woman-5653501.jpeg";

export default function AboutMe(): JSX.Element {
  return (
    <AboutMeLayout
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
        TypeScript, JavaScript, React, Redux, Jest, Material UI
      </Typography>

      <ActionAreaCard></ActionAreaCard>
    </AboutMeLayout>
  );
}
