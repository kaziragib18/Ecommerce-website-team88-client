import React from 'react';
// import AppBar from '@mui/material/AppBar';
import clsx from 'clsx';
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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './NavBar.css'
import { Divider } from '@mui/material';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
const useStyles = makeStyles({
  list: {
    width: 250,
    
  },
  fullList: {
    width: 'auto',
    height:'auto'
  
  },
 
});

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let history = useHistory();

  const { user, logOut,admin } = useAuth();

  const handleOpenNavMenu = (event) => {

    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
/////////////////////// dashboard///////////////////////
const classes = useStyles();
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <div  style={{background:"#020202",height:'100%'}}
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })} 
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
     <Typography variant="h6" component="div"  sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "16px",color:'wheat',marginTop:'1.375rem',marginLeft:'1.375rem' }}>
           {user?.displayName}
          </Typography>
     <Typography variant="h6" component="div"  sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "16px",color:'gray',marginTop:'1.375rem',marginLeft:'1.375rem' }}>
           {user?.email}
          </Typography>
          <Divider sx={{color:'whitesmoke',marginTop:'20px'}}/>
  { admin &&
   <List  >
      
        <ListItem button onClick={()=>{
           history.push('/addItem')
        }}>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          <ListItemText className='drawer-text'  primary={'Add Item'} />
        </ListItem>
        <ListItem button onClick={()=>{
           history.push('/manage_order')
        }}>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          {/* <ListItemText className='drawer-text'  primary={'Manage order'} />
        </ListItem>
        <ListItem button onClick={()=>{
           history.push('/manage_product')
        }}>
        
          <ListItemText className='drawer-text'  primary={'Manage Product'} /> */}
        </ListItem>
        <ListItem button onClick={()=>{
           history.push('/myorders')
        }}>
          
          <ListItemText className='drawer-text'  primary={'My orders'} />
        </ListItem>
        <ListItem button onClick={()=>{
           history.push('/makeadmin')
        }}>
          <ListItemText className='drawer-text'  primary={'Make Admin'} />
        </ListItem>
        <ListItem button onClick={()=>{
           history.push('/review')
        }}>
          <ListItemText className='drawer-text'  primary={'Make Review'} />
        </ListItem>
     
    </List>}
    { !admin &&
   <List  >
      
       
        <ListItem button onClick={()=>{
           history.push('/myorders')
        }}>
          
          <ListItemText className='drawer-text'  primary={'My orders'} />
        </ListItem>
       
        <ListItem button onClick={()=>{
           history.push('/review')
        }}>
          <ListItemText className='drawer-text'  primary={'Make Review'} />
        </ListItem>
     
    </List>}
    <Box>
                  <Button onClick={logOut} color="inherit"
                    sx={{ my: 2, color: "#b71c1c", fontFamily: "poppins", fontWeight: "500", fontSize: "16px",marginLeft:'1.375rem' }}>Logout</Button>
                </Box>
  
  </div>
);
 
  return (
<Container maxWidth="xl" sx={{bgcolor:"#020202"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:'white',mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LAVISH
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
             
                <MenuItem sx={{display:'block'}} onClick={handleCloseNavMenu} >
                <Button sx={{color:'black',display:'block'}}  onClick={()=>{
                  history.push('/home')
                }} textAlign="center">Home</Button> 
                  <Button sx={{color:'black',display:'block'}}  onClick={()=>{
                  history.push('/explore')
                }} textAlign="center">Explore</Button> 

                  <Button sx={{color:'black',display:'block'}}   onClick={()=>{
                  history.push('/login')
                }} textAlign="center">Log in</Button>
                    {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{color:'black'}} onClick={toggleDrawer(anchor, true)}>Dashboard</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color:'white',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LAVISH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'},marginLeft:'30%'}}>
          <Button
              
              onClick={()=>{
                history.push('/home')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
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
         
            {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{color:'white'}} onClick={toggleDrawer(anchor, true)}>Dashboard</Button>
          <SwipeableDrawer
          bgcolor='black'
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
          </Box>
          <Box style={{display:'flex'}}>
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
             <Typography variant="h6" component="div"  sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "16px",color:'wheat',marginTop:'1.375rem' }}>
           {user?.displayName}
          </Typography>
          </Box>


        </Box>


      </Toolbar>
    </Container>
  );
};

export default NavBar;