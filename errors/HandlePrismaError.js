const CustomPrismaError = require("./CustomPrismaError");
const CustomInternalServerError = require("./CustomInternalServerError");

const handlePrismaError = (err) => {
  switch (err.code) {
    case "P2002":
      throw new CustomPrismaError(
        "P2002",
        `Duplicated field value: ${err.meta.target}`
      );
    case "P2014":
      throw new CustomPrismaError("P2014", `Invalid ID: ${err.meta.target}`);
    case "P2003":
      throw new CustomPrismaError(
        "P2003",
        `Invalid input data: ${err.meta.target}`
      );
    case "P2025":
      throw new CustomPrismaError(
        "P2025",
        `Operation depends on one or more records not found ${err.meta.target}`
      );
    default:
      throw new CustomInternalServerError("Something went wrong", err.meta);
  }
};

module.exports = handlePrismaError;
