import { sum, countChars, roleName } from '.'

describe('Ex1 : The primitives', () => {
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
});