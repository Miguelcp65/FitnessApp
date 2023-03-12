import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #0AB385' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
    >
      <img
        src={`../images/icons/${item.replace(/\s/g, '')}.png`}
        alt="dumbbell"
        style={{ width: '60px', height: '60px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
