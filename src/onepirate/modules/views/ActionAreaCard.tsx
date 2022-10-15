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
            I am developer with 2 years experience in Front-end development and
            I continue learning. I have passed multiple Front-end development
            courses. During that time I have created over 1000 commits in 26
            repositories, solved over 200 algorithmic challenges in JS, created
            a game in PhaserJS and a Web blog using React with TypeScript,
            Material UI and Contentful API.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
