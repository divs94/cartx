import React from 'react'
import { Grid, Typography, Box, Button } from "@mui/material";
import Container from 'react-bootstrap/Container';
import { ReactComponent as Star } from "../assets/star.svg";
import HeroImg from "../assets/hero-img.svg";
import {ReactComponent as Arrow2} from "../assets/arrow2.svg";
import {ReactComponent as Arrow1} from "../assets/arrow1.svg";


export default function Hero() {
  return (
    <>
      <Container>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} className='hero_container'>
          <Grid item xs={12} sm={12} md={6} lg={8} xl={8} className='left_Sec'>
            <h1>
              Next Gen <span><Star width="116px" height="116px" /></span>
            </h1>
            <h1>
              SMART WATCH
            </h1>
            <p>
              Everyone looks your watch and it represents
              who you are your values and your personal style.
            </p>
           <p className='price'>
            $550.00
            <Arrow2 />
            </p>  
           <Box className="button_bg"> </Box>
           <Button className='main_button'>
            Shop Now
            </Button>
            <Arrow1 className="arrow1"/>  
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='img_wrapper' sx={{ display: "flex",alignContent:"center", alignItems:"center", justifyContent: "center", background: "#FE682F", borderLeft: "1px solid black" }}>
            <img src={HeroImg} alt="img" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
