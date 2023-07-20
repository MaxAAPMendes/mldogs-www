import { Typography, Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import estilos from "./Cliente.module.css";
import alerta from '../../models/alerta';

const LinkPreCadastroCliente = ({ cpf, id }) => {
  const numId = Number(id);
  if (!cpf || !numId) return "Não foi possível gerar o link, tente novamente.";
  const baseurl = window.location.origin || "https://mldogs-d4878.web.app";
  const link = `${baseurl}/cliente/temp/${numId}/${cpf}`;
  const copiar = () => {
    navigator.clipboard.writeText(link);
    return alerta.ativarMensagem({
      texto: "Link copiado!",
      tipoAlerta: "info"
    });
  }
  return (
    <div className={estilos.containerLinkCliente}>
      <Typography>
        {link}
      </Typography>
      <Button startIcon={<ContentCopyIcon />} onClick={copiar}>Copiar Link</Button>
    </div>
  )
};

export default LinkPreCadastroCliente;