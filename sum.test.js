const stringLength = require('./index');

test('string range 1 - 10', () => {
  expect(stringLength.length).toBeGreaterThan(0);
  expect(stringLength.length).toBeLessThan(10);
});