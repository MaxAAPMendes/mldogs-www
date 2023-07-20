import { makeAutoObservable } from "mobx";

class Alerta {
  
  constructor() {
    this.estadoJanela = false;
    this.textoMensagem = "";
    this.tipoAlerta = "info";
    this.estadoModal = false;
    makeAutoObservable(this);
  }

  ativarMensagem({ texto, tipoAlerta}) {
    this.estadoJanela = true;
    this.textoMensagem = texto;
    this.tipoAlerta = tipoAlerta;
  };

  fecharMensagem() {
    this.estadoJanela = false;
  }

  fecharModal() {
    this.estadoModal = false;
  }

  abriModal() {
    this.estadoModal = true;
  }
}

const alerta = new Alerta();
export default alerta;
