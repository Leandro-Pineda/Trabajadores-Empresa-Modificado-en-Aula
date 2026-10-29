import mEmpresa from "../models/mEmpresa.js";
import { iEmpresa } from "../interfaces/iEmpresa.js";
import cTrabajador from "./cTrabajador.js";

export default class cEmpresa {
  private mEmpresa: mEmpresa = new mEmpresa();
  private vEmpresa: iEmpresa;
  private cTrabajador: cTrabajador;

  // Recibe la vista del curso y el controlador del Alumno ya armado
  constructor(vistaEmpresa: iEmpresa, controladorEmpresa: cTrabajador) {
    this.vEmpresa = vistaEmpresa;
    this.cTrabajador = controladorEmpresa;

    this.vEmpresa.onNuevoTrabajador(() => this.procesar1Trabajador());
  }

  private procesar1Trabajador(): void {
    this.cTrabajador.solicitarTrabajador((trabajador) => {
      if (trabajador) {
        this.mEmpresa.procesarTrabajador(trabajador);
        this.vEmpresa.reportar({ montoNomina: this.mEmpresa.montoNomina(), promedioSalario: this.mEmpresa.promedioSalario()});
      }
    });
  }
}
