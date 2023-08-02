import React from 'react'
import { Grid, Typography, Box, Button } from "@mui/material";
import Container from 'react-bootstrap/Container';
import  SectionImg from "../assets/section-img.svg";
import { ReactComponent as Circle } from "../assets/circle-img.svg";

export default function TrendSection() {
  return (
    <>
      <Container className='trend_container'>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container item xs={12} sm={12} md={3} lg={3} xl={3} className='left_trend_sec'>
            <Box sx={{ border: "1px solid #1A1A1A"}} className='trend_img'>
              <img src={SectionImg} alt="img" />
              {/* <SectionImg /> */}
            </Box>
          </Grid>
          <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} className='mid_section'>
            <p>
              <span><Circle /></span>
              Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
          </Grid>
          <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ background: "#FFEE01", border: "1px solid #1A1A1A" }} className='trend_sec'>
            <p className="trend_text">
              Whats
              <br />
              Trending?
            </p>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}
