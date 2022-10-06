import React from "react";
import "./styles.css";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { red, green } from '@mui/material/colors';


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <TableRow className="tr-default">
      <td>{contact.nome}</td>
      <td>{contact.marca}</td>
      <td>{contact.subctg}</td>
      <td>{contact.medida}</td>
      <td>{contact.quant}</td>
      <td alignCenter>
        {contact.tipo === "Saída" ? (
          <ArrowCircleUpIcon sx={{ color: red[500] }} />
        ) : (
          <ArrowCircleDownIcon sx={{ color: green[500] }} />
        )}
        </td>
      <td className="buttons">
      <CreateIcon onClick={(event) => handleEditClick(event, contact)} />
      <DeleteIcon onClick={() => handleDeleteClick(contact.id)}/>
      </td>
    </TableRow>
  );
};

export default ReadOnlyRow;
