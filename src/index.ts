import readlineSync from 'readline-sync';
import Vehicle from './vehicle';
import { drawGrid, printInstructions } from './screen';

export const main = () => {
  printInstructions();

  const n = parseInt(readlineSync.question('Ingrese el número de filas (n): '), 10);
  const m = parseInt(readlineSync.question('Ingrese el número de columnas (m): '), 10);

  if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0) {
    console.log('Por favor, ingrese números enteros positivos para las filas y columnas.');
    main();
  }

  const vehicle = new Vehicle(n, m);

  while (true) {
    drawGrid(vehicle, n, m);

    const commands = readlineSync.question('Ingrese los comandos (formato: pasos,direccion;): ');

    if (commands.toLowerCase() === 'salir') {
      console.log('Historial de comandos:');
      const history = vehicle.getHistory();
      history.forEach(command => console.log(command));
      break;
    }

    const results = vehicle.processCommands(commands);
    results.forEach(result => console.log(result));
  }
};

main();