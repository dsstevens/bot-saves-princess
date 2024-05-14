const { moveForward } = require('../src/botSavesPrincess2');

describe('moveForward', () => {
  test('Basic test', () => {
    const grid = [
      '--p-',
      '----',
      '----',
      '-m--'
    ];
    expect(moveForward(4, 3, 1, grid)).toBe('DOWN');
  });

  test('Edge cases', () => {
    const grid = [
      '----',
      '----',
      '----',
      '-mp-'
    ];
    // Bot at top edge
    expect(moveForward(4, 0, 1, grid)).toBe('DOWN');
    // Bot at bottom edge
    expect(moveForward(4, 3, 1, grid)).toBe('UP');
    // Bot at left edge
    expect(moveForward(4, 3, 0, grid)).toBe('RIGHT');
    // Bot at right edge
    expect(moveForward(4, 3, 3, grid)).toBe('LEFT');
  });

  test('Princess at corners', () => {
    const grids = [
      [
        'p---',
        '----',
        '----',
        '-m--'
      ],
      [
        '---p',
        '----',
        '----',
        '-m--'
      ],
      [
        '----',
        '----',
        '----',
        '-m-p'
      ],
      [
        '----',
        '----',
        '----',
        'p-m-'
      ]
    ];
    grids.forEach((grid) => {
      expect(moveForward(4, 3, 1, grid)).toBe('DOWN');
    });
  });

  test('Princess and Bot at same position', () => {
    const grid = [
      '----',
      '----',
      '--mp',
      '----'
    ];
    expect(moveForward(4, 2, 2, grid)).toBe('LEFT');
  });

  test('Invalid input handling', () => {
    expect(() => {
      moveForward('abc', 'def', 'ghi', []);
    }).toThrow();

    expect(() => {
      moveForward(3, 1, 1, [
        '---',
        '---',
        '---'
      ]);
    }).toThrow();
  });
});
