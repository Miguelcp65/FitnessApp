import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="100px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="20px" pt="40px">
        <img src={Logo} alt="logo" width="100px" height="100px" />
        <Typography variant="h5" pb="40px">Made by Miguel Pereira</Typography>
      </Stack>
    </Box>
  )
}

export default Footer
