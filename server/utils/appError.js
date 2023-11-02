// inherit from built-in Error
class AppError extends Error {
  constructor(message, statusCode) {
    // Calling parent class Error accepts message as a params
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
