import {
  OpenApi,
  OpenApiSchema,
  textPlain,
  basicAuth,
  bearerAuth,
} from "ts-openapi";

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
  "ECOMM",
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

openApiInstance.addPath(
  "/",
  {
    get: {
      description: "",
      summary: "User Authentication API", // Method summary
      operationId: "login",
      responses: {
        // here we declare the response types
        200: {
          description: "",
          schema: {
            type: "object",
            description: "",
            properties: {},
          },
          content: {
            ResponseSchema: {
              schema: {
                type: "object",
                description: "",
                properties: {},
              },
            },
          },
        },
        500: textPlain("Internal Server Error"),
      },
      tags: ["Auth"],
      // "consumes": [
      //   "application/json"
      //   ],
      // "produces": [
      // "application/json"
      // ],
      security: [],
    },
  },
  true
);

// openApiInstance.declareSchema("", )

// set API license
openApiInstance.setLicense(
  "Apache License, Version 2.0", // API license name
  "http://www.apache.org/licenses/LICENSE-2.0", // API license url
  "http://dummy.io/terms/" // API terms of service
);
