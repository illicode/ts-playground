import { complexSum } from '.'

describe('Ex4 : Union Types', () => {
  test('complexSum should correctly add one string and one number', () => {
    expect(complexSum("5", 4)).toBe(9);
  });

  test('complexSum should correctly add one string and one number (reverse order)', () => {
    expect(complexSum(5, "4")).toBe(9);
  });
});