import { makeAutoObservable } from "mobx";

export class ModelApp {
  constructor() {
    this.dispositivoCliente = '';
    makeAutoObservable(this);
  }

  static identicarDispositivo() {
    if (window.screen.width < 640 || window.screen.height < 480) { 
      this.dispositivoCliente = 'celular';
    } else if (window.screen.width < 1024 || window.screen.height < 768) { 
      this.dispositivoCliente =  'tablet';
    } else { 
      this.dispositivoCliente = 'computador';
    }
  }
}