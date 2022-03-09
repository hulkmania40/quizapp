import React from 'react'
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Settings() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold">
          Quiz App  
        </Typography>
        Settings
      </Box>
    </Container>
  )
}
