class CustomNotAuthorizedError extends Error {
  constructor(message, details, suggestion, path) {
    super(message);
    this.status = "error";
    this.statusCode = 401;
    this.error = {
      code: "NOT_AUTHORIZED",
      message: message,
      details: details,
      suggestion: suggestion,
      path: path,
    };
  }
}

module.exports = CustomNotAuthorizedError;
