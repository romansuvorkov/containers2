class ErrorRepository {
  constructor() {
    this.errorRepository = new Map();
    this.errorRepository.set(1, 'Допускется ввод только чисел');
    this.errorRepository.set(23, 'Допускется ввод только латинских символов');
    this.errorRepository.set(52, 'Ошибка, нужно ввести телефон');
    this.errorRepository.set(12, 'Ошибка, нужно ввести email');
  }

  translate(code) {
    if (this.errorRepository.has(code)) {
      return this.errorRepository.get(code);
    }
    return 'Unknown error';
  }
}


export default ErrorRepository;
