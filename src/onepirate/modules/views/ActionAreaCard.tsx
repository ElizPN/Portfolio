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
            gutterBottom
            variant='h5'
            component='div'
            color='black'
            fontSize={23}
          >
            Hello everyone
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign={"justify"}
            fontSize={20}
            maxWidth={700}
          >
            I am junior front-end developer with 2 years experience in Front-end
            development. I have passed multiple Front-end development courses.
            During that time I have created over 900 commits in 26 repositories,
            solved over 200 algorithmic challenges in JS, created a game in
            PhaserJS and a Web blog using React with TypeScript, Material UI and
            Contentful API.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
