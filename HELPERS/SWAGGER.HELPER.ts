import {
  OpenApi,
  OpenApiSchema,
  textPlain,
  basicAuth,
  bearerAuth,
} from "ts-openapi";
import { AuthSwaggerDocs } from "../SRC/AUTH/AUTH.SWAGGER";

export const SwaggerJSON: OpenApiSchema = {
  // definition: {
  openapi: "3.0.3",
  info: {
    title: "E-COMMERCE API DOCS",
    description: "NITRO API",
    termsOfService: "",
    version: "1.0.0",
    contact: {
      email: "calebb.jnr@gmail.com",
    },
    license: {
      name: "MIT",
      url: "",
    },
  },
  paths: {},
  servers: [
    { url: `http://localhost:${process.env.PORT}` },
    { url: "https://prod-api:443" },
  ],
};

export const openApiInstance: OpenApi = new OpenApi(
  "3.0.3",
  "E-COMMERCE API DOCS",
  "REST APIs",
  "calebb.jnr@gmail.com"
);

openApiInstance.setServers([
  { url: "http://prod-api.com:443/api/v1" },
  { url: `http://localhost:${process.env.PORT}` },
]);

openApiInstance.declareSecurityScheme("JWT", {
  in: "header",
  name: "Authorization",
  type: "apiKey",
});

// openApiInstance.declareSecurityScheme()

AuthSwaggerDocs(openApiInstance)

// openApiInstance.declareSchema("", A)

// set API license
openApiInstance.setLicense(
  "Apache License, Version 2.0", // API license name
  "http://www.apache.org/licenses/LICENSE-2.0", // API license url
  "http://dummy.io/terms/" // API terms of service
);
