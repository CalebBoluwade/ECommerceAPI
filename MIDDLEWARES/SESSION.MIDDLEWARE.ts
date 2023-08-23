import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import ip from "ip";
import { UTILS } from "../UTILS/INDEX.UTILS";
import { JwtPayload } from "jsonwebtoken";
import APIRESPONSE from "../HELPERS/APIRESPONSE.HELPER";
import { ResponseMapping } from "../UTILS/RESPONSE_MAPPING.UTILS";

interface JWTResponse {
  valid: boolean;
  expired: boolean;
  decoded: string | JwtPayload | null;
}

const ValidateAPIUser =
  (VerifyUser: (token: string, type: "access" | "refresh") => JWTResponse) =>
  (Request: Request, Response: Response, next: NextFunction): void => {
    const start = Date.now();
    try {
      const accessToken = get(Request, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
      );
      const user = VerifyUser(accessToken, "access");
      // console.log(Request.body)

      const remoteIP = ip.address();

      UTILS.Logger.info(
        {
          ip: remoteIP || Request.ip,
          path: Request.baseUrl + Request.url,
          data:
            Object.keys(Request.body).length !== 0
              ? Request.body
              : Object.keys(Request.query).length !== 0
              ? Request.query
              : Request.params,
        },
        user.valid
          ? "Request Accepted"
          : accessToken
          ? "Request Denied. Expired / Invalid Token"
          : "Request Denied.. No Token Provided"
      );

      if (!user.valid) {
        return APIRESPONSE(Response, 401, {
          data: null,
          results: 0,
          status: accessToken ? "Expired / Invalid Token" : "No Token Provided",
        });
      }

      // if (
      //   !JSON.parse(process.env.AllowedSources!)?.includes(Request.body?.Source)
      // ) {
      //   return APIRESPONSE(Response, {
      //     status: "Invalid Source",
      //     statusCode: 400,
      //     data: null,
      //     results: 0,
      //   });
      // }

      if (
        user.valid
        // &&
        // JSON.parse(process.env.AllowedSources!)?.includes(Request.body?.Source)
      ) {
        (Request as any).User = user.decoded;
        return next();
      }
    } catch (error: any) {
      UTILS.Logger.error([error], error.message);
      return APIRESPONSE(Response, ResponseMapping.INVALID_REQUEST.SERVER, {
        data: null,
        results: 0,
        status: "Unable To Verify",
      });
    }

    // console.log(accessToken);
    // if (accessToken) {
    //     next();
    // httpCode: error.httpCode;
    // }
  };

export default ValidateAPIUser;
