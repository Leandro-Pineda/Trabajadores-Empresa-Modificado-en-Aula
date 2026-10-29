import { iTrabajador } from "../interfaces/iTrabajador.js";
declare var bootstrap: any;

export default class vTrabajadorBootstrap implements iTrabajador {
  private inNombre: HTMLInputElement;
  private inHRegular: HTMLInputElement;
  private inHExtra: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: any;
  private reportes: HTMLElement;

  constructor() {
    this.inNombre = document.getElementById("trabajador_inNombre") as HTMLInputElement;
    this.inHRegular = document.getElementById("trabajador_inHRegular") as HTMLInputElement;
    this.inHExtra = document.getElementById("trabajador_inHExtra") as HTMLInputElement;
    this.btCancelar = document.getElementById("trabajador_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("trabajador_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("trabajador");
    this.modal = new bootstrap.Modal(elementoModal);
    this.reportes = document.getElementById("body_reportesTrabajadores") as HTMLElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get hRegular(): number {
    return this.inHRegular ? +this.inHRegular.value : 0;
  }
  get hExtra(): number {
    return this.inHExtra ? +this.inHExtra.value : 0;
  }

  reportar({ nombre, salario }: { nombre: string; salario: number }): void {
    const reporte = document.createElement("div");
    const salarioDolares = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(salario);
    reporte.textContent = `El trabajador ${nombre} tiene un salario de ${salarioDolares}`;
    this.reportes.appendChild(reporte);
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inHRegular.value = "";
    this.inHExtra.value = "";
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
  }
}
