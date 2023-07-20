import React, { useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import estilos from "../../PageCliente.module.css";
import { Container, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AcordionSimples from '../../../../utils/comuns/acordionSimples';
import { TituloPagina } from "@/utils/comuns/tituloPagina";
import alerta from '../../../../models/alerta';
import { MensagemAlerta } from "@/utils/comuns/mensagemAlerta";
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import { modelCao } from '../../../../models/cao';
import DadosBasicosCliente from '../../../../components/cliente/DadosBasicos';
import DadosBasicosCao from '../../../../components/cao/DadosBasicos';
import Vacinas from '../../../../components/cao/Vacinas';
import Veterinario from '../../../../components/cao/Veterinario';
import {modelCliente} from '../../../../models/cliente';
import CaracteristicasCao from '../../../../components/cao/Caracteristicas';
import Observacoes from "@/components/cao/Observacoes";
import { Cabecalho } from '../../../../components/Cabecalho';
import ApiCliente from '../../../../api/cliente';
import ApiCao from '../../../../api/cao';
import ModalSimples from '../../../../utils/comuns/modalSimples';
import CircularProgress from '@mui/joy/CircularProgress';
import { Processando } from '../../../../utils/comuns/processando';
import { validate } from "gerador-validador-cpf";

const SubTitulo = ({subTitulo}) => (
  <div style={{ margin: "15px 0px"}} key={subTitulo}>
    <Typography><strong>{subTitulo}</strong></Typography>
  </div>
)

const ClienteTemporario = () => {
  const router = useRouter();
  const [carregando, setCarregando] = useState({
    status: false,
    msgAlerta: ""
  });
  const { cliente } = router.query;
  const enviar = async () => {
    const dadosObrigatoriosCliente = [
      modelCliente.nome,
      modelCliente.endereco,
      modelCliente.telefone,
      modelCliente.email,
      modelCliente.cidade,
      modelCliente.ondeConheceu
    ];
    if (dadosObrigatoriosCliente.some((c) => !c)) {
      return alerta.ativarMensagem({
        texto: "Por favor preencha todos os campos em 'Dados do pessoais'",
        tipoAlerta: "atencao"
      })
    }
    const dadosBasicosCaoObrigatorios = [
      modelCao.nome,
      modelCao.porte,
      modelCao.raca
    ];
    if (dadosBasicosCaoObrigatorios.some((d) => !d)) {
      return alerta.ativarMensagem({
        texto: "Os Campos Nome, raça e porte do cãozinho são de preenchimento obrigatórios.",
        tipoAlerta: "atencao"
      }) 
    }
    const vacinasObrigatorias = [
      modelCao.raiva,
      modelCao.multipla,
      modelCao.gripal
    ];
    if (vacinasObrigatorias.some((v) => !v)) {
      return alerta.ativarMensagem({
        texto: "As datas das vacinas Raiva, Múltipla e Gripal são obrigatórias",
        tipoAlerta: "atencao"
      }) 
    }
    const caracteristicasObrigatorias = [
      modelCao.sociavel,
      modelCao.castrado,
      modelCao.genero
    ];
    if (caracteristicasObrigatorias.some((c) => c === "")) {
      return alerta.ativarMensagem({
        texto: "Os campos gênero, castrado e sociável são obrigatórios",
        tipoAlerta: "atencao"
      })
    }
    setCarregando({
      status: true,
      msgAlerta: "Cadastrando dados do dono..."
    });
    alerta.abriModal();
    const dadosClienteParaAltaracao = modelCliente
      .obterDadosGravacaoClienteTemp(router.query.cliente[1], router.query.cliente[0]);
    const idValido = Boolean(Number(router.query.cliente[0]));
    if (!validate(router.query.cliente[1]) || !idValido) {
      alerta.fecharModal();
      setCarregando({
        status: false,
        msgAlerta: ""
      });
      return alerta.ativarMensagem({
        texto: "Os dados não são válidos para gravação",
        tipoAlerta: "error"
      })
    }
    const {
      registrosAlterados,
      error,
      mensagem
    } = await ApiCliente.alterarTemporario(dadosClienteParaAltaracao);
    setCarregando({
      msgAlerta: "Cadastrando dados do cãozinho..."
    });
    const dadosCaoParaGravacao = modelCao
      .obterDadosGravacaoCaoTemp(router.query.cliente[1], router.query.cliente[0]);
    const {
      idCaoCadastrado,
      error: errorRegistroCao,
      mensagem: msgRegistroCao,
    } = await ApiCao.cadastrarTemporario(dadosCaoParaGravacao);
    if (registrosAlterados && idCaoCadastrado) {
      alerta.fecharModal();
      setCarregando({
        status: false,
        msgAlerta: ""
      });
      return alerta.ativarMensagem({
        texto: "Dados cadastrados com sucesso. Logo entraremos em contato. Obrigado",
        tipoAlerta: "sucesso"
      })
    }
    if (error || errorRegistroCao) {
      alerta.fecharModal();
      setCarregando({
        status: false,
        msgAlerta: ""
      });
      return alerta.ativarMensagem({
        texto: `Tente novamente. Ocorre um erro: ${mensagem} - ${msgRegistroCao}`,
        tipoAlerta: "error"
      })
    }
    alerta.fecharModal();
    setCarregando({
      status: false,
      msgAlerta: ""
    });
    return alerta.ativarMensagem({
      texto: "Ocorreu um erro não identificado. Tente novamente ou entre em contato com a Marcela Love Dogs",
      tipoAlerta: "error"
    });
  }
  return (
    <Container className={estilos.main}>
      <Cabecalho />
      <TituloPagina titulo="Cadastramento"/>
      <div className={[estilos.margem10]}>
        <Typography variant="body1">Olá, estamos felizes em ter você como cliente.</Typography>
      </div>
      {
        (!cliente)
        ? (<Typography variant="body1">Que pena, houve um problema com o link. Entre em contato conosco.</Typography>)
        : (
          <div>
            <div className={[estilos.margem10]}>
              <Typography variant="body1">Precisamos que nos forneça os dados abaixo para completarmos seu cadastro.</Typography>
            </div>
            <div className={estilos.containerCamposCliente}>
              <AcordionSimples
                titulo="Dados pessoais"
                estilos={estilos.containerAcordion}
                icon={<PersonIcon fontSize="small" style={{ color: "#2673b3"}}/>}
              >
                <DadosBasicosCliente cpf={router.query.cliente[1]}/>
              </AcordionSimples>
            </div>
            <div>
              <AcordionSimples
                icon={<PetsIcon fontSize="small" style={{color: "#2673b3"}}/>}
                titulo="Dados do caozinho"
              >
                <SubTitulo subTitulo="Dados Básicos"/>
                <DadosBasicosCao />
                <SubTitulo subTitulo="Vacinas"/>
                <Vacinas />
                <SubTitulo subTitulo="Caracteristicas do Cão"/>
                <CaracteristicasCao />
                <SubTitulo subTitulo="Veterinário/Clínica"/>
                <Veterinario />
                <SubTitulo subTitulo="Observações"/>
                <Observacoes />
              </AcordionSimples>
            </div>
            <div className={estilos.containerBtnEnviar}>
              <Button
                variant="contained"
                startIcon={
                  carregando.status
                  ? (<CircularProgress size="sm" color="neutral"/>)
                  : (<SendIcon />)
                }
                onClick={enviar}
                disabled={carregando.status}
              >
                {carregando.status ? "Enviando dados..." : "Enviar"}
              </Button>
            </div>
          </div>
        )
      }
      <MensagemAlerta />
      <ModalSimples><Processando mensagem={carregando.msgAlerta}/></ModalSimples>
    </Container>
  )
}

export default observer(ClienteTemporario);