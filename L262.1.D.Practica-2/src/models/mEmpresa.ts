import mTrabajador from "./mTrabajador.js";

export default class mEmpresa {
  private acumNomina: number = 0;
  private contTrabajador: number = 0;
  constructor() {
    this.acumNomina = 0;
    this.contTrabajador = 0;
  }

  procesarTrabajador(mTrabajador: mTrabajador): void {
    this.acumNomina += mTrabajador.calcularSalario();
    this.contTrabajador++ 
  }
  
  montoNomina(): number {
    return this.acumNomina;
  }

  promedioSalario(): number {
    return this.montoNomina() / this.contTrabajador;
  }
}
