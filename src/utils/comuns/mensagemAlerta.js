import { observer } from "mobx-react";
import alerta from '../../models/alerta';
import { Snackbar } from "@mui/material";
import { icones } from './icones';
import Alert from '@mui/joy/Alert';

const cores = {
  info: "primary",
  error: "danger",
  atencao: "warning",
  sucesso: "success"
}

export const MensagemAlerta = observer(() => {
  return(
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alerta.estadoJanela}
        onClose={() => alerta.fecharMensagem()}
        key={alerta.textoMensagem}
        autoHideDuration={8000}
      >
        <Alert
          color={cores[alerta.tipoAlerta]}
          size="sm"
          variant="solid"
        >
          {alerta.textoMensagem}
          {icones[alerta.tipoAlerta] || icones.info}
        </Alert>
      </Snackbar>
   </div>
  )
});