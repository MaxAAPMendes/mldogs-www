import React, { useState } from "react";
import { observer } from "mobx-react";
import ModelCao, { modelCao } from '../../../models/cao';
import InputData from '../../../utils/comuns/inputData';
import estilos from "../ComponentesCao.module.css";

const Vacinas = ({ estiloCustomizado }) => {
  const [raiva, setRaiva] = useState("");
  const [multipla, setMultipla] = useState("");
  const [gripal, setGripal] = useState("");
  const [leishmaniose, setLeish] = useState("");
  const [giardia, setGiardia] = useState("");
  const [verme, setVerme] = useState("");
  const [pulga, setPulga] = useState("");
  const camposVacinas = ModelCao.camposVacinas();
  const setsVacinas = {
    raiva: setRaiva,
    multipla: setMultipla,
    gripal: setGripal,
    leishmaniose: setLeish,
    giardia: setGiardia,
    verme: setVerme,
    pulga: setPulga
  }
  modelCao.capturarDadosVacinas(
    raiva,
    multipla,
    gripal,
    leishmaniose,
    giardia,
    verme,
    pulga
  );
  return (
    <div className={estiloCustomizado || estilos.containerInputData}>
      {
        React.Children.toArray(Object.keys(camposVacinas).map((vacina) => (
          <InputData
            rotulo={camposVacinas[vacina].rotulo}
            obrigatorio={camposVacinas[vacina].obrigatorio}
            onSelecionar={setsVacinas[vacina]}
          />
        )))
      }
    </div>
  )
}

export default observer(Vacinas);
