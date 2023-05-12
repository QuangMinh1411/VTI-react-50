import { Button, Stack, TableCell, TableRow } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
function Student({ id, name, address, gender, deleteItem }) {
  let navigate = useNavigate();
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
    >
      <TableCell>{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{address}</TableCell>
      <TableCell align="left">
        {gender == "MALE" ? <MaleIcon /> : <FemaleIcon />}
      </TableCell>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="warning"
            endIcon={<ClearIcon />}
            onClick={deleteItem}
          >
            Delete
          </Button>

          <Link
            component="button"
            variant="contained"
            underline="none"
            onClick={() => {
              navigate(`/update/${id}`);
            }}
          >
            <EditIcon />
          </Link>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default Student;
