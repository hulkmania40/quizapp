import React from 'react'
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

import './FinalScreen.css'

export default function FinalScreen() {

  const {score} =useSelector(state => state);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleBackToSettings = () =>{
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    history("/")
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" fontWeight="bold" mb={3}>Final Score : {score}</Typography>
        <Button onClick={handleBackToSettings} variant="outlined">Back to HOME</Button>
      </Box>
    </Container>
  )
}
