import { getInfos } from '.'

describe('Ex5 : Interfaces', () => {
  test('getInfos concats firstName and lastName and age', () => {
    expect(getInfos({firstName: 'John', lastName: 'Doe', age: 20})).toBe('John Doe (20)');
  });

  test('getInfos says if person is minor if age < 18', () => {
    expect(getInfos({firstName: 'John', lastName: 'Doe', age: 15})).toBe('John Doe (15 - minor)');
  });  

  test('age can be optional', () => {
    expect(getInfos({firstName: 'John', lastName: 'Doe'})).toBe('John Doe (?)');
  });
});