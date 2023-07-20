import rest from './rest';

class Cao {
  constructor(){}

  static async cadastrarTemporario(infoCao) {
    try {
      const caoCadastrado = await rest.post('/cao/temp', infoCao);
      const { dados = [] } = caoCadastrado.data;
      return {
        idCaoCadastrado: dados.length ? dados[0].insertId : null,
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

export default Cao;
