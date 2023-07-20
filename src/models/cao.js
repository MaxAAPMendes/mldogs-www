import { makeAutoObservable } from "mobx";
import { racas } from '../utils/dados/racas';
import { texto } from '../utils/dados/textoDefaultObservacoes';

export default class ModelCao {
  constructor() {
    this.raiva = "";
    this.multipla = "";
    this.gripal = "";
    this.leishmaniose = "";
    this.giardia = "";
    this.verme = "";
    this.pulga = "";
    this.nome = "";
    this.idade = "";
    this.raca = "";
    this.peso = "";
    this.porte = "";
    this.aniversario = "";
    this.genero = "";
    this.sociavel = "";
    this.castrado = "";
    this.observacoes = "";
    this.veterinario = "";
    this.enderecoVet = "";
    this.telefoneVet = "";
    makeAutoObservable(this);
  }

  static camposIdentificacaoCao() {
    return {
      nomeCao: {
        nome: "nome",
        rotulo: "Nome cãozinho",
        colunaTabela: "nome_cao",
        placeholder: "Nome cãozinho",
        tipoCampo: "text",
        obrigatorio: true
      },
      idade: {
        nome: "idade",
        rotulo: "Idade",
        colunaTabela: "idade_cao",
        placeholder: "Idade do cãozinho em meses",
        tipoCampo: "number",
        obrigatorio: false
      },
      raca: {
        nome: "raca",
        rotulo: "Raça",
        colunaTabela: "raca",
        placeholder: "Raça Predominante",
        tipoCampo: "",
        itens: racas,
        obrigatorio: true
      },
      peso: {
        nome: "peso",
        rotulo: "Peso (kg)",
        colunaTabela: "peso_cao",
        placeholder: "Peso do cão",
        tipoCampo: "number",
        obrigatorio: false
      },
      porte: {
        nome: "porte",
        rotulo: "Porte",
        colunaTabela: "porte",
        placeholder: "Porte do cão",
        tipoCampo: "select",
        itens: [
          {
            item: "pequeno",
            valor: 1
          },
          {
            item: "médio",
            valor: 2
          },
          {
            item:"grande",
            valor: 3
          }
        ],
        obrigatorio: true
      },
      aniversario: {
        nome: "aniversario",
        rotulo: "Data de Aniversário",
        colunaTabela: "data_niver_cao",
        placeholder: "",
        tipoCampo: "date",
        obrigatorio: false
      }
    }
  }

  static camposVacinas() {
    return {
      raiva: {
        nome: "raiva",
        rotulo: "Raiva",
        colunaTabela: "data_raiva_ult_aplic",
        tipoCampo: "date",
        obrigatorio: true
      },
      multipla: {
        nome: "multipla",
        rotulo: "Múltipla",
        colunaTabela: "data_multipla_ult_aplic",
        tipoCampo: "date",
        obrigatorio: true
      },
      gripal: {
        nome: "gripal",
        rotulo: "Gripal",
        colunaTabela: "data_gripal_ult_aplic",
        tipoCampo: "date",
        obrigatorio: true
      },
      leishmaniose: {
        nome: "leishmaniose",
        rotulo: "Leishmaniose",
        colunaTabela: "data_lexi_ult_aplic",
        tipoCampo: "date",
        obrigatorio: false
      },
      giardia: {
        nome: "giardia",
        rotulo: "Giardia",
        colunaTabela: "data_giargia_ult_aplic",
        tipoCampo: "date",
        obrigatorio: false
      },
      verme: {
        nome: "verme",
        rotulo: "Vermifugação",
        colunaTabela: "data_verme_ult_aplic",
        tipoCampo: "date",
        obrigatorio: false
      },
      pulga: {
        nome: "pulga",
        rotulo: "Pulga/carrapato",
        colunaTabela: "data_pulga_ult_aplic",
        tipoCampo: "date",
        obrigatorio: false
      }
    }
  }

