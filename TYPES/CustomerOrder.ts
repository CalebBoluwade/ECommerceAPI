const orderStatus = {
  new: "NEW",
  pp: "payment - processing",
  pd: "payment - declined",
  d: "delivered",
} as const;

const ProductTypes = {
  Bags: "Bags",
  Shoes: "Shoes"
} as const

export type OrderStatusEnum = (typeof orderStatus)[keyof typeof orderStatus];
export type ProductTypeEnum = (typeof ProductTypes)[keyof typeof ProductTypes];

// export const OrdStatusEnum =  new Array(orderStatus);
