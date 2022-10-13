import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import githubLogo from "./images/githubLogo2.png";
import linkedinLogo from "./images/linkedinLogo.png";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
  mb: 1,

  textDecoration: "none",
  // "&:hover": {
  //   bgcolor: "gray",
  // },
};

export default function AppFooter() {
  return (
    <Typography
      component='footer'
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction='column'
              justifyContent='flex-end'
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component='a'
                  href='https://github.com/ElizPN'
                  target='_blank'
                  sx={iconStyle}
                >
                  <img src={githubLogo} alt='GitHub' width={85} />
                </Box>

                <Box
                  component='a'
                  href='https://www.linkedin.com/in/yelyzaveta-romanova-8216a6214/'
                  target='_blank'
                  sx={iconStyle}
                >
                  <img src={linkedinLogo} alt='Linkedin' width={85} />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box component='ul' sx={{ m: 0, listStyle: "none", p: 0 }}></Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}></Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
