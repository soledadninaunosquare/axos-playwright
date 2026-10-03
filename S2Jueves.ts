class Tester {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  iniciarPruebas(): void {
    console.log("Iniciando pruebas de automatización");
  }
}

const tester = new Tester("Soledad Nina");
console.log(tester.nombre);
tester.iniciarPruebas();
