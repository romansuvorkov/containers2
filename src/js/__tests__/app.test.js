import ErrorRepository from '../app';

test('Ошибка есть', () => {
  const errorsOfInput = new ErrorRepository();
  const received = errorsOfInput.translate(23);
  const expected = 'Допускется ввод только латинских символов';
  expect(received).toEqual(expected);
});

test('Ошибка есть', () => {
  const errorsOfInput = new ErrorRepository();
  errorsOfInput.errorRepository.set(1, 'Допускется ввод только чисел');
  errorsOfInput.errorRepository.set(23, 'Допускется ввод только латинских символов');
  const received = errorsOfInput.translate(123);
  const expected = 'Unknown error';
  expect(received).toEqual(expected);
});
