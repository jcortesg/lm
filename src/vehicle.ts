class Vehicle {
  x: number;
  y: number;
  n: number;
  m: number;
  history: string[];

  constructor(n: number, m: number) {
    this.x = 0;
    this.y = 0;
    this.n = n;
    this.m = m;
    this.history = [];
  }

  move(command: string): string {
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

  processCommands(commands: string): string[] {
    const results: string[] = [];
    const commandList = commands.split(";");
    for (const command of commandList) {
      const result = this.move(command.trim());
      results.push(`Comando: ${command.trim()} -> Posición: ${result}`);
    }
    return results;
  }

  getHistory(): string[] {
    return this.history;
  }
}

export default Vehicle;