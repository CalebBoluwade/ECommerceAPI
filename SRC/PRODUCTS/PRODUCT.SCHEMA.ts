import { array, number, object, string, TypeOf } from "zod";

export const CreateProductRequestSchema = object({
  // prId: string().uuid(),
  name: string().max(25).nonempty(),
  description: string().min(15).max(100).nonempty(),
  price: number(),
  stock: number(),
  varients: object({
    color: array(string()),
    size: array(string()),
  }),
  tags: array(string()),
});

export type ValidateCreateProductRequest = TypeOf<
  typeof CreateProductRequestSchema
>;
