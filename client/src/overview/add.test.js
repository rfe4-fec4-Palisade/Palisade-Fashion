const add  = require('./add.js')

test('should add the two numbers passed in', () => {
  expect(add(6, 8)).toBe(14);
});

