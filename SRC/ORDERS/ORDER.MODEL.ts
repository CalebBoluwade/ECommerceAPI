import mongoose, { Schema, Document } from "mongoose";
import { ValidateOrderRequest } from "./ORDER.SCHEMA";
import { OrderStatusEnum } from "../../TYPES/CustomerOrder";

export interface IOrderModel extends ValidateOrderRequest, Document {
  // sendBinNotifications(phoneNumber: string, email: string): Promise<void>;
}

const OrderStatus: Array<OrderStatusEnum> = [
  "NEW",
  "delivered",
  "payment - declined",
];

const orderSchema = new Schema({
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  shippingAddress: {
    type: Object,
    required: true,
  },
  customer: {
    type: Object,
    required: true,
    ref: "Customer",
  },
  vendor: {
    // type: Object,
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Vendor",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
    enum: OrderStatus,
  },
  paymentInfo: {
    id: {
      type: String,
    },
    status: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  paidAt: {
    type: Date,
    default: Date.now(),
  },
  deliveredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model<IOrderModel>("Order", orderSchema);
