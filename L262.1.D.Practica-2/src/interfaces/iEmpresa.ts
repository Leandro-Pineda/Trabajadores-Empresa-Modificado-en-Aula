export interface iEmpresa {
  onNuevoTrabajador(callback: () => void): void;
  reportar({ montoNomina,promedioSalario }: { montoNomina: number, promedioSalario: number }): void;
}
