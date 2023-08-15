const orderStatus = {
  new: "NEW",
  pp: "payment - processing",
  pd: "payment - declined",
  d: "delivered",
} as const;

type Order = (typeof orderStatus)[keyof typeof orderStatus];
