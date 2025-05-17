import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar style={{background:"purple"}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color:"white"}}>
            Email_Verify
          </Typography>
         <Link to='/'><Button color="inherit" style={{ color:"white"}}>Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar
