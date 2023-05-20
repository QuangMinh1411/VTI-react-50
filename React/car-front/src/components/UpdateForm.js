import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import carApi from "../apis/carApi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };
  const [model, setModel] = useState("");
  const [maker, setMaker] = useState("");
  useEffect(() => {
    carApi.getCar(id).then((res) => {
      setModel(res.data.model);
      setMaker(res.data.maker);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    carApi
      .updateCar(id, {
        model: model,
        maker: maker,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Update Car</h1>
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

          <Button color="primary" size="medium" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UpdateForm;
