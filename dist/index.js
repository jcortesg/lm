"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const vehicle_1 = __importDefault(require("./vehicle"));
const screen_1 = require("./screen");
const main = () => {
    (0, screen_1.printInstructions)();
    const n = parseInt(readline_sync_1.default.question('Ingrese el número de filas (n): '), 10);
    const m = parseInt(readline_sync_1.default.question('Ingrese el número de columnas (m): '), 10);
    if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0) {
        console.log('Por favor, ingrese números enteros positivos para las filas y columnas.');
        main();
    }
    const vehicle = new vehicle_1.default(n, m);
    while (true) {
        (0, screen_1.drawGrid)(vehicle, n, m);
        const commands = readline_sync_1.default.question('Ingrese los comandos (formato: pasos,direccion;): ');
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
