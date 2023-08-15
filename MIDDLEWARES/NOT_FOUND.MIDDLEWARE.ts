import { NextFunction, Request, Response } from "express";

export const NotFoundRouteHandler = (Request: Request, Response: Response, Next: NextFunction) => {
    const error = new Error(`Not Found : ${Request.originalUrl}`);
    Response.status(404);
    Next(error);
  };