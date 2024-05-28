import chalk from 'chalk';
import Vehicle from './vehicle';

export const drawGrid = (vehicle: Vehicle, n: number, m: number) => {
  for (let i = n - 1; i >= 0; i--) {
    let row = '';
    for (let j = 0; j < m; j++) {
      if (vehicle.y === i && vehicle.x === j) {
        row += chalk.red('(o-o)');
      } else {
        row += chalk.green('| __ ');
      }
    }
    console.log(row);
  }
  console.log('\n');
};

export const printInstructions = () => {
  console.log(chalk.blue('============================'));
  console.log(chalk.blue('      INSTRUCCIONES'));
  console.log(chalk.blue('============================'));
  console.log(chalk.yellow('Ingrese el número de filas (n) y columnas (m) para crear la cuadrícula.'));
  console.log(chalk.yellow('El vehículo se representará con ') + chalk.red('_(o-o)_') + chalk.yellow('.'));
  console.log(chalk.yellow('Puede mover el vehículo con los siguientes comandos:'));
  console.log(chalk.green('  pasos,N'));
  console.log(chalk.green('  pasos,S'));
  console.log(chalk.green('  pasos,E'));
  console.log(chalk.green('  pasos,O'));
  console.log(chalk.yellow('Ejemplo: 2,N;3,S'));
  console.log(chalk.red('Escriba "salir" para terminar el programa.'));
  console.log(chalk.blue('============================'));
};