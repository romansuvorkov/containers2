class ErrorRepository {
  constructor() {
    this.errorRepository = new Map();
  }

  translate(code) {
    if (this.errorRepository.has(code)) {
      return this.errorRepository.get(code);
    }
    return 'Unknown error';
  }
}


export default ErrorRepository;
