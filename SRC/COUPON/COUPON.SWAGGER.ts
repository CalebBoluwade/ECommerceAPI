import { OpenApi, Types, textPlain } from "ts-openapi";

export const CouponSwaggerDocs = (openApiInstance: OpenApi) => {
  openApiInstance.addPath(
    "/Coupon/:vendorId/activate",
    {
      post: {
        description: "",
        summary: "Vendor Coupon Creation API", // Method summary
        operationId: "CouponCreate",
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
        tags: ["Coupons"],
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
    "/Coupon/:vendorId/deactivate",
    {
      put: {
        description: "",
        summary: "Vendor Coupon DEACTIVATE API", // Method summary
        operationId: "CouponL",
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
        tags: ["Coupons"],
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
    "/Coupon/validate/:coupon",
    {
      get: {
        description: "Customer Coupon",
        summary: "Validate Customer Coupon", // Method summary
        operationId: "validateCoupon",
        requestSchema: {
          headers: {
            // Authorization: "string"
          },
          params: {
            coupon: Types.String({
              required: true,
              description: "Customer's ID",
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
        tags: ["Coupons"],
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
