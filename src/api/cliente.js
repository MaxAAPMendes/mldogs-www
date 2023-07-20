import rest from "./rest";

class Cliente {
  constructor() {

  }

  static async consultarPorId(id) {
    return id;
  };

  static async consultarPorCpf(cpf) {
    try {
      const res = await rest.get(`/cliente/cpf/${cpf}`);
      const { dados } = res ? res.data : [];
      return {dados};
    } catch (error) {
      console.log(error);
      return {
        error: true,
        mensagem: error.message,
      }
    }
  }

  static async cadastrarTemporario(infoCliente) {
    try {
      const clienteCadastrado = await rest.post('/cliente/temp', infoCliente);
      const { dados } = clienteCadastrado.data;
      return {
        idCadastrado: dados ? dados[0].insertId : null,
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        mensagem: error.message,
      }
    }
  }

  static async alterarTemporario(dadosCliente) {
    try {
      const clienteAlterado = await rest.put('/cliente/temp', dadosCliente);
      const { dados } = clienteAlterado.data;
      return {
        registrosAlterados: dados ? dados[0].affectedRows : 0,
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        mensagem: error.message,
      }
    }
  }
}
// const cliente = new Cliente();
export default Cliente;