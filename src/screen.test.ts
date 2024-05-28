import { drawGrid, printInstructions } from './screen';

describe('printInstructions function', () => {
  it('should print instructions without errors', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => { });
    printInstructions();
    expect(consoleLogMock).toHaveBeenCalledTimes(13);
    consoleLogMock.mockRestore();
  });
});
