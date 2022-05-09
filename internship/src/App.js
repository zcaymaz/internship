import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import './App.css'
import Form from './components/Form'

const App = () => {
  return (
    <div className='App'>
      <Grid>
        <img style={{position:'relative'}} src={require('./images/ktun-logo.png')} />
      </Grid>
      <Form />
    </div>
  )
}

export default App