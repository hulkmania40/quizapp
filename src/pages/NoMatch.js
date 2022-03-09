import React from 'react'
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function NoMatch() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        NoMatch
      </Box>
    </Container>
  )
}
