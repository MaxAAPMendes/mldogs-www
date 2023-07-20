import CircularProgress from '@mui/joy/CircularProgress';
import { Box, Typography } from "@mui/material";
import estilos from "./Comuns.module.css";

export const Processando = ({
  mensagem
}) => {
  return (
    <Box className={estilos.containerProcessando}>
      <div>
        <Typography>
          {mensagem}
        </Typography>
      </div>
      <CircularProgress
        color="danger"
        determinate={false}
        size="sm"
        variant="solid"
      />
    </Box>
  )
}