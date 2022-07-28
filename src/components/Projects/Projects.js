import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../Card'


const Projects = () => {

  let project = [{
    title: 'sample text',
    github: 'https://github.com/',
    deployed: 'https://dashboard.heroku.com/apps',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
 {
      title: 'sample text',
      github: 'https://github.com/',
      deployed: 'https://dashboard.heroku.com/apps',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 },
 {
      title: 'sample text',
      github: 'https://github.com/',
      deployed: 'https://dashboard.heroku.com/apps',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 },
 {
      title: 'sample text',
      github: 'https://github.com/',
      deployed: 'https://dashboard.heroku.com/apps',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 }]
  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Projects</h1>
        </Grid>
        <Grid container spacing={4} padding={2} justifyContent="center">
          {project.map(project=>
           <Grid item>
           <Card title={project.title} github={project.github} deployed={project.deployed} image={project.image}></Card>
           </Grid>
            )}
        </Grid>

    </>
  )
}

export default Projects