import { Response } from "express";
import { ResponseSchema } from "../TYPES/ResponseSchema";

const APIRESPONSE = (
  Response: Response<ResponseSchema>,
  statusCode: number,
  ResponseData: ResponseSchema
) => {
  Response.status(statusCode).send(ResponseData);

  return;
};

export default APIRESPONSE;
