"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printInstructions = exports.drawGrid = void 0;
const chalk_1 = __importDefault(require("chalk"));
const drawGrid = (vehicle, n, m) => {
    for (let i = n - 1; i >= 0; i--) {
        let row = '';
        for (let j = 0; j < m; j++) {
            if (vehicle.y === i && vehicle.x === j) {
                row += chalk_1.default.red('(o-o)');
            }
            else {
                row += chalk_1.default.green('| __ ');
            }
        }
        console.log(row);
    }
    console.log('\n');
};
exports.drawGrid = drawGrid;
const printInstructions = () => {
    console.log(chalk_1.default.blue('============================'));
    console.log(chalk_1.default.blue('      INSTRUCCIONES'));
    console.log(chalk_1.default.blue('============================'));
    console.log(chalk_1.default.yellow('Ingrese el número de filas (n) y columnas (m) para crear la cuadrícula.'));
    console.log(chalk_1.default.yellow('El vehículo se representará con ') + chalk_1.default.red('_(o-o)_') + chalk_1.default.yellow('.'));
    console.log(chalk_1.default.yellow('Puede mover el vehículo con los siguientes comandos:'));
    console.log(chalk_1.default.green('  pasos,N'));
    console.log(chalk_1.default.green('  pasos,S'));
    console.log(chalk_1.default.green('  pasos,E'));
    console.log(chalk_1.default.green('  pasos,O'));
    console.log(chalk_1.default.yellow('Ejemplo: 2,N;3,S'));
    console.log(chalk_1.default.red('Escriba "salir" para terminar el programa.'));
    console.log(chalk_1.default.blue('============================'));
};
exports.printInstructions = printInstructions;
