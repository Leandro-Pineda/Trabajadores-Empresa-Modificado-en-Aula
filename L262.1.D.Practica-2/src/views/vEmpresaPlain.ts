import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaPlain implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private lblPromedioSalario: HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador") as HTMLButtonElement;
    this.lblPromedioSalario = document.getElementById("body_lblPromedioSalario") as HTMLElement;
    this.lblMontoNomina = document.getElementById("body_lblMontoNomina") as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.btNuevoTrabajador.onclick = callback;
  }

  reportar({ montoNomina, promedioSalario }: { montoNomina: number, promedioSalario: number }): void {
    this.lblMontoNomina.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(montoNomina);
    this.lblPromedioSalario.innerHTML=`${promedioSalario}`
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
