import React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
let history=useHistory()

  const handleOpenNavMenu = (event) => {

    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
<Container maxWidth="xl" sx={{bgcolor:"#020202"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:'white',mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
             
              sx={{color:'white'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu} >
                  <Button sx={{color:'black',display:'block'}}  onClick={()=>{
                  history.push('/explore')
                }} textAlign="center">Explore</Button> 

                  <Button sx={{color:'black',display:'block'}}   onClick={()=>{
                  history.push('/login')
                }} textAlign="center">Log in</Button>
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:'white',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'},marginLeft:'30%'}}>
          <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
            </Button>
            <Button
            
              onClick={()=>{
                history.push('/explore')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Explore
            </Button>
          </Box>
           <Box>
           <Button
              
              onClick={()=>{
                history.push('/login')
              }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Log in
              </Button>
             </Box>  
             
          
          </Box>

         
        </Toolbar>
      </Container>
  );
};

export default NavBar;