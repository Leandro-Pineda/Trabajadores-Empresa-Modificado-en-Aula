export default class vTrabajadorPlain {
    inNombre;
    inHRegular;
    inHExtra;
    btCancelar;
    btAceptar;
    vista;
    reportes;
    constructor() {
        this.vista = document.getElementById("trabajador");
        this.inNombre = document.getElementById("trabajador_inNombre");
        this.inHRegular = document.getElementById("trabajador_inHRegular");
        this.inHExtra = document.getElementById("trabajador_inHExtra");
        this.btCancelar = document.getElementById("trabajador_btCancelar");
        this.btAceptar = document.getElementById("trabajador_btAceptar");
        this.reportes = document.getElementById("body_reportesTrabajadores");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get hRegular() {
        return this.inHRegular ? +this.inHRegular.value : 0;
    }
    get hExtra() {
        return this.inHExtra ? +this.inHExtra.value : 0;
    }
    reportar({ nombre, salario }) {
        const reporte = document.createElement("div");
        const salarioDolares = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(salario);
        reporte.textContent = `El trabajador ${nombre} tiene un salario de ${salarioDolares}`;
        this.reportes.appendChild(reporte);
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.inNombre.value = "";
        this.inHRegular.value = "";
        this.inHExtra.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vTrabajadorPlain.js.map