import { useState, useEffect } from 'react';
import { ModelApp } from '../../models/app';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import estilos from "./Comuns.module.css";
import dayjs from 'dayjs';

const InputData = ({
  onSelecionar = (v) => v,
  rotulo,
  obrigatorio
}) => {
  const [valor, setValor] = useState("");
  useEffect(() => ModelApp.identicarDispositivo(), []);
  useEffect(() => onSelecionar(valor));
  const componente = () => {
    if (ModelApp.dispositivoCliente !== 'computador') {
      return (
        <MobileDatePicker
          className={estilos.containerData}
          value={valor}
          inputFormat="DD/MM/YYYY"
          format="DD/MM/YYYY"
          // onChange={(data) => setValor(dayjs(data).format(formato || "DD/MM/YYYY"))}
          onChange={(data) => setValor(data)}
          label={rotulo}
          slotProps={{
            textField: {
              size: "small",
              error: (obrigatorio && !valor),
              variant: "outlined"
            },
          }}
        />
      )
    }
    return (
      <DesktopDatePicker
        slotProps={{
          textField: {
            size: "small",
            error: (obrigatorio && !valor),
            variant: "outlined"
          },
        }}
        className={estilos.containerData}
        value={valor}
        inputFormat="DD/MM/YYYY"
        format="DD/MM/YYYY"
        onChange={(data) => setValor(data)}
        // onChange={(data) => setValor(dayjs(data).format(formato || "DD/MM/YYYY"))}
        label={rotulo}
        error={Boolean(obrigatorio && !valor)}
      />
    )
  }
  return (
    <div className={estilos.containerData}>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        {componente()}
      </LocalizationProvider>
    </div>
  );
};

export default InputData;
