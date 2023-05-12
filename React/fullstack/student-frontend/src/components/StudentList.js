import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll, deleteStudent } from "./ApiService";
import AddIcon from "@mui/icons-material/Add";

import {
  Container,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Student from "./Student";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAll().then((res) => {
      setStudents(res.data);
    });
  }, [students.length]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteStudent(id).then(() => {
      setStudents((prevStudents) => {
        return prevStudents.filter((student) => student.id !== id);
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
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <Student
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  address={student.address}
                  gender={student.gender}
                  deleteItem={handleDelete.bind(null, student.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default StudentList;
