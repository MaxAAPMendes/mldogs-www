import React, { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const InputSelecao = ({
  rotulo,
  listaItens,
  nomeCampo,
  onSelecionar,
  obrigatorio
}) => {
  const [valor, setValor] = useState("");
  useEffect(() => {
    onSelecionar(valor);
  }, [valor]);
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="select-label">{rotulo}</InputLabel>
        <Select
          labelId="simple-select-label"
          id={`simple-select${nomeCampo}`}
          value={valor}
          label={rotulo}
          onChange={(e) => setValor(e.target.value)}
          size="small"
          required={obrigatorio}
        >
          {
            React.Children.toArray(listaItens.map((objItem) => (
              <MenuItem value={objItem.valor}>{String(objItem.item).toUpperCase()}</MenuItem>
            )))
          };
        </Select>
      </FormControl>
    </Box>
  );
}

export default InputSelecao;