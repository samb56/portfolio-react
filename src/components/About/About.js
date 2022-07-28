import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photo from '../../assets/pics/photo.JPG'
import Avatar from '@mui/material/Avatar';
function About() {
  return (
    <>
      <Grid container padding={2} spacing={2}>
        <Grid item xs={12} md={4}>
          <Avatar alt="picture of self" src={photo} sx={{ width: 1, height: 1 }}></Avatar>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={3}>
          <h1>Sam Bergeland</h1>
          <p>Full-stack web developer with a background in geological sciences applied in construction. Trained at the UCI Division of Continuing Education in full-stack web development. Experienced in time sensitive problem solving and communicating between people with varying backgrounds.</p>

        </Grid>

      </Grid>


    </>
  )
}

export default About