import { OpenApi, Types, textPlain } from "ts-openapi";
import { any } from "zod";
// import { APIResponse } from "../../HELPERS/SWAGGER.HELPER";

export const AuthSwaggerDocs = (openApiInstance: OpenApi) => {
  openApiInstance.addPath(
    "/Auth/user",
    {
      post: {
        description: "",
        summary: "User Authentication API", // Method summary
        operationId: "login",
        requestSchema: {
          body: Types.Object({
            required: true,
            description: "Authentication using email and password",
            properties: {
              email: Types.Email({
                description: "User's Email",
                maxLength: 50,
                required: true,
              }),
              password: Types.Password({
                description: "User's Password",
                maxLength: 25,
                required: true,
                minLength: 8,
              }),
            },
            modelName: "Login",
            default: {
              email: "dad",
              password: "mom",
            },
            example: {
              email: "dad2",
              password: "mom",
            },
          }),
        },
        responses: {
          // here we declare the response types
          // 200: openApiInstance.declareSchema("SUCCESSFUL", APIResponse),
          401: textPlain("User not Found"),
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

  openApiInstance.addPath(
    "/Auth/Register",
    {
      post: {
        description: "",
        summary: "User Authentication API", // Method summary
        operationId: "Register",
        responses: {
          // here we declare the response types
          201: {
            description: "Response Object",
            schema: {
              type: "object",
              description: "",
              properties: {
                status: {
                  type: "string",
                },
                results: {
                  type: "number",
                },
                data: {
                  type: "object",
                  description: "",
                  properties: {},
                },
              },
              example: {
                status: "Created",
                results: 1,
                data: [],
              },
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
          401: textPlain("User not Found"),
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

  openApiInstance.addPath(
    "/Auth/Forgot",
    {
      patch: {
        description: "",
        summary: "User Authentication API", // Method summary
        operationId: "ForgotPassword",
        responses: {
          // here we declare the response types
          201: {
            description: "Response Object",
            schema: {
              type: "object",
              description: "",
              properties: {
                status: {
                  type: "string",
                },
                results: {
                  type: "number",
                },
                data: {
                  type: "object",
                  description: "",
                  properties: {},
                },
              },
              example: {
                status: "Created",
                results: 1,
                data: [],
              },
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
          401: textPlain("User not Found"),
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

  openApiInstance.addPath(
    "/Auth/DeleteAccount",
    {
      delete: {
        description: "",
        summary: "User Authentication API", // Method summary
        operationId: "DeleteAccount",
        responses: {
          // here we declare the response types
          201: {
            description: "Response Object",
            schema: {
              type: "object",
              description: "",
              properties: {
                status: {
                  type: "string",
                },
                results: {
                  type: "number",
                },
                data: {
                  type: "object",
                  description: "",
                  properties: {},
                },
              },
              example: {
                status: "Created",
                results: 1,
                data: [],
              },
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
          401: textPlain("User not Found"),
          500: textPlain("Internal Server Error"),
        },
        tags: ["Auth"],
        // "consumes": [
        //   "application/json"
        //   ],
        // "produces": [
        // "application/json"
        // ],
        security: [{bearerSecurity: []}],
      },
    },
    true
  );
};
