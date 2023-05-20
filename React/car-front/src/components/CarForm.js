import React from "react";
import { useState } from "react";
import carApi from "../apis/carApi";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PublishIcon from "@mui/icons-material/Publish";

import { IconButton } from "@mui/material";

const CarForm = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };
  const [model, setModel] = useState("");
  const [maker, setMaker] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    carApi.saveCar(image, model, maker).then((res) => {
      console.log(res.data);
    });
    navigate("/");
  };
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add Car</h1>
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
            label="Car Model"
            variant="outlined"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Car Maker"
            variant="outlined"
            value={maker}
            onChange={(e) => setMaker(e.target.value)}
          />

          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              endAdornment: (
                <>
                  <input
                    id="choose-file"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <label htmlFor="choose-file">
                    <IconButton aria-label="upload">
                      <PublishIcon />
                    </IconButton>
                  </label>
                </>
              ),
            }}
          />

          <Button color="primary" size="medium" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CarForm;
