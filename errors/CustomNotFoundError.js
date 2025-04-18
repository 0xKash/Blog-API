class CustomNotFoundError extends Error {
  constructor(message, details, suggestion, path) {
    super(message);
    this.status = "error";
    this.statusCode = 404;
    this.error = {
      code: "RESOURCE_NOT_FOUND",
      message: message,
      details: details,
      suggestion: suggestion,
      path: path,
    };
  }
}

module.exports = CustomNotFoundError;
