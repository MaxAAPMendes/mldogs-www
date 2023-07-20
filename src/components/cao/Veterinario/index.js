import React, { useState} from "react";
import { observer } from "mobx-react";
import ModelCao, { modelCao } from '../../../models/cao';
import estilos from "../ComponentesCao.module.css";
import { TextField } from "@mui/material";
const Veterinario = () => {
  const [vet, setVet] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const camposVeterinario = ModelCao.camposVeterinario();
  const sets = {
    veterinario: {
      value: vet,
      set: setVet,
    },
    endereco: {
      value: endereco,
      set: setEndereco
    },
    telefone: {
      value: telefone,
      set: setTelefone
    }
  }
  modelCao.capturarDadosVet(vet, endereco, telefone);
  return (
    <div className={estilos.containerDadosVeterinario}>
      {
        React.Children.toArray(Object.keys(camposVeterinario).map(
          (campo) => (
            <TextField
              fullWidth
              key={`input-nome-vet-${camposVeterinario[campo].nome}`}
              value={sets[camposVeterinario[campo].nome].value}
              onChange={(e) => sets[camposVeterinario[campo].nome].set(e.target.value)}
              id={`input-nome-vet-${camposVeterinario[campo].rotulo}`}
              label={camposVeterinario[campo].rotulo}
              placeholder={camposVeterinario[campo].rotulo || camposVeterinario[campo].placeholder}
              variant="outlined"
              required={Boolean(camposVeterinario[campo].obrigatorio)}
              type={camposVeterinario[campo].tipoCampo}
              size="small"
            />
          )
        ))
      }
    </div>
  )
};

export default observer(Veterinario);
