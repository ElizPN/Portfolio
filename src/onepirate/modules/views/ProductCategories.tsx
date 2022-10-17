import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import jsImg from "./images/js2.jpg";
import reactImg from "./images/react4.jpg";
import tsImg from "./images/ts.jpg";
import reduxImg from "./images/redux.jpg";
import vueImg from "./images/vue.jpg";
import muiImage from "./images/mui.jpg";
import phaserImage from "./images/phaser.jpg";
import contentfulImg from "./images/contentful.jpg";
import htmlCssImg from "./images/html-css2.jpg";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlippyStyle = {
  width: "40%",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center",
};

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    backgroundColor: "rgba(10,10,10,0.5)",
    fontSize: 21,
    letterSpacing: "1px",
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: jsImg,
    title: "JavaScript",
    width: "40%",
  },
  {
    url: reactImg,
    title: "React",
    width: "20%",
  },
  {
    url: tsImg,
    title: "TypeScript",
    width: "40%",
  },
  {
    url: reduxImg,
    title: "Redux",
    width: "38%",
  },
  {
    url: vueImg,
    title: "Vue.js",
    width: "38%",
  },
  {
    url: muiImage,
    title: "Material UI",
    width: "24%",
  },
  {
    url: phaserImage,
    title: "Phaser",
    width: "40%",
  },
  {
    url: contentfulImg,
    title: "Contentful",
    width: "20%",
  },
  {
    url: htmlCssImg,
    title: "HTML && CSS",
    width: "40%",
  },
];

export default function ProductCategories() {
  let flippyHorizontal = { toggle: () => {} };
  return (
    <Container component='section' sx={{ mt: 8, mb: 4 }} id='scills'>
      <Typography variant='h4' marked='center' align='center' component='h2'>
        Skills
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        <Flippy
          flipOnClick={true}
          flipDirection='horizontal'
          style={FlippyStyle}
        >
          <React.Fragment>
            <FrontSide
              style={{
                backgroundImage: `url(${jsImg})`,
                backgroundPosition: "center",
              }}
            >
              <ImageIconButton key={"JavaScript"} style={{}}>
                <Box sx={{}}>
                  <Typography
                    component='h3'
                    variant='h6'
                    color='inherit'
                    className='imageTitle'
                  >
                    {"JavaScript"}
                  </Typography>
                </Box>
              </ImageIconButton>
            </FrontSide>
            <BackSide
              style={{
                backgroundColor: "#175852",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              ROCKS
              <span
                style={{
                  fontSize: "12px",
                  position: "absolute",
                  bottom: "10px",
                  width: "100%",
                }}
              >
                I flip 'horizontal'ly on click
                <br />
                (BACK SIDE)
              </span>
            </BackSide>
          </React.Fragment>
        </Flippy>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className='imageBackdrop' />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component='h3'
                variant='h6'
                color='inherit'
                className='imageTitle'
              >
                {image.title}
                <div className='imageMarked' />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
