import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 545, opacity: 0.8 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Hello everyone, my name is Liza Romanova. I have 2 years experience
            in Front-end development. I have passed multiple Front-end
            development courses. During that time I have created over 900
            commits in 26 repositories, solved over 200 algorithmic challenges
            in JS, created a game in PhaserJS and the biggest project in my
            portfolio : a Web blog using React with TypeScript and Contentful
            API.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
