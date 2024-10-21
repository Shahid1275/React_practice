import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import './Todo.css';

export default function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
      
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (!inputValue) return;
    if (tasks.includes(inputValue)) return;
    
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue('');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start" // Align to the top
      style={{ minHeight: '100vh', paddingTop: '40px' }} // Full height, adjust padding for top center
    >
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Todo List
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Enter a task"
                variant="outlined"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </Box>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Add Task
            </Button>
          </form>
        </Box>
        <section>
          <List sx={{ bgcolor: '#e0e0e0', borderRadius: '10px', marginTop: '20px' }}>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <ListItemText primary={task} />
              </ListItem>
            ))}
          </List>
        </section>
      </Container>
    </Grid>
  );
}
