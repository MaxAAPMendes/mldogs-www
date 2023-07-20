import { useState } from "react";
import { TextField } from "@mui/material";
import ModelCao, { modelCao } from '../../../models/cao';
import { observer } from "mobx-react";
import estilos from "../ComponentesCao.module.css";

const Observacoes = () => {
  const campoObservacoes = ModelCao.camposObservacoes();
  const {
    rotulo,
    placeholder,
    textoDefault
  } = campoObservacoes.observacoes;
  const [valor, setValor] = useState(textoDefault);
  modelCao.capturarObservacoes(valor);
  return (
    <div key={rotulo} className={estilos.containerObservacoes}>
      <TextField
        fullWidth
        key={`text-${rotulo}`}
        label={rotulo}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        multiline
        maxRows={10}
      />
    </div>
  )
}

export default observer(Observacoes);