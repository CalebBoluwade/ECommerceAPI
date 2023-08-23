import { OpenApi, textPlain } from "ts-openapi";

export const AuthSwaggerDocs = (openApiInstance: OpenApi) => {
  openApiInstance.addPath(
    "/Auth/user",
    {
      post: {
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
};
