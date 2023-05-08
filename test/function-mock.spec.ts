import * as sampleFunction from '../src/sample-functions';

// 参考：https://qiita.com/yuma-ito-bd/items/38c929eb5cccf7ce501e
describe('Sample code for mocked function', () => {
  test('Mock return value', () => {
    // spyOnでMock関数を取得でし、
    // mockReturnValueで固定の値を返すMock化をする。
    const generateRandomNumberSpy = jest
      .spyOn(sampleFunction, 'generateRandomNumber')
      .mockReturnValue(10);

    expect(sampleFunction.generateRandomNumber()).toBe(10);
    expect(generateRandomNumberSpy).toHaveBeenCalled();
  });

  test('Mock implementation', () => {
    // spyOnでMock関数を取得でし、
    // mockReturnValueでテスト用の処理にMock化をする。
    const generateRandomNumberSpy = jest
      .spyOn(sampleFunction, 'generateRandomNumber')
      .mockImplementation(() => {
        return 10;
      });

    expect(sampleFunction.generateRandomNumber()).toBe(10);
    expect(generateRandomNumberSpy).toHaveBeenCalled();
  });

  //  テストに失敗する。どうやら同一ファイル内でのMockの利用はできないみたい。
  test.skip('Mock in same file', () => {
    const generateRandomNumberSpy = jest
      .spyOn(sampleFunction, 'generateRandomNumber')
      .mockReturnValue(10);
    jest.spyOn(sampleFunction, 'executeGenerateRandomNumber');
    expect(sampleFunction.executeGenerateRandomNumber()).toBe(10);
    expect(generateRandomNumberSpy).toHaveBeenCalled();
  });
});
