/*
Write tests for finding princess and bot
Write tests for determining the direction
Write tests for edge cases
Write tests for printing output

N (3 <= N < 100) 

should be a function
grid should be odd integer
test the fn with a grid that is 3x3 
test the fn with a grid that is 81

find directions up/left (3, ["p--", "-m-", "---"])
find directions up/right (3, ["--p", "-m-", "---"])
find directions down/left (3, ["---", "-m-", "p--"])
find directions down/right (3, ["---", "-m-", "--p"])
find directions
print moves to get to princess
*/

const { displayPathtoPrincess } = require('./botSavesPrincess1');

describe('displayPathtoPrincess function', () => {
    test('should be a function', () => {
        expect(typeof displayPathtoPrincess).toBe('function');
    });

    test('should throw error if grid is not an odd integer', () => {
        expect(() => displayPathtoPrincess(4, [])).toThrow();
    });

    test('should find directions up/left', () => {
        expect(displayPathtoPrincess(3, ["p--", "-m-", "---"])).toEqual('UP\nLEFT');
    });

    test('should find directions up/right', () => {
        expect(displayPathtoPrincess(3, ["--p", "-m-", "---"])).toEqual('UP\nRIGHT');
    });

    test('should find directions down/left', () => {
        expect(displayPathtoPrincess(3, ["---", "-m-", "p--"])).toEqual('DOWN\nLEFT');
    });

    test('should find directions down/right', () => {
        expect(displayPathtoPrincess(3, ["---", "-m-", "--p"])).toEqual('DOWN\nRIGHT');
    });

    test('should print moves to console', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        displayPathtoPrincess(3, ["p--", "-m-", "---"]);
        expect(consoleSpy).toHaveBeenCalledWith('UP\nLEFT');
    });

    test('should handle 3x3 grid', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        displayPathtoPrincess(3, ["p--", "-m-", "---"]);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    test('should handle 9x9 grid', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const grid = Array.from({ length: 9 }, () => '---'.repeat(9).split(''));
        grid[0][0] = 'p';
        grid[8][8] = 'm';
        displayPathtoPrincess(9, grid);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
});