import React, { useState, useEffect, memo } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { 
  Container, 
  Typography,
  TextField, 
  CssBaseline, 
  Button, 
  Avatar 
} from '@material-ui/core';
import { LOGIN_URL } from '../../constants'
import { useStyles } from './styled'

export const Authorization = memo(({ handleAuthorization }) => {
	const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const classes = useStyles();

	const formValidation = (log, pass) => !(log.length >= 3 && pass.length >= 5)
	
  const sendRequest = async (url, login, password) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
				login,
				password
			}),
    });
    return response.json();
  };
	const handleLogin = (event) => {
		event.preventDefault()
		sendRequest(LOGIN_URL, login, password).then(({ login, token }) => {
      if (login && token) { 
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
        handleAuthorization(login) 
      }
		}).catch(err => console.log(err))
  }

  useEffect(() => {
		setIsSubmitDisabled(formValidation(login, password))
  }, [login, password]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoFocus
						helperText="Three or more characters"
						onChange={(event) => setLogin(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
						helperText="Fife or more characters"
						onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
						onClick={handleLogin}
						disabled={isSubmitDisabled}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
 )
})