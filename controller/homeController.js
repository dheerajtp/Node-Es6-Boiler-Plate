import { sendSuccessResponse, sendErrorResponse } from "../utils/sendResponse";
const logger = require("../utils/logger");

exports.getHome = async (req, res) => {
  try {
    logger.info("Inside get home route!");
    await sendSuccessResponse(res, { url: "inside home router" });
  } catch (error) {
    logger.error(error);
    await sendErrorResponse(res, { error: "Some error occured" });
  }
};
