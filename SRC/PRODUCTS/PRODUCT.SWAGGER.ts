import { OpenApi, Types, textPlain } from "ts-openapi";

export const ProductsSwaggerDocs = (openApiInstance: OpenApi) => {
  openApiInstance.addPath(
    "/Products/:vendorId/create",
    {
      post: {
        description: "",
        summary: "Store Products API", // Method summary
        operationId: "Products",
        requestSchema: {
          headers: {
            // Authorization: "string"
          },
          params: {
            vendorId: Types.String({
              required: true,
            }),
          },
        },
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
        tags: ["Products"],
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
    "/Products/customer?limit=limit",
    {
      get: {
        description: "",
        summary: "List Products for Customers API", // Method summary
        operationId: "customerProductss",
        requestSchema: {
          headers: {
            // Authorization: "string"
          },
          params: {
            userId: Types.String({
              required: true,
              description: "Customer's ID"
            }),
          },
          query: {
            limit: Types.Number({
              required: true,
              description: "The Number of Products items returned",
              default: 15
            }),
          },
        },
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
        tags: ["Products"],
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
    "/Products/vendor/:vendorId?limit=limit",
    {
      get: {
        description: "",
        summary: "List Vendor's Productss API", // Method summary
        operationId: "vendorProductss",
        requestSchema: {
          headers: {
            // Authorization: "string"
          },
          params: {
            vendorId: Types.String({
              required: true,
              description: "Vendor's ID"
            }),
          },
          query: {
            limit: Types.Number({
              required: true,
              description: "The Number of Products items returned",
              default: 15
            }),
          },
        },
        responses: {
          // here we declare the response types
          200: {
            description: "",
            schema: {
              type: "object",
              description: "Response",
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
        tags: ["Products"],
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
