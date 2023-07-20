
import { makeAutoObservable } from "mobx";
export default class Cliente {
  constructor() {
    this.ondeConheceu = "";
    makeAutoObservable(this);
  }

  static camposInput() {
    return {
      nome: {
        nome: "nome",
        rotulo: "Nome completo",
        colunaTabela: "nome_dono",
        placeholder: "Nome completo",
        tipoCampo: "text",
      },
      endereco: {
        nome: "endereco",
        rotulo: "Endereço",
        colunaTabela: "endereco",
        tipoCampo: "text",
      },
      telefone: {
        nome: "telefone",
        rotulo: "Telefone",
        colunaTabela: "telefone",
        tipoCampo: "tel",
      },
      email: {
        nome: "email",
        rotulo: "E-mail",
        colunaTabela: "email",
        tipoCampo: "email",
      },
      cidade: {
        nome: "cidade",
        rotulo: "Cidade",
        colunaTabela: "cidade",
        tipoCampo: "text",
      },
      cpf: {
        nome: "cpf",
        rotulo: "CPF",
        colunaTabela: "cpf",
        tipoCampo: "text",
      },
      ondeConheceu: {
        nome: "ondeConheceu",
        rotulo: "Onde nos conheceu?",
        colunaTabela: "ondeConheceu",
        itens: [
          {
            item:"facebook",
            valor: 5
          },
          {
            item: "instagram",
            valor: 2
          },
          {
            item: "google",
            valor: 3
          },{
            item: "indicação",
            valor: 1
          },
          {
            item: "direto loja",
            valor: 4
          },
          {
            item: "eventos",
            valor: 9
          },
          {
            item: "Paineis",
            valor: 7
          },
          {
            item: "Outdoor",
            valor: 8
          },
          {
            item: "outros",
            valor: 6
          }
        ],
        tipoCampo: "",
      }
    }
  }

  selecionarItem(itemSelecionado, nomeCampo) {
    if (nomeCampo === "ondeConheceu") this.ondeConheceu = itemSelecionado;
  }

  capturarDadosBasicos({
    nome,
    endereco,
    telefone,
    email,
    cidade,
    ondeConheceu
  }) {
    this.nome = nome
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.cidade = cidade;
    this.ondeConheceu = ondeConheceu;
  }

  obterDadosGravacaoClienteTemp(cpf, id_dono) {
    const dados = {
      nome_dono: this.nome,
      endereco: this.endereco,
      telefone: this.telefone,
      email: this.email,
      cidade: this.cidade,
      ondeConheceu: this.ondeConheceu,
      cpf,
      id_dono
    }
    return dados;
  }
}
const modelCliente = new Cliente();
export { modelCliente };
