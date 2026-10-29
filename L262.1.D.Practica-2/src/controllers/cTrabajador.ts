import { iTrabajador } from "../interfaces/iTrabajador.js";
import mTrabajador from "../models/mTrabajador.js";

export default class cTrabajador {
  private vista: iTrabajador;
  private callback?: (trabajador: mTrabajador | null) => void;

  constructor(vista: iTrabajador) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarTrabajador(callback: (trabajador: mTrabajador | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    const callback = this.callback;
    this.callback = undefined;
    callback?.(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    if (!this.callback) return;

    const nombre = this.vista.nombre.trim();
    const hRegular = this.vista.hRegular;
    const hExtra = this.vista.hExtra;

    if (!nombre) {
      alert("Ingrese el nombre del trabajador.");
      return;
    }
    if (!Number.isFinite(hRegular) || !Number.isFinite(hExtra) || hRegular < 0 || hExtra < 0) {
      alert("Las horas deben ser números iguales o mayores que cero.");
      return;
    }

    const trabajador = new mTrabajador({ nombre, hRegular, hExtra });
    this.vista.reportar({
      nombre: trabajador.nombre,
      salario: trabajador.calcularSalario(),
    });

    const callback = this.callback;
    this.callback = undefined;
    callback(trabajador);
    this.vista.ocultar();
  }
}
