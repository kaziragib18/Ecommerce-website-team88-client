import React, { useState } from 'react';
import { Alert, Paper, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import register from '../../../../images/register.svg'
import NavBar from '../../Shared/NavBar/NavBar';
import useAuth from '../../../../hooks/useAuth';


const Register = () => {

  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { registerUser, user, isLoading, authError } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    // console.log(field, value);
  }
  const handleLoginSubmit = e => {
    if (loginData.password !== loginData.passwordConfirm) {
      alert('Your password did not match');
      return
    }
    registerUser(loginData.email, loginData.password, history);
    e.preventDefault();
  }

  return (
    <>
      <NavBar />
      <Container>
        <Paper elevation={24} sx={{ p: 5, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item sx={{ mt: 2 }} xs={12} md={6}>
              <h1 style={{ fontFamily: 'cursive', color: '#e65100' }}>Welcome Please Register
              </h1>

              {!isLoading &&
                <form>
                  {/* <TextField
                  required
                  sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                  id="standard-basic"
                  label="Name"
                  type="name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                /> */}
                  <TextField
                    required
                    sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                    required
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    required
                    sx={{ width: '75%', m: 1, fontStyle: 'italic' }}
                    id="standard-basic"
                    label="Confirm Password"
                    type="password"
                    name="passwordConfirm"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />

                  <div style={{ justifyContent: "space-between", paddingTop: 10, paddingBottom: 6 }}>
                    <Link style={{ textDecoration: 'none' }}
                      to="/login"
                      variant="text">
                      <Button sx={{ color: '#2e7d32', fontSize: 12, fontStyle: 'italic' }}
                      >Already have an account? Please Login</Button>
                    </Link>
                  </div>

                  <Button
                    onClick={handleLoginSubmit}
                    variant="contained"
                    sx={{ width: "34%", m: 1, fontStyle: 'italic', fontSize: 12 }}
                    style={{ backgroundColor: '#e65100' }}
                  >Sign up</Button>

                </form>
              }

              {isLoading && <CircularProgress />}

              {user?.email && <Alert severity="success" style={{ width: "75%", justifyContent: 'center', alignItems: 'center' }}>SuccessFully logged in
              </Alert>}
              {authError && <Alert severity="error" style={{ width: "75%", justifyContent: 'center', alignItems: 'center' }}>{authError}
              </Alert>}
            </Grid>

            <Grid item xs={12} md={6}>
              <img src={register} style={{ width: '100%', marginTop: 90 }} alt="" />
            </Grid>

          </Grid>
        </Paper>
      </Container >
    </>

  );
};

export default Register;