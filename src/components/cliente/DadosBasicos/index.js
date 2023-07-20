import React, { useState } from "react";
import { observer } from "mobx-react";
import ModelCliente, { modelCliente } from '../../../models/cliente';
import InputCliente from '../inputCliente';
import InputSelecao from '../../../utils/comuns/inputSelecao';

const DadosBasicosCliente = ({ cpf }) => {
  const camposCliente = ModelCliente.camposInput();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [ondeConheceu, setOndeConheceu] = useState("");
  // setsCliente
  const setsCliente = {
    "nome": setNome,
    "endereco": setEndereco,
    "telefone": setTelefone,
    "email": setEmail,
    "cidade": setCidade
  };
  modelCliente.capturarDadosBasicos({
    nome,
    endereco,
    telefone,
    email,
    cidade,
    ondeConheceu
  });
  return (
    <>
      {
        React.Children.toArray(Object.keys(camposCliente).map(
          (campo) => {
            if (camposCliente[campo].rotulo === "CPF") {
              return (
                <InputCliente
                  camposFormulario={camposCliente[campo]}
                  valorDefault={cpf}
                />
              );
            }
            if (camposCliente[campo].nome === "ondeConheceu") {
              return (
                <InputSelecao
                  nomeCampo={camposCliente[campo].nome}
                  rotulo={camposCliente[campo].rotulo}
                  listaItens={camposCliente[campo].itens}
                  onSelecionar={setOndeConheceu}
                />
              );
            }
            return (
              <InputCliente
                camposFormulario={camposCliente[campo]}
                onSelecionar={setsCliente[camposCliente[campo].nome]}
              />
            );
          }
        ))
      }
    </>
  )
}

export default observer(DadosBasicosCliente);