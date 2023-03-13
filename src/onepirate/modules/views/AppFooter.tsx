import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import githubLogo from "./images/githubLogo2.png";
import linkedinLogo from "./images/linkedinLogo.png";

// MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-1ld3b9g-MuiGrid-root

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
      sx={{ display: "flex", bgcolor: "#B9D9EB" }}
      id='contacts'
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5} justifyContent='center' direction='column'>
          <Grid item xs={6} sm={4} md={3}>
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
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: "16px",
                color: "rgb(43 36 36 / 87%)",
              }}
            >
              <Link
                href='mailto: romanovaliza9393@gmail.com'
                target='_blank'
                sx={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "rgb(43 36 36 / 87%)",

                  mt: "10px",
                  "&:hover": {
                    color: "#943652",
                  },
                }}
              >
                romanovaliza9393@gmail.com
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
