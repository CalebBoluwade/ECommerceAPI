import { Response } from "express";
import { ResponseSchema } from "../TYPES/ResponseSchema";

const APIRESPONSE = (
  Response: Response<ResponseSchema>,
  ResponseData: ResponseSchema
) => {
  Response.status(ResponseData.statusCode).send(ResponseData);

  return;
};

export default APIRESPONSE;
