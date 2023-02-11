import { NextFunction, Request, Response } from "express";
import { USER_SERVICE } from "../constants/constants";
import { NewUser } from "../modules";
import userService from "../services/userService";
import { apiResponse } from "../utils/apiResponse";
import { Logger } from "../utils/logger/logger";

async function createUser(req: Request, res: Response, next: NextFunction) {
  const logger = new Logger(USER_SERVICE);
  try {
    const user: NewUser = req.body;
    logger.info({ message: "Calling create user service" });
    await userService.create(logger, user);
    return res.json(apiResponse._201())
  } catch (err) {
    logger.error(err.message)
    next(err)
  }
}

export default {
  createUser,
};
