import { Container, Icon } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system'
import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <Container>
        <Box textAlign="center" mt={20}>
        <h4>Made with <span className='heart'><FavoriteIcon fontSize="medium" /></span> by Mubashir</h4>
        </Box>
    </Container>
  )
}