import estilos from "./Comuns.module.css";
import { Typography } from "@mui/material";

export const TituloPagina = ({ titulo, estiloCustomizado }) => (
  <div className={estiloCustomizado ? estiloCustomizado : estilos.containerTitulo}>
    <Typography style={{ fontWeight: "bold"}}>{titulo}</Typography>
  </div>
);
