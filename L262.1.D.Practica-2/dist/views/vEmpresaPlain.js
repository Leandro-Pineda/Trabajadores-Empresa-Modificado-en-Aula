export default class vEmpresaPlain {
    lblMontoNomina;
    lblPromedioSalario;
    btNuevoTrabajador;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.lblPromedioSalario = document.getElementById("body_lblPromedioSalario");
        this.lblMontoNomina = document.getElementById("body_lblMontoNomina");
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
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vEmpresaPlain.js.map