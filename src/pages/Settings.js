import React from 'react'
import { Container, Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';
import { useNavigate  } from "react-router-dom";

import './Settings.css'

export default function Settings() {

  const { response, error, loading } = useAxios({url: "/api_category.php"});

  const history = useNavigate();

  if(loading){
    return (
      <Box textAlign="center" mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return(
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong!!  
      </Typography>
    )
  }

  const difficultyOptions = [
    {id:"easy", name:"Easy"},
    {id:"medium", name:"Medium"},
    {id:"hard", name:"Hard"}
  ]

  const typeOptions=[
    {id:"multiple", name:"Multiple Choice"},
    {id:"boolean", name:"True/False"},
  ]

  const handleSubmit = e =>{
    e.preventDefault();
    history("/questions")
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold">
          Quiz App  
        </Typography>
        <form onSubmit={handleSubmit}>
          <SelectField options={response.trivia_categories} label="Category" />
          <SelectField options={difficultyOptions} label="Difficulty" />
          <SelectField options={typeOptions} label="Type" />
          <TextFieldComp />
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
              Get Started
            </Button>  
          </Box>
        </form>
      </Box>
    </Container>
  )
}
