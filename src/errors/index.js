class ApplicationError extends Error {
  constructor(message, options = {}) {
    super(message);

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
}

class MissingParamsError extends ApplicationError {
  get statusCode() {
    return 422;
  }
}

class ConnectionError extends ApplicationError {
  get statusCode() {
    return 500;
  }
}

class BadRequestError extends ApplicationError {
  get statusCode() {
    return 400;
  }
}

class DatabaseError extends ConnectionError {}
class IOError extends ConnectionError {}

export {
  ConnectionError,
  BadRequestError,
  DatabaseError,
  IOError,
  MissingParamsError,
};
