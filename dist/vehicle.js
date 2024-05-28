"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(n, m) {
        this.x = 0;
        this.y = 0;
        this.n = n;
        this.m = m;
        this.history = [];
    }
    move(command) {
        const [steps, direction] = command.split(",");
        const stepsInt = parseInt(steps, 10);
        switch (direction) {
            case 'N':
                this.y += stepsInt;
                if (this.y >= this.n) {
                    this.y -= stepsInt;
                    return `Se ha detenido el avance por salir de los límites`;
                }
                break;
            case 'S':
                this.y -= stepsInt;
                if (this.y < 0) {
                    this.y += stepsInt;
                    return `Se ha detenido el avance por salir de los límites`;
                }
                break;
            case 'E':
                this.x += stepsInt;
                if (this.x >= this.m) {
                    this.x -= stepsInt;
                    return `Se ha detenido el avance por salir de los límites`;
                }
                break;
            case 'O':
                this.x -= stepsInt;
                if (this.x < 0) {
                    this.x += stepsInt;
                    return `Se ha detenido el avance por salir de los límites`;
                }
                break;
            default:
                return `Comando no válido: ${command}`;
        }
        this.history.push(command);
        return `(${this.y},${this.x})`;
    }
    processCommands(commands) {
        const results = [];
        const commandList = commands.split(";");
        for (const command of commandList) {
            const result = this.move(command.trim());
            results.push(`Comando: ${command.trim()} -> Posición: ${result}`);
        }
        return results;
    }
    getHistory() {
        return this.history;
    }
}
exports.default = Vehicle;
