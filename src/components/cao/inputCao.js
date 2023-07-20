import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import InputSelecao from '../../utils/comuns/inputSelecao';
import InputData from '../../utils/comuns/inputData';

const InputCao = ({
  dadosForm,
  onSelecionar = (v) => v
}) => {
  const {
    nome,
    rotulo,
    placeholder,
    tipoCampo,
    itens,
    obrigatorio
  } = dadosForm;
  const [valor, setValor] = useState("");
  useEffect(() => onSelecionar(valor), [valor]);
  const camposSelecao = ["porte", "raca"];
  if (camposSelecao.includes(nome)) {
    return (
      <InputSelecao
        rotulo={rotulo}
        listaItens={itens}
        nomeCampo={nome}
        obrigatorio={obrigatorio}
        onSelecionar={onSelecionar}
      />
    )
  }
  if (nome === "aniversario") {
    return (
      <InputData
        onSelecionar={onSelecionar}
        rotulo={rotulo}
      />
    )
  }
  const help = {
    peso: {
      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
    },
    idade: {
      endAdornment: <InputAdornment position="end">meses</InputAdornment>,
    }
  }
  return (
    <TextField
      fullWidth
      key={`input-nome-cao-${nome}`}
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      id={`input-nome-cao-${rotulo}`}
      label={rotulo}
      placeholder={placeholder || rotulo}
      variant="outlined"
      required={obrigatorio}
      type={tipoCampo}
      size="small"
      InputProps={help[nome]}
    />
  )
}

export default observer(InputCao);