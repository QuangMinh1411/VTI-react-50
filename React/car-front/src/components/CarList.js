import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import carApi, { ENDPOINT } from "../apis/carApi";
import Car from "./Car";
import {
  Container,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const getCar = async () => {
      try {
        const rs = await carApi.getAllCar();
        setCars(rs.data);
        setUrl("");
        setTimeout(() => setUrl(ENDPOINT + "/images/"), 100);
      } catch (err) {
        console.log(err);
      }
    };
    getCar();
  }, [cars.length]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    carApi.deleteCar(id).then(() => {
      setCars((prevCar) => {
        return prevCar.filter((car) => car.id !== id);
      });
    });
  };
  return (
    <Container>
      <Stack spacing={2}>
        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            size="small"
            align="right"
            startIcon={<AddIcon />}
            onClick={() => {
              navigate("/add");
            }}
          >
            Add
          </Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} arial-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Model</TableCell>
                <TableCell align="left">Maker</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <Car
                  key={car.id}
                  id={car.id}
                  type={car.type}
                  model={car.model}
                  maker={car.maker}
                  src={url + car.id}
                  // src={`${ENDPOINT}/images/${car.id}`}
                  deleteItem={handleDelete.bind(null, car.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default CarList;
