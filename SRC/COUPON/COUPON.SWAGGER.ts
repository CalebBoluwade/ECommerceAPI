import { OpenApi, Types, textPlain } from "ts-openapi";
// import { APIResponse } from "../../HELPERS/SWAGGER.HELPER";

const errorSchema = Types.Object({
    description: "Error description",
    properties: {
        message: Types.String({ description: "Error message" }),
        code: Types.Integer({ description: "Error code" }),
    },
    example: { message: "Bad request", code: 400 }
});

export const APIResponse =  Types.Object({ 
    modelName: "API Response Schema",    
    properties: {
      message: Types.String({
        description: "Response message",
      }),
      results: Types.Integer({
        description: "number",
      }),
      data: Types.Array({
        description: "",
        arrayType: Types.String({})
      }),
    },
    example: { message: "Successful", results: 200, data: [] },
  })

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
          200: openApiInstance.declareSchema("s", APIResponse),
          400: openApiInstance.declareSchema("Bad Request", errorSchema),
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
        security: [{bearerSecurity: []}],
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
          400: {
            description: "Bad operation.",
            content: { "text-plain": {
            //     schema: {
            //     // status: Types.String({})
            // }
        } },  // mimetype with empty schema
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
        security: [{bearerSecurity: []}],
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
