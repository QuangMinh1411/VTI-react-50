import React, { useEffect } from "react";
import { useState } from "react";
import { updateStudent, getStudent } from "./ApiService";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    getStudent(id).then((res) => {
      setName(res.data.name);
      setAddress(res.data.address);
      setGender(res.data.gender);
    });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    updateStudent(id, {
      name: name,
      address: address,
      gender: gender,
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add Student</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: 500,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="FEMALE"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="MALE" control={<Radio />} label="Male" />
          </RadioGroup>
          <Button color="primary" size="medium" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UpdateForm;
