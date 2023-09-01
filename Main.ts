/**
@author Boluwade Caleb <@CalebBoluwade>
*/

import dotenv from "dotenv";
dotenv.config();
import express, { Application, urlencoded, json } from "express";
import helmet from "helmet";
import compression from "compression";
import responseTime from "response-time";
import { NotFoundRouteHandler } from "./MIDDLEWARES/NOT_FOUND.MIDDLEWARE";
import { ErrorHandler } from "./MIDDLEWARES/ERRORHANDLER.MIDDLEWARE";
import cors from "cors";
import SwaggerUI from "swagger-ui-express";
import { SwaggerJSON, openApiInstance } from "./HELPERS/SWAGGER.HELPER";
import { UTILS } from "./UTILS/INDEX.UTILS";
import { Env } from "./CONFIG/DEV.CONFIG";
import { Product } from "./SRC/PRODUCTS/PRODUCT.SERVICE";
// import rateLimit from "express-rate-limit";

const API: Application = express();
API.set("env", process.env.NODE_ENV);
API.use(
  urlencoded({
    extended: true,
  })
);
API.use(json());
// const rateLimiter = rateLimit({
//     windowMs: 10 * 60 * 5000,
//     max: 35,
//     handler: (
//       Request: Request,
//       Response: Response<ResponseSchema>,
//       next: NextFunction
//     ) => {
//       // next();
//       return NITRO_RESPONSE(Response, {
//         status: "TOO MANY REQUESTS",
//         statusCode: 429,
//         results: 0,
//         data: null,
//       });
//     },
//   });

// const slow = slowDown

//   API.use(rateLimiter);
API.set("trust proxy", 1);
API.use(
  cors({
    origin: [`http://localhost:${Env("PORT")}`],
    credentials: true,
  })
);
// console.log("h",Env('PORT'))
API.use(express.urlencoded({ extended: true, limit: "50kb" }));
API.use(express.json({ limit: "50kb" }));
API.use(
  compression({
    level: 8,
    threshold: 0,
  })
);
API.use(responseTime({}));
//   API.use(DatabaseMiddleware);
API.use(helmet());
API.use(helmet.contentSecurityPolicy());
API.use(helmet.crossOriginEmbedderPolicy());
API.use(helmet.crossOriginOpenerPolicy());
API.use(helmet.crossOriginResourcePolicy());
API.use(helmet.dnsPrefetchControl());
API.use(helmet.frameguard());
API.use(helmet.hidePoweredBy());
API.use(
  helmet.hsts({
    maxAge: 123456,
    includeSubDomains: false,
  })
);
// API.use(helmet.expectCt());
API.use(helmet.ieNoOpen());
API.use(helmet.noSniff());
API.use(helmet.originAgentCluster());
API.use(helmet.permittedCrossDomainPolicies());
API.use(helmet.referrerPolicy());
API.use(helmet.xssFilter());

API.use(ErrorHandler);

const C = new Map<
  string,
  {
    l: boolean;
    a: string;
  }
>();

// C[UTILS.GetUUID()] = {l: false, a: ",jl"}
// C.set(UTILS.GetUUID(), { l: false, a: ",jl" });
API.get("/", (req, res) => {
  res.send("E Commerce API SAYS Hello World");
});
API.use(
  "/swagger",
  SwaggerUI.serve,
  SwaggerUI.setup(openApiInstance.generateJson(), {})
);

const Prod = new Product("Shoes");
const ServerAPI = API.listen(process.env.PORT, async () => {
  console.log(`Yowa!! | Running | ${Env("PORT")}`);
  console.log(await Prod.GetProductByID());
});

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err: Error) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  ServerAPI.close(() => {
    process.exitCode = 1;
  });
});

API.use(NotFoundRouteHandler);
