import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link as RouterLink } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";
import { FormControl, Radio, RadioGroup } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register } = React.useContext(authContext);

  const [username, setUsername] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [gender, setGender] = React.useState("");

  const [contact, setContact] = React.useState("");

  function handleSubmit() {
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !username.trim() ||
      !contact.trim() ||
      !gender.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);

    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", confirmPassword);

    formData.append("gender", gender);
    formData.append("contact", contact);

    register(formData);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm password"
              type="password"
              id="password-confirm"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <FormControl component="fieldset">
              <Typography>Your Gender :</Typography>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="unisex"
                  control={<Radio color="primary" />}
                  label="unisex"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Phone number"
              name="contact"
              autoComplete="contact"
              autoFocus
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <Button
              // type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to="/login">
                  <Typography>{"Have an account? Sign In"}</Typography>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
