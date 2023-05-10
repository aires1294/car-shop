import { NextFunction, Request, Response } from 'express';
import CustomError from '../Utils/error';

class MiddlewareError {
  public static dealWith(
    error: Error & CustomError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status || 400).json({ message: error.message });
    next();
  }
}

export default MiddlewareError;