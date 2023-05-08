import { Person } from '../src/class-mock';

describe('Sample code for mocked class', () => {
  test('Mock method', () => {
    const hosoi = new Person('Souhei', 'Hosoi');
    const getFullNameSpy = jest
      .spyOn(hosoi, 'getFullName')
      .mockReturnValue('Mocked return value');

    expect(hosoi.getFullName()).toBe('Mocked return value');
    expect(getFullNameSpy).toHaveBeenCalled();
  });

  test('Mock getter', () => {
    const hosoi = new Person('Souhei', 'Hosoi');
    const getFirstNameSpy = jest
      .spyOn(hosoi, 'firstName', 'get')
      .mockReturnValue('Ayaka');

    // getFullName()で内部的にMock化されたGetterを呼び出す。
    expect(hosoi.getFullName()).toBe('Ayaka Hosoi');
    expect(getFirstNameSpy).toHaveBeenCalled();
  });
});
