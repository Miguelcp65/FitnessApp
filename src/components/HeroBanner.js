import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#0AB385" fontWeight="600" fontSize="26px">
        Fitness App
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        The Best <br /> Fitness App
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the list of exercises
      </Typography>
      <Button
        sx={{ backgroundColor: '#0AB385', padding: '10px' }}
        variant="contained"
        color="error"
        href="#exercises"
      >
        Browse Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#0AB385"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
        fontSize="200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
