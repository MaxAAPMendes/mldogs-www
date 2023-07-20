import React, { useState } from 'react';
import { observer } from 'mobx-react';
import InputSelecao from '../../../utils/comuns/inputSelecao';
import ModelCao, { modelCao } from '../../../models/cao';
import estilos from "../ComponentesCao.module.css";

const CaracteristicasCao = () => {
  const [genero, setGenero] = useState("");
  const [sociavel, setSociavel] = useState("");
  const [castrado, setCastrado] = useState("");
  const camposCaracteristicas = ModelCao.camposCaracteristicas();
  const sets = {
    genero: setGenero,
    sociavel: setSociavel,
    castrado: setCastrado
  }
  modelCao.capturarCaracteristicas(genero, sociavel, castrado);
  return (
    <div className={estilos.containerCaracteristicasCao}>
      {
        React.Children.toArray(Object.keys(camposCaracteristicas).map((campo) => (
          <InputSelecao
            listaItens={camposCaracteristicas[campo].itens}
            nomeCampo={camposCaracteristicas[campo].nome}
            obrigatorio={camposCaracteristicas[campo].obrigatorio}
            onSelecionar={sets[campo]}
            rotulo={camposCaracteristicas[campo].rotulo}
          />
        )))
      }
    </div>
  )
}

export default observer(CaracteristicasCao);