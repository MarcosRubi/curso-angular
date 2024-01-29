class Motor {
  constructor(public tipo: string = "No hay dato") {}
}

class Carro {
  constructor(
    public nombre: string,
    public annio: number,
    public motor: Motor
  ) {}
}

const motor = new Motor("Combustible");
const carro = new Carro("Ferrrari", 2020, motor);

console.log(carro);
