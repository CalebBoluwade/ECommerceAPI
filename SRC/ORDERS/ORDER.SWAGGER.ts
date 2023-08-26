import { OpenApi, Types, textPlain } from "ts-openapi";

export const OrderSwaggerDocs = (openApiInstance: OpenApi) => {
  openApiInstance.addPath(
    "/Order/:userId/create",
    {
      post: {
        description: "",
        summary: "Place Store Order API", // Method summary
        operationId: "placeOrder",
        requestSchema: {
          headers: {
            // Authorization: "string"
          },
          params: {
            userId: Types.String({
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
        tags: ["Orders"],
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
    "/Order/customer/:userId?limit=limit",
    {
      get: {
        description: "",
        summary: "List Customer's Orders API", // Method summary
        operationId: "customerOrders",
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
              description: "The Number of Order items returned",
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
        tags: ["Orders"],
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
    "/Order/vendor/:vendorId?limit=limit",
    {
      get: {
        description: "",
        summary: "List Vendor's Orders API", // Method summary
        operationId: "vendorOrders",
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
              description: "The Number of Order items returned",
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
        tags: ["Orders"],
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
