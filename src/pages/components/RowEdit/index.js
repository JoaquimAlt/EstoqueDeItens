import React from "react";
import "./styles.css";
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <TableRow className="row-edit">
      <td>
      <input
          type="text"
          name="nome"
          required="required"
          placeholder="Nome"
          value={editFormData.nome}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input
          type="text"
          name="marca"
          required="required"
          placeholder="Marca"
          value={editFormData.marca}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input
          type="text"
          name="subctg"
          required="required"
          placeholder="Subcategoria"
          value={editFormData.subctg}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <select 
        name="medida" 
        value={editFormData.medida}
          onChange={handleEditFormChange}>
          <option>Litro (L)</option>
          <option>Mililitro (mL)</option>
          <option>Grama (g)</option>
          <option>Quilograma (kg)</option>
        </select>
      </td>
      <td>
      <input
          type="number"
          name="quant"
          required="required"
          placeholder="Quantidade"
          value={editFormData.quant}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <select 
        name="tipo" 
        value={editFormData.tipo}
          onChange={handleEditFormChange}>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
      </td>
      <td>
        <IconButton type="submit"><SaveIcon/></IconButton>
        <IconButton onClick={handleCancelClick}><CancelIcon/></IconButton>
      </td>
    </TableRow>
  );
};


export default EditableRow;
