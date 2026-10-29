export default class vEmpresaBootstrap {
    lblMontoNomina;
    btNuevoTrabajador;
    lblPromedioSalario;
    constructor() {
        this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.lblMontoNomina = document.getElementById("body_lblMontoNomina");
        this.lblPromedioSalario = document.getElementById("body_lblPromedioSalario");
    }
    onNuevoTrabajador(callback) {
        this.btNuevoTrabajador.onclick = callback;
    }
    reportar({ montoNomina, promedioSalario }) {
        this.lblMontoNomina.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(montoNomina);
        this.lblPromedioSalario.innerHTML = `${promedioSalario}`;
    }
}
//# sourceMappingURL=vEmpresaBootstrap.js.map