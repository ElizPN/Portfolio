import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Link from "@mui/material/Link";
import firstImg from "./ts-react-redux.jpeg";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component='section'
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
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
                    src={firstImg}
                    alt='suitcase'
                    sx={{ height: 160, width: 300 }}
                  />
                  React typicall challenges
                </Link>
              </Typography>
              <Typography variant='h5'>
                {/* {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }
                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                } */}
                On this website you will see solutions to the most common tasks
                on React.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component='img'
                src='/static/themes/onepirate/productValues2.svg'
                alt='graph'
                sx={{ height: 55 }}
              />
              <Typography variant='h6' sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant='h5'>
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }
                {"your Sundays will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component='img'
                src='/static/themes/onepirate/productValues3.svg'
                alt='clock'
                sx={{ height: 55 }}
              />
              <Typography variant='h6' sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant='h5'>
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
