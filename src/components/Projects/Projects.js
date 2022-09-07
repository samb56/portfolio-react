import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../Card'
import project3Photo from '../../assets/pics/Capture.JPG'
import SocialNetworkPhoto from '../../assets/pics/social-network-api.JPG'
import SurfDeck from '../../assets/pics/surfdeck.gif'
import cryptoproject from '../../assets/pics/cryptoproject.png'

const Projects = () => {

  let project = [{
    title: 'Send Foodz',
    github: 'https://github.com/Godoflaugh/Send-Foodz',
    deployed: 'https://glacial-hollows-58109.herokuapp.com/',
    image: project3Photo,
    description: 'This application will serve as a social network for sharing food recipes and preparation. Using MongoDB, Express server, and React.js we were able to create a web application a user can submit their own recipes and photos all while being able to view submissions from other users.'
  },
  {
    title: 'Surf Deck',
    github: 'An interactive and responsive application that allows a surfboard rental shop owner to manage and track an inventory of surfboards for daily rental or membership checkout. Each member will have a login to enable them to see what boards are available and reserve a surfboard. An administration page will be available to enable employees to manage the database.',
    deployed: 'https://surf-deck.herokuapp.com/',
    image: SurfDeck,
    description: 'An interactive and responsive application that allows a surfboard rental shop owner to manage and track an inventory of surfboards for daily rental or membership checkout. Each member will have a login to enable them to see what boards are available and reserve a surfboard. An administration page will be available to enable employees to manage the database.'
  },
  {
    title: 'Social_network-API',
    github: 'https://github.com/samb56/Social-Network-API',

    image: SocialNetworkPhoto,
    description: 'This API works as a back end for an online social network. Using mongodb for storage, routes were created to add users, thoughts, and reactions to thoughts. Users can add other users to their friend list which is saved as friends data. Thoughts and reactions are associated with a unique user ID. Through the routes, edits can be made to any of the features as well.'
  },
  {
    title: 'Crypto Information Hub',
    github: 'https://github.com/samb56/crypto-information-hub',

    image: cryptoproject,
    description: 'In this we utilized local storage to store and dispaly previous searches from the user input so that they can always access their top crypto currency. In addition we utilized several different APIs to gath information regarding the searched crypto.Such as full market name, pricing, and etc.We used a new framework called Skeleton for its ease of use and simplicity to offer a clean and lean design.'
  }]
  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Projects</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        {project.map(project =>
          <Grid item>
            <Card title={project.title} github={project.github} deployed={project.deployed} image={project.image} description={project.description}></Card>
          </Grid>
        )}
      </Grid>

    </>
  )
}

export default Projects