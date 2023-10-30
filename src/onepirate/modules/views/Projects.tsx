import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
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
import swedishRadio from "./images/sw-radio.png";
import lookupService from "./images/lookup-service-logic.png";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const StyledImageBox = styled(Box)(({ theme }) => ({
  borderRadius: 5,

  [theme.breakpoints.down("sm")]: {
    width: 350,
    height: 200,
  },
   [theme.breakpoints.up("sm")]: {
    width: 500,
    height: 300,  
  },  
})) as typeof Box

function Projects() {
  return (
    <Box id='projects'>
      <Typography variant='h4' marked='center' align='center' component='h2' my={8}>
        Projects
      </Typography>
      <Box
        component='section'
        sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
      >
        <Container
          sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
        >
          <Box
            component='img'
            src='/static/themes/onepirate/productCurvyLines.png'
            alt='curvy lines'
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://balcosmos.com/'
                    sx={{ textDecoration: "none" }}
                  >
                    {" "}
                    <StyledImageBox
                      component='img'
                      src={balcosmosImg}
                      alt='clock'
                    />  
                    Balcosmos oficial website
                  </Link>
                </Typography>
                 <Typography>
                  Technologies used: React, TS, Meterial UI
                </Typography> 
                <Typography variant="h5">
                  {" "}
                Landing page for music producer. 
                Fully responsive design with hamburger menu. Implemented CI/CD Pipeline using GitHUb Actions.
                Contact form. Modal windows. YouTube, Spotify, SoundCloud embedding.

                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/Swedish-radio/'
                    sx={{ textDecoration: "none" }}
                  >
                    {" "}
                    <StyledImageBox
                      component='img'
                      src={swedishRadio}
                      alt='clock'
                    />
                    Swedish Radio Program App
                  </Link>
                </Typography>
                <Typography>
                  Technologies used: React, TS, Meterial UI, Jest
                </Typography>
                <Typography variant='h5'>
                  This web application allows users to browse and listen to
                  various programs from Swedish Radio. Users can select a
                  category to view programs in that category and click on a
                  program to listen to it.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/Swedish-radio/'
                    sx={{ textDecoration: "none" }}
                  >
                    {" "}
                    <StyledImageBox
                      component='img'
                      src={lookupService}
                      alt='clock'
                    />
                    Backend lookup service
                  </Link>
                </Typography>
                <Typography>
                  Technologies used: Express JS, SQLite, Cypress
                </Typography>
                <Typography variant='h5'>
                  The Lookup Service fetches data from DB, if data exists, the service sends it to client. 
                  In a case there is no data, service sends request to external API, get data, and store them in DB.
                  In this way I implemented Data base cashing.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/april/'
                    sx={{ textDecoration: "none" }}
                  >
                    {" "}
                    <StyledImageBox
                      component='img'
                      src={aprilImg}
                      alt='clock'
                    />
                    Choir April Website
                  </Link>
                </Typography>
                  <Typography>
                  Technologies used: React, TS, Bootstarap
                </Typography> 
                <Typography variant='h5'>
                  {" "}
                  The website showcases the Choir April group and their upcoming
                  performances. The website is fully responsive and includes
                  features such as filterable image gallery and a contact form.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/react-typical-challenges/'
                    sx={{ textDecoration: "none" }}
                  >
                    <StyledImageBox
                      component='img'
                      src={reactProjectImg}
                      alt='suitcase'
                    />
                    Personal Blog about web development
                  </Link>
                </Typography>
                  <Typography>
                  Technologies used: React, Redux, TS, Contentful API, Meterial UI, Jest
                </Typography> 
                <Typography variant='h5'>
                  Using Contentful CMS makes this app flexsible and fluent in terms of adding new content.
                  Storing and manipulation data in Redux allow to devide state managment logic from its representetion.
                  Components with main logig are covered with unit test using Jest. 
                  I would say, the App is coverred with unit test on 90%.
                  On this website you can see solutions to the most common
                  tasks on React, Redux and Unin testing.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/Weather-App-React/'
                    sx={{ textDecoration: "none" }}
                  >
                    <StyledImageBox
                      component='img'
                      src={weatherAppImg}
                      alt='clock'
                    />
                    Weather App
                  </Link>
                </Typography>
                  <Typography>
                  Technologies used: React, TS, Meterial UI, Jest, Cypress
                </Typography> 
                <Typography variant='h5'>
                  With this app you can check the weather in any city in the
                  world. The icons in the Weather app indicate different weather
                  conditions.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/todo-list/'
                    sx={{ textDecoration: "none" }}
                  >
                    <StyledImageBox
                      component='img'
                      src={toDoListImg}
                      alt='clock'
                    />
                    To Do List
                  </Link>
                </Typography>
                  <Typography>
                  Technologies used: React, Redux, TS, Meterial UI, Jest
                </Typography> 
                <Typography variant='h5'>
                  You don`t have to memorize everything you need to do this week
                  or for the current month. Just use the ToDoList App to
                  organize your life.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Typography variant='h6' sx={{ my: 5 }}>
                  <Link
                    target='_blank'
                    href='https://elizpn.github.io/elizpn.github.io-duck-game/'
                    sx={{ textDecoration: "none" }}
                  >
                    <StyledImageBox
                      component='img'
                      src={duckImg}
                      alt='graph'
                    />
                    Duck game
                  </Link>
                </Typography>
                  <Typography>
                  Technologies used: Phaser 3 
                </Typography> 
                <Typography variant='h5'>
                  This is my first game with hungry duck. Her goal - to eat
                  bread before her competitor will do this.
                </Typography>
              </Box>
            </Grid>
            
            
            
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Projects;
