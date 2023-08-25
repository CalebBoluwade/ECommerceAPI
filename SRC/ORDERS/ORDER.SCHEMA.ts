import { array, number, object, string, TypeOf } from "zod";

export const OrderRequestSchema = object({
  cartId: string().uuid(),
  cartItems: array(
    object({
      productId: string(),
      quantity: number(),
    })
  ),
  shippingAddress: object({
    description: string().nonempty(),
    latitude: number().optional(),
    longitude: number().optional(),
  }),
});

export type ValidateOrderRequest = TypeOf<typeof OrderRequestSchema>
