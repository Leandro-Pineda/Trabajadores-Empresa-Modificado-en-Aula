export default class mTrabajador {
  private _nombre: string = "";
  private _hRegular: number = 0;
  private _hExtra: number = 0;

  constructor({
    nombre,
    hRegular,
    hExtra
  }: {
    nombre: string;
    hRegular: number;
    hExtra: number;
    
  }) {
    this.nombre = nombre;
    this.hRegular = hRegular;
    this.hExtra = hExtra;
  }

  set nombre(nombre: string) {this._nombre = nombre.trim();}
  get nombre(): string {return this._nombre;}

  set hRegular(hRegular: number) {this._hRegular = +hRegular;}
  get hRegular(): number {return this._hRegular;}

  set hExtra(hExtra: number) {this._hExtra = +hExtra;}
  get hExtra(): number {return this._hExtra;}

  regular():number{
    return this.hRegular * 10;
  }

  extra():number{
    return this.hExtra * 25;
  }

  calcularSalario():number{
    return this.regular() + this.extra();
  }
}
