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
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let history = useHistory();

  const { user, logOut } = useAuth();

  const handleOpenNavMenu = (event) => {

    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#282828" }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: 'white', mr: 2, display: { xs: 'none', md: 'flex' } }}
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

            sx={{ color: 'white' }}
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

            <MenuItem onClick={handleCloseNavMenu} >
              <Button sx={{ color: 'black', display: 'block' }} onClick={() => {
                history.push('/explore')
              }} textAlign="center">Explore</Button>

              {
                user?.email ?
                  <Button
                    onClick={logOut}
                    sx={{ color: 'black', display: 'block' }} textAlign="center">Logout</Button>
                  :
                  <Button
                    onClick={() => {
                      history.push('/login')
                    }}
                    sx={{ color: 'black', display: 'block' }}
                    textAlign="center">Login</Button>
              }


            </MenuItem>

          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: 'white', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '30%' }}>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', fontFamily: "poppins" }}
            >
              Home
            </Button>
            <Button

              onClick={() => {
                history.push('/explore')
              }}
              sx={{ my: 2, color: 'white', display: 'block', fontFamily: "poppins" }}
            >
              Explore
            </Button>
          </Box>
          <Box>
            {
              user?.email ?
                <Box>
                  <Button onClick={logOut} color="inherit"
                    sx={{ my: 2, color: "#b71c1c", fontFamily: "poppins", fontWeight: "500", fontSize: "16px" }}>Logout</Button>
                </Box>
                :
                <Link style={{ textDecoration: "none", color: "white" }} to='/login'><Button color="inherit"
                  sx={{ my: 2, fontFamily: "poppins", fontWeight: "500", fontSize: "16px" }}>Login</Button>
                </Link>
            }
          </Box>


        </Box>


      </Toolbar>
    </Container>
  );
};

export default NavBar;