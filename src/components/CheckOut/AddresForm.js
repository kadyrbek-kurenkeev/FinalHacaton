import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Container, Paper } from "@mui/material";
import { checkOutContext } from "../Context/CheckOutContextProvider";

export default function AddressForm() {
  const {
    setFirstName,
    setSecondName,
    setLine,
    setLineTwo,
    setLineThree,
    setLineFour,
    setLineFive,
    setLineSix,
    getStepContent,
    setActiveStep,
    handleNext,
    handleBack,
    steps,
    activeStep,
    line,
    lineTwo,
    lineThree,
    lineFour,
    lineFive,
    lineSix,
  } = React.useContext(checkOutContext);
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => {
                setSecondName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              onChange={(e) => {
                setLine(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              onChange={(e) => {
                setLineTwo(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={(e) => {
                setLineThree(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setLineFour(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={(e) => {
                setLineFive(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={(e) => {
                setLineSix(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {activeStep !== 0 && (
                <Button
                  onClick={handleBack}
                  sx={{
                    mt: 3,
                    ml: 1,
                    backgroundColor: "#ff6c48",
                    color: "white",
                    "&:hover": {
                      background: "red",
                    },
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  mt: 3,
                  ml: 1,
                  backgroundColor: "#ff6c48",
                  color: "white",
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
