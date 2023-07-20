import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const InputCliente = ({
  camposFormulario,
  valorDefault,
  onSelecionar = (v) => v
}) => {
  const [valor, setValor] = useState("");
  useEffect(() => {
    onSelecionar(valor);
  },[valor]);
  const {
    rotulo,
    placeholder,
    tipoCampo
  } = camposFormulario;
  const ehCPF = (rotulo === "CPF");
  return (
    <TextField
      size="small"
      disabled={ehCPF}
      key={`input-nome-cliente-${rotulo}`}
      value={valorDefault || valor}
      onChange={(e) => setValor(e.target.value)}
      id={`input-nome-cliente-${rotulo}`}
      label={rotulo}
      placeholder={placeholder || rotulo}
      variant="outlined"
      required
      type={tipoCampo || "text"}
    />
  )
}

export default InputCliente;
