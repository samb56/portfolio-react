import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {
  return (
    <>
      <Grid container justifyContent="center"  padding={3}>
        <Grid item xs={12} md={3}>
          <a href='https://github.com/samb56' target="_blank"><GitHubIcon></GitHubIcon></a>
         
          
          
        </Grid>
        <Grid item xs={12} md={3}>
          <a a href='https://www.linkedin.com/in/sam-bergeland-08b079122/' target="_blank" > <LinkedInIcon></LinkedInIcon></a >



        </Grid>

      </Grid>
    
    </>
  )
}

export default Footer

 