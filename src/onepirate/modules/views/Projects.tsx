import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Link from "@mui/material/Link";
import reactProjectImg from "./images/ts-react-redux.jpeg";
import duckImg from "./images/ducks.jpg";
import toDoListImg from "./images/to-do-list.png";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Projects() {
  return (
    <Box
      component='section'
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
      id='projects'
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component='img'
          src='/static/themes/onepirate/productCurvyLines.png'
          alt='curvy lines'
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant='h6' sx={{ my: 5 }}>
                <Link
                  href='https://elizpn.github.io/react-typical-challenges/'
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    component='img'
                    src={reactProjectImg}
                    alt='suitcase'
                    sx={{ height: 160, width: 300 }}
                  />
                  React typicall challenges
                </Link>
              </Typography>
              <Typography variant='h5'>
                On this website you will see solutions to the most common tasks
                on React.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant='h6' sx={{ my: 5 }}>
                <Link
                  href='https://elizpn.github.io/elizpn.github.io-duck-game/'
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    component='img'
                    src={duckImg}
                    alt='graph'
                    sx={{ height: 160, width: 300 }}
                  />
                  Duck game
                </Link>
              </Typography>
              <Typography variant='h5'>
                This is my first game with hungry duck. Her goal - to eat bread
                before her competitor will do this.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant='h6' sx={{ my: 5 }}>
                <Link
                  href='https://elizpn.github.io/todo-list/'
                  sx={{ textDecoration: "none" }}
                >
                  {" "}
                  <Box
                    component='img'
                    src={toDoListImg}
                    alt='clock'
                    sx={{ height: 160, width: 300 }}
                  />
                  To Do List
                </Link>
              </Typography>
              <Typography variant='h5'>
                You don`t have to memorize everything you need to do this week
                or for the current month. Just use the ToDoList App to organize
                your life.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
