
import estilos from "./PageCliente.module.css";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { mascaraCPF } from '../../utils/mascaras/cpf';
import { validate } from "gerador-validador-cpf";
import { observer } from "mobx-react";
import alerta from '../../models/alerta';
import { MensagemAlerta } from '../../utils/comuns/mensagemAlerta';
import Cliente from '../../api/cliente';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import IconLimpar from '@mui/icons-material/CleaningServices';
import LinkPreCadastroCliente from "@/components/cliente/linkPreCadastroCliente";
import { TituloPagina } from "@/utils/comuns/tituloPagina";
import { Cabecalho } from '../../components/Cabecalho';

function LinkAutoCadastro() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [link, setLink] = useState(null);
  const [id, setId] = useState("");
  const limpar = () => {
    setCpf("");
    setNome("");
    setId("");
    setLink(false);
  }
  let textoAjudaCpf = "";
  const cadastrar = async () => {
    if (!cpf.length || !nome.length) {
      return alerta.ativarMensagem({
        texto: "Preencha todos os campos",
        tipoAlerta: "atencao"
      })
    }
    if (!validate(cpf)) {
      return alerta.ativarMensagem({
        texto: "CPF inválido",
        tipoAlerta: "atencao"
      })
    }
    setCarregando(true);
    const { dados, error, mensagem } = await Cliente.consultarPorCpf(cpf);
    setCarregando(false);
    if (error) {
      return alerta.ativarMensagem({
        texto: mensagem,
        tipoAlerta: "error"
      });
    }
    if (dados && dados.length) {
      const texto = `Já existe um cliente cadastrado para este CPF: ${dados[0].nome_dono}`;
      textoAjudaCpf = texto;
      return alerta.ativarMensagem({
        texto,
        tipoAlerta: "info"
      });
    }
    const dadosCliente = { nome_dono: nome, cpf };
    const { error: erroCadastro, idCadastrado, mensagem: msgErroCadastro } =
      await Cliente.cadastrarTemporario(dadosCliente);
    if (erroCadastro || !idCadastrado) {
      return alerta.ativarMensagem({
        texto: msgErroCadastro || "Ocorreu um erro no cadastro do cliente",
        tipoAlerta: "error"
      });
    }
    setId(idCadastrado);
    setLink(true);
    return alerta.ativarMensagem({
      texto: `Cliente cadastrado com sucesso - ID ${idCadastrado}`,
      tipoAlerta: "sucesso"
    })
  }
  if ((!validate(cpf) && cpf.length === 14)) {
    textoAjudaCpf = "CPF inválido"
  } else textoAjudaCpf = "";
  return (
    <div className={estilos.main}>
      <Cabecalho />
      <TituloPagina titulo="Pré cadastro do cliente"/>
      <div className={estilos.inputCpf}>
        <div className={estilos.containerCpf}>
          <TextField
            fullWidth
            error={Boolean(textoAjudaCpf)}
            id="input-cpf-pre-cadastro"
            label="CPF"
            placeholder="CPF do cliente"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(mascaraCPF(e.target.value))}
            helperText={textoAjudaCpf}
          />
        </div>
        <div>
          <TextField
            className={estilos.campoNome}
            id="input-nome-cliente"
            label="Nome"
            placeholder="Nome do cliente"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
      </div>
      <div className={estilos.containerAcao}>
        <Button
          variant="contained"
          onClick={cadastrar}
          disabled={carregando}
          startIcon={carregando && <RotateRightIcon />}
        >
          {carregando ? "Executando..." : "Cadastrar" }
        </Button>
        <Button
          variant="outlined"
          onClick={limpar}
          disabled={carregando}
          startIcon={carregando ? <RotateRightIcon /> : <IconLimpar />}
        >
          {carregando ? "Executando..." : "Limpar" }
        </Button>
      </div>
      <div className={estilos.containerLink}>
        {link && (
          <LinkPreCadastroCliente cpf={cpf} id={id}/>
        )}
      </div>
      <MensagemAlerta />
    </div>
  )
};

export default observer(LinkAutoCadastro);
