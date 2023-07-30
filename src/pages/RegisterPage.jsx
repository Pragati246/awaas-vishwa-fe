import { FormControl, TextField, Button } from "@mui/material";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
        <FormControl fullWidth>
          <TextField
           id="filled-basic"
            label="Full Name"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Phone Number"
            variant="filled"
            required
          />
          <TextField
           id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
           id="filled-basic"
            label="User Name"
            variant="filled"
           />
          <TextField
           id="filled-basic"
           label="Password"
           variant="filled"
          />
          <Button variant="contained" sx={{mardginTop: '20px'}}>Sign Up</Button>
        </FormControl>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
