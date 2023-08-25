const orderStatus = {
  new: "NEW",
  pp: "payment - processing",
  pd: "payment - declined",
  d: "delivered",
} as const;

export type OrderStatusEnum = (typeof orderStatus)[keyof typeof orderStatus];

// export const OrdStatusEnum =  new Array(orderStatus);
