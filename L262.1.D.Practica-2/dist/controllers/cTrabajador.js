import mTrabajador from "../models/mTrabajador.js";
export default class cTrabajador {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarTrabajador(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        const callback = this.callback;
        this.callback = undefined;
        callback?.(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        if (!this.callback)
            return;
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
//# sourceMappingURL=cTrabajador.js.map