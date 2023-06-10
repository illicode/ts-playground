import { sum, countChars, roleName, complexSum } from '.'

describe('Ex1 : primitives', () => {
  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
  });

  test('countChars should return 12 for "Hello World!"', () => {
    expect(countChars("Hello World!")).toBe(12);
  });

  test('roleName returns Admin if param is true', () => {
    expect(roleName(true)).toBe("Admin");
  });

  test('roleName returns User if param is false', () => {
    expect(roleName(false)).toBe("User");
  });

  test('complexSum should correctly add two numbers', () => {
    expect(complexSum(3, 4)).toBe(7);
  });

  test('complexSum should correctly add one string and one number', () => {
    expect(complexSum("5", 4)).toBe(9);
  });

  test('complexSum should correctly add one string and one number (reverse order)', () => {
    expect(complexSum(5, "4")).toBe(9);
  });
});