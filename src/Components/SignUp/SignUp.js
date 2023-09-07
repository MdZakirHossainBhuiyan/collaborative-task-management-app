import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const theme = createTheme();
    const [userInfo, setUserInfo] = useState(null);
    const [base64ImageData, setBase64ImageData] = useState(null);
    const [previousData, setPreviousData] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const checkValidation = (userEmail) => {
        const result = previousData.find(data => data?.email === userEmail);

        if(result?.email){
            setIsValid(true);
            console.log(isValid);
        }
    }

    const handleChange = e => {
        const userAllInfo = {...userInfo};
        userAllInfo[e.target.name] = e.target.value;
        setUserInfo(userAllInfo);
    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        const name = event.target.name;
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = function (e) {

            const userAllInfo = {...userInfo};
            userAllInfo[name] = e.target.result;
            setUserInfo(userAllInfo);
          };
    
          reader.readAsDataURL(file);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if(previousData !== null){
            checkValidation(userInfo.email);
        }

        if(isValid){
            setError("This Email already exist");
        }else{
            if(previousData){
                const oldValues = [...previousData];
                oldValues.push(userInfo);
                localStorage.setItem("userInfo", JSON.stringify(oldValues));
                navigate("/", { replace: true});
            }
            else{
                const oldValues = [];
                oldValues.push(userInfo);
                localStorage.setItem("userInfo", JSON.stringify(oldValues));
                navigate("/", { replace: true});
            }
        }
    }

    useEffect(() => {
        const userPrevInfo = JSON.parse(localStorage.getItem("userInfo"));
        setPreviousData(userPrevInfo);
    }, []);

    return (
        <div className='SignUpPage'>
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
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                                autoComplete="userName"
                                onChange={handleChange}
                            />
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
                            {
                                error && <small>{error}</small>
                            }
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="bio"
                                label="Write a Bio"
                                name="bio"
                                autoComplete="bio"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Create Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <input type="file" name="image" accept="image/*" onChange={handleImage} />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "gray" }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/" variant="body2">
                                        {"Have an account? Login"}
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

export default SignUp;