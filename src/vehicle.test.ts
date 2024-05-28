import Vehicle from './vehicle';

describe('Vehicle class', () => {
  let vehicle: Vehicle;

  beforeEach(() => {
    vehicle = new Vehicle(5, 5); // Creating a new Vehicle instance with a grid of size 5x5
  });

  it('should initialize with correct initial position and empty history', () => {
    expect(vehicle.x).toBe(0);
    expect(vehicle.y).toBe(0);
    expect(vehicle.history).toHaveLength(0);
  });

  it('should move the vehicle correctly and update history', () => {
    const commands = '2,N;3,E;1,S;2,O';

    const results = vehicle.processCommands(commands);

    expect(results).toHaveLength(4);

    expect(results[0]).toContain('(2,0)'); 
    expect(results[1]).toContain('(2,3)');
    expect(results[2]).toContain('(1,3)'); 
    expect(results[3]).toContain('(1,1)'); 

    expect(vehicle.history).toHaveLength(4);
    expect(vehicle.history).toEqual(['2,N', '3,E', '1,S', '2,O']);
  });

  it('should handle invalid commands', () => {
    const invalidCommand = '5,X';

    const result = vehicle.move(invalidCommand);

    expect(result).toContain('Comando no válido');
    expect(vehicle.history).toHaveLength(0);
  });

  it('should stop moving when reaching the grid limits', () => {
    const commands = '6,N;6,E;1,N;1,S';

    const results = vehicle.processCommands(commands);
    expect(results).toHaveLength(4);

    expect(results[0]).toContain('Se ha detenido');
    expect(results[1]).toContain('Se ha detenido');
    expect(results[2]).toContain('(1,0)');
    expect(results[3]).toContain('(0,0)'); 

    expect(vehicle.history).toHaveLength(2);
    expect(vehicle.history).toEqual(['1,N', '1,S']);
  });
});
