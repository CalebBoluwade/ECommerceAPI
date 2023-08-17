import { NextFunction, Request, Response } from "express";
import APIRESPONSE from "../HELPERS/APIRESPONSE.HELPER";
import { ResponseMapping } from "../UTILS/RESPONSE_MAPPING.UTILS";

export const NotFoundRouteHandler = (Request: Request, Response: Response, Next: NextFunction) => {
    const error = new Error(`Not Found : ${Request.originalUrl}`);
    // Response.status(404);
    APIRESPONSE(Response, 404, {
      data: null,
      results: 0,
      status: ResponseMapping.NOT_FOUND.MESSAGE
    })
    // Next(error);
  };