import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaBootstrap implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;
  private lblPromedioSalario: HTMLElement;

  constructor() {
    this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador") as HTMLButtonElement;
    this.lblMontoNomina = document.getElementById("body_lblMontoNomina") as HTMLElement;
    this.lblPromedioSalario = document.getElementById("body_lblPromedioSalario") as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.btNuevoTrabajador.onclick = callback;
  }

  reportar({ montoNomina, promedioSalario}: { montoNomina: number, promedioSalario: number }): void {
    this.lblMontoNomina.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(montoNomina);
    this.lblPromedioSalario.innerHTML= `${promedioSalario}`
  }
}
