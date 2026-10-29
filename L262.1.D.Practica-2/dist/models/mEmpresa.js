export default class mEmpresa {
    acumNomina = 0;
    contTrabajador = 0;
    constructor() {
        this.acumNomina = 0;
        this.contTrabajador = 0;
    }
    procesarTrabajador(mTrabajador) {
        this.acumNomina += mTrabajador.calcularSalario();
        this.contTrabajador++;
    }
    montoNomina() {
        return this.acumNomina;
    }
    promedioSalario() {
        return this.montoNomina() / this.contTrabajador;
    }
}
//# sourceMappingURL=mEmpresa.js.map