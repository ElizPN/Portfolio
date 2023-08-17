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
import { Grid } from "@mui/material";

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

const ImageIconButton2 = styled(ButtonBase)(({ theme }) => ({
  width: "100%",

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
}));

const StyledFlippy = styled(Flippy)(({ theme }) => ({
  color: "#FFF",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 350,
  },
}));

const StyledBackSide = styled(BackSide)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: 20,
  background: "linear-gradient(160deg, #c0392b, #8e44ad )",
}));

const skills = [
  {
    url: jsImg,
    title: "JavaScript",
    backSideText: (
      <div>
        <p>Data types</p>
        <p>Object properties, their configuration </p>
        <p>Promises</p>
        <p>Classes</p>
        <p>Modules</p>
        <p>ES6</p>
      </div>
    ),
  },
  {
    url: reactImg,
    title: "React",
    backSideText: (
      <div>
        <p>Classes and functional components</p>
        <p>Hooks</p>
        <p>Props</p>
        <p>Data structures: objects, arrays of objects </p>
        <p>Conditional rendering</p>
      </div>
    ),
  },
  {
    url: tsImg,
    title: "TypeScript",
    backSideText: (
      <div>
        <p>Types and interfaces</p>
        <p>Function types </p>
        <p>Enums </p>
        <p>Aliases</p>
        <p>Unions</p>
        <p>Generics</p>
      </div>
    ),
  },
  {
    url: reduxImg,
    title: "Redux",
    backSideText: (
      <div>
        <p>Global store</p>
        <p>Redusers</p>
        <p>Dispatch</p>
        <p>Slices</p>
        <p>States, actions and payloads</p>
      </div>
    ),
  },
  {
    url: vueImg,
    title: "Vue.js",
    backSideText: (
      <div>
        <p>Applying Bootstrap and custom styling</p>
        <p>Work with Rest Api</p>
      </div>
    ),
  },
  {
    url: muiImage,
    title: "Material UI",
    backSideText: (
      <div>
        <p>Styled components</p>
        <p>Reusing components</p>
        <p>Applying custom styles</p>
        <p>Custom theme</p>
      </div>
    ),
  },
  {
    url: phaserImage,
    title: "Phaser",
    backSideText: (
      <div>
        <p>Creating Preloaders</p>
        <p>Adding physics </p>
        <p>Adding keybord events</p>
        <p>Work with EventEmitter</p>
      </div>
    ),
  },
  {
    url: contentfulImg,
    title: "Contentful",
    backSideText: (
      <div>
        <p>Creating data model</p>
        <p>Add/edit content</p>
        <p>Using contentful API</p>
        <p>Fetch content</p>
        <p>Filters</p>
      </div>
    ),
  },
  {
    url: htmlCssImg,
    title: "HTML && CSS",
    backSideText: (
      <div>
        <p>Responsive Web Design</p>
        <p>Flexbox</p>
        <p>Grid</p>
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <Container component='section' sx={{ mt: 8, mb: 4 }} id='scills'>
      <Typography variant='h4' marked='center' align='center' component='h2'>
        Skills
      </Typography>
       <Grid container  
        sx={{
          backgroundColor: "black",
          mt: 8,
        }}
      >
        {skills.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
          <StyledFlippy
            flipOnClick={true}
            flipDirection='horizontal'
            style={{
              width: '100%',
            }}
          >
            <ImageIconButton2>
              <FrontSide
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundPosition: "center",
                  padding: 0,
                  backgroundSize: "cover",
                  height: 350
                }}
              >
                <ImageBackdrop className='imageBackdrop' />
                <ImageIconButton key={image.title}>
                  <Box>
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
              </FrontSide>
              <StyledBackSide>
                <h1 style={{ color: "#000039" }}>{image.title}</h1>
                {image.backSideText}
              </StyledBackSide>
            </ImageIconButton2>
          </StyledFlippy>
          </Grid>

        ))}
      </Grid>
    </Container>
  );
}
