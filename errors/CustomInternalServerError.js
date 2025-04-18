class CustomInternalServerError extends Error {
  constructor(message, details) {
    super(message);
    this.status = "error";
    this.statusCode = 500;
    this.error = {
      code: "INTERNAL_SERVER_ERROR",
      message: message,
      details: details,
    };
  }
}

module.exports = CustomInternalServerError;
