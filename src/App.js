import React, { useState } from "react";
import cover from "../src/bg1.jpg";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHobbiesChange = (event) => {
    const value = event.target.value;
    setHobbies((prevHobbies) =>
      prevHobbies.includes(value)
        ? prevHobbies.filter((hobby) => hobby !== value)
        : [...prevHobbies, value]
    );
  };

  const handleTermsCheckboxChange = (event) => {
    setTermsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      email,
      password,
      confirmPassword,
      phone,
      dob,
      gender,
      hobbies,
      address,
      city,
      zipCode,
      country,
      notes,
      termsChecked,
    });

    resetForm();
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setDob("");
    setGender("");
    setHobbies([]);
    setAddress("");
    setCity("");
    setZipCode("");
    setCountry("");
    setNotes("");
    setTermsChecked(false);
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      />
      <Grid item xs={12} sm={8} md={7}>
        <Paper elevation={13} style={{ padding: 20 }}>
          <Typography variant="h5" align="center" gutterBottom>
            R<b>egister Yoursel</b>f
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup value={gender} onChange={handleGenderChange}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Hobbies</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.includes("reading")}
                        onChange={handleHobbiesChange}
                        value="reading"
                      />
                    }
                    label="Reading"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.includes("travelling")}
                        onChange={handleHobbiesChange}
                        value="travelling"
                      />
                    }
                    label="Traveling"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hobbies.includes("writing")}
                        onChange={handleHobbiesChange}
                        value="writing"
                      />
                    }
                    label="Writing"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  variant="outlined"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Country"
                    variant="outlined"
                  >
                    <MenuItem value="india">India</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                    <MenuItem value="uk">UK</MenuItem>
                    <MenuItem value="australia">Australia</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsChecked}
                      onChange={handleTermsCheckboxChange}
                    />
                  }
                  label="I accept the terms and conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!termsChecked} // Disable button if terms are not accepted
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
