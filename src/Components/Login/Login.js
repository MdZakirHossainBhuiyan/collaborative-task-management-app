import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const theme = createTheme();
    const [userInfo, setUserInfo] = useState(null);
    const [previousData, setPreviousData] = useState(null);
    let navigate = useNavigate();

    const handleChange = e => {
        const userAllInfo = {...userInfo};
        userAllInfo[e.target.name] = e.target.value;
        setUserInfo(userAllInfo);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const getUserData = previousData.find(data => data.email === userInfo.email && data.password === userInfo.password);

        if(getUserData?.email && getUserData?.password){
            setLoggedInUser(getUserData);
            navigate("/index", { 
                replace: true,
            });
        }
        else{
            alert("email or password is incorrect");
        }
    }

    useEffect(() => {
        const userPrevInfo = JSON.parse(localStorage.getItem("userInfo"));
        setPreviousData(userPrevInfo);
    }, []);

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