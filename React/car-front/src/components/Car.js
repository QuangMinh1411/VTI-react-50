import { Button, Stack, TableCell, TableRow } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Car = ({ id, type, model, maker, src, deleteItem }) => {
  let navigate = useNavigate();
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
    >
      <TableCell>{id}</TableCell>
      <TableCell align="left">{model}</TableCell>
      <TableCell align="left">{maker}</TableCell>
      <TableCell align="left">
        <img src={src} width="100px" alt={model} />
      </TableCell>
      <TableCell align="left">{type}</TableCell>
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
};

export default Car;
