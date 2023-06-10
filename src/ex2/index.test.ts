import { getFullName, isMinor } from '.'

describe('Ex2 : Object Types', () => {
  test('getFullname concats firstName and lastName', () => {
    expect(getFullName({firstName: 'John', lastName: 'Doe', age: 20})).toBe('John Doe');
  });

  test('isMinor returns true is age < 18', () => {
    expect(isMinor({firstName: 'John', lastName: 'Doe', age: 15})).toBe(true);
  });  

  test('isMinor returns false is age is 18 or upper', () => {
    expect(isMinor({firstName: 'John', lastName: 'Doe', age: 18})).toBe(false);
    expect(isMinor({firstName: 'John', lastName: 'Doe', age: 99})).toBe(false);
  });
});