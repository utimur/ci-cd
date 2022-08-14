import { multiply } from './multiply';

describe('multiply', function () {
  test('positive', () => {
    expect(multiply(5, 5)).toBe(25);
  });

  test('negative', () => {
    expect(multiply(-5, 5)).toBe(-25);
  });
});
