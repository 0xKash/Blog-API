class CustomBadRequestError extends Error {
  constructor(message, details, suggestion, path) {
    super(message);
    this.status = "error";
    this.statusCode = 404;
    this.error = {
      code: "BAD_REQUEST",
      message: message,
      details: details,
      suggestion: suggestion,
      path: path,
    };
  }
}

module.exports = CustomBadRequestError;
