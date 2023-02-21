import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 745, opacity: 0.8, padding: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign={"justify"}
            fontSize={20}
            maxWidth={700}
          >
            I am a dedicated front-end developer with two years of experience, a
            passion for continued learning, and a strong track record of
            building projects with React, TypeScript, Material UI, and other
            technologies. I have completed multiple front-end development
            courses and have created over 1,600 commits across 35 repositories.
            I have solved over 200 algorithmic challenges in JavaScript. My
            professional competence includes proficiency in TypeScript,
            JavaScript, React, Redux, Jest, Cypress, MUI, Contentful CMS, Vue,
            Phaser, CI/CD pipelines using GitHub workflows, Webpack, HTTP
            protocol, Git, and Yarn/npm as dependency managers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
