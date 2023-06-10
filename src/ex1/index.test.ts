import { sum, countChars } from '.'

describe('Ex1 : primitives', () => {
  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
  });

  test('countChars should return 12 for "Hello World!"', () => {
    expect(countChars("Hello World!")).toBe(12);
  });
});