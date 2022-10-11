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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
