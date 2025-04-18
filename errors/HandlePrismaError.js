const CustomBadRequestError = require("./CustomBadRequestError");
const CustomInternalServerError = require("./CustomInternalServerError");

const handlePrismaError = (err) => {
  switch (err.code) {
    case "P2002":
      throw new CustomBadRequestError(
        `Duplicated field value: ${err.meta.target}`
      );
    case "P2014":
      throw new CustomBadRequestError(`Invalid ID: ${err.meta.target}`);
    case "P2003":
      throw new CustomBadRequestError(`Invalid input data: ${err.meta.target}`);
    default:
      throw new CustomInternalServerError(
        `Something went wrong: ${err.message}`
      );
  }
};

module.exports = handlePrismaError;