  static camposCaracteristicas() {
    return {
      genero: {
        nome: "genero",
        rotulo: "Gênero",
        colunaTabela: "genero",
        tipoCampo: "",
        itens: [{
          item: "fêmea",
          valor: 0
        },
        {
          item: "macho",
          valor: 1
        }],
        obrigatorio: false
      },
      sociavel: {
        nome: "sociavel",
        rotulo: "Sociável",
        colunaTabela: "sociavel",
        tipoCampo: "",
        itens: [{
          item: "sim",
          valor: 1
        },{
          item: "não",
          valor: 0
        }],
        obrigatorio: false
      },
      castrado: {
        nome: "castrado",
        rotulo: "Castrado",
        colunaTabela: "castrado",
        tipoCampo: "",
        itens: [
          {
            item: "sim",
            valor: 1
          },{
            item: "não",
            valor: 0
          }
        ],
        obrigatorio: false
      }
    }
  }

  static camposVeterinario() {
    return {
      veterinario: {
        nome: "veterinario",
        colunaTabela: "veterinario",
        rotulo: "Veterinário responsável",
        placeholder: "Nome do veterinário ou clínica",
        tipoCampo: "text"
      },
      endereco: {
        nome: "endereco",
        rotulo: "Endereço do Vet",
        colunaTabela: "endereco_vet",
        placeholder: "Endereço do veterinário ou da clínica",
        tipoCampo: "text"
      },
      telefone: {
        nome: "telefone",
        rotulo: "Telefone",
        colunaTabela: "telefone_vet",
        placeholder: "Telefone",
        tipoCampo: "tel"
      }
    }
  }

  static camposObservacoes() {
    return {
      observacoes: {
        nome: "observacoes",
        rotulo: "Observações",
        colunaTabela: "observacoes",
        tipoCampo: "text",
        obrigatorio: false,
        multline: true,
        textoDefault: texto
      }
    }
  }

  capturarDadosVacinas(
    raiva,
    multipla,
    gripal,
    leishmaniose,
    giardia,
    verme,
    pulga
  ) {
    this.raiva = raiva;
    this.multipla = multipla;
    this.gripal = gripal;
    this.leishmaniose = leishmaniose;
    this.giardia = giardia;
    this.verme = verme;
    this.pulga = pulga;
  }

  capturarDadosBasicos(
    nome,
    idade,
    raca,
    peso,
    porte,
    aniversario
  ) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.peso = peso;
    this.porte = porte;
    this.aniversario = aniversario;
  }

  capturarCaracteristicas(
    genero,
    sociavel,
    castrado
  ) {
    this.genero = genero;
    this.sociavel = sociavel;
    this.castrado = castrado;
  }

  capturarObservacoes(observacoes) {
    this.observacoes = observacoes;
  }

  capturarDadosVet(vet, endereco, tel) {
    this.veterinario = vet;
    this.enderecoVet = endereco;
    this.telefoneVet = tel;
  }

  obterDadosGravacaoCaoTemp(cpf, id_dono) {
    const dados = {
      nome_cao: this.nome,
      idade_cao: this.idade,
      data_niver_cao: this.aniversario,
      raca: this.raca,
      peso_cao: this.peso,
      porte: this.porte,
      cpf,
      id_dono,
      observacoes: this.observacoes,
      data_raiva_ult_aplic: this.raiva,
      data_multipla_ult_aplic: this.multipla,
      data_gripal_ult_aplic: this.gripal,
      data_lexi_ult_aplic: this.leishmaniose,
      data_giargia_ult_aplic: this.giardia,
      data_verme_ult_aplic: this.verme,
      data_pulga_ult_aplic: this.pulga,
      castrado: this.castrado,
      sociavel: this.sociavel,
      genero: this.genero,
      veterinario: this.veterinario,
      endereco_vet: this.enderecoVet,
      telefone_vet: this.telefoneVet
    }
    return dados;
  }
}

const modelCao = new ModelCao();
export { modelCao };
