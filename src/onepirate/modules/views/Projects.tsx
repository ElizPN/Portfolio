import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Link from "@mui/material/Link";
import reactProjectImg from "./images/rtc.jpeg";
import duckImg from "./images/ducks.jpg";
import toDoListImg from "./images/to-do-list.png";
import weatherAppImg from "./images/weather-app.png";
import balcosmosImg from "./images/balcosmos.png";
import aprilImg from "./images/april.jpeg";

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
                  href='https://elizpn.github.io/Weather-App-React/'
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    component='img'
                    src={weatherAppImg}
                    alt='clock'
                    sx={{ height: 160, width: 300 }}
                  />
                  Weather App
                </Link>
              </Typography>
              <Typography variant='h5'>
                With this app you can check the weather in any city in the
                world. The icons in the Weather app indicate different weather
                conditions.
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
                  href='https://balcosmos.com/'
                  sx={{ textDecoration: "none" }}
                >
                  {" "}
                  <Box
                    component='img'
                    src={balcosmosImg}
                    alt='clock'
                    sx={{ height: 160, width: 300 }}
                  />
                  Balcosmos oficial website
                </Link>
              </Typography>
              <Typography variant='h5'>
                {" "}
                Commercial project. Balcosmos Music Producer Website.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant='h6' sx={{ my: 5 }}>
                <Link
                  href='https://elizpn.github.io/april/'
                  sx={{ textDecoration: "none" }}
                >
                  {" "}
                  <Box
                    component='img'
                    src={aprilImg}
                    alt='clock'
                    sx={{ height: 160, width: 300 }}
                  />
                  Choir April Website
                </Link>
              </Typography>
              <Typography variant='h5'>
                {" "}
                The website showcases the Choir April group and their upcoming
                performances. The website is fully responsive and includes
                features such as filterable image gallery and a contact form.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
