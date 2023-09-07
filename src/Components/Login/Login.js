import React from 'react';
import './Login.css';
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import loginAvatar from '../../Images/user-avatar-human-admin-login-512.webp';
import { Link } from 'react-router-dom';

const Login = () => {
    const theme = createTheme();

    const handleChange = e => {
        // const oldInfo = {...userInfo};
        // oldInfo[e.target.name] = e.target.value;
        // setUserInfo(oldInfo);
    }

    const handleSubmit = event => {
        // event.preventDefault();

        // setLoggedInUser(userLoadData);
        // sessionStorage.setItem("user", JSON.stringify(userLoadData));

        // if(userLoadData?.userEmail && userLoadData?.userPassword){
        //     navigate("/home", { 
        //         replace: true,
        //     });
        // }
        // else{
        //     alert("email or password is incorrect");
        // }
    }

    return (
        <div className='loginPage'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            paddingTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "gray" }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/signUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Login;