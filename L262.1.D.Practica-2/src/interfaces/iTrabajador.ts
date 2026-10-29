export interface iTrabajador {
  get nombre(): string;
  get hRegular(): number;
  get hExtra(): number;
  mostrar(): void;
  ocultar(): void;
  reportar({ nombre, salario }: { nombre: string; salario: number }): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
