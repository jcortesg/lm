import * as readlineSync from 'readline-sync';
import * as screen from './screen';
import Vehicle from './vehicle';
import { main } from './index';

jest.mock('readline-sync');
jest.mock('./screen');

describe('Main function', () => {
  it('should display instructions, read user input, and exit properly', () => {
    (readlineSync.question as jest.Mock).mockReturnValueOnce('5').mockReturnValueOnce('5').mockReturnValueOnce('salir');
   
    const processCommandsMock = jest.fn();
    const vehicleInstance = new Vehicle(5, 5) as any;
    vehicleInstance.processCommands = processCommandsMock;

    main();

    expect(screen.printInstructions).toHaveBeenCalled();
    expect(screen.drawGrid).toHaveBeenCalled();
    expect(readlineSync.question).toHaveBeenCalledTimes(3);
    expect(processCommandsMock).not.toHaveBeenCalled(); 
  });
});