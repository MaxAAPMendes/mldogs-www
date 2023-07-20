import React, { useState } from "react";
import { observer } from "mobx-react"
import ModelCao, { modelCao } from '../../../models/cao';
import InputCao from '../inputCao';
import estilos from "../ComponentesCao.module.css";


const DadosBasicosCao = () => {
  const camposCao = ModelCao.camposIdentificacaoCao();
  const [nome_cao, setNomeCao] = useState("");
  const [idade_cao, setIdadeCao] = useState("");
  const [raca, setRaca] = useState("");
  const [peso_cao, setPesoCao] = useState("");
  const [porte, setPorte] = useState("");
  const [aniversario, setAniversario] = useState("");
  const setsCao = {
    "nome": setNomeCao,
    "idade": setIdadeCao,
    "raca": setRaca,
    "peso": setPesoCao,
    "porte": setPorte,
    "aniversario": setAniversario
  };
  modelCao.capturarDadosBasicos(
    nome_cao,
    idade_cao,
    raca,
    peso_cao,
    porte,
    aniversario
  );
  return (
    <div className={estilos.containerDadosBasicosCao}>
      {React.Children.toArray(Object.keys(camposCao).map(
        (campo) => (
          <div>
            <InputCao
              dadosForm={camposCao[campo]}
              onSelecionar={setsCao[camposCao[campo].nome]}
            />
          </div>
        )
        ))}
    </div>
  )
}

export default observer(DadosBasicosCao);
