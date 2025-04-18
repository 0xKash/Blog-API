class CustomPrismaError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.status = "error";
    this.statusCode = statusCode;
    this.error = {
      message: message,
    };
  }
}

module.exports = CustomPrismaError;
