import { Request, Response } from "express";
import { v4 } from "uuid";
import { ProductTypeEnum } from "../../TYPES/CustomerOrder";
// @Route("Products")

interface ProductType {
  productype: string;
}

interface ProductObj {
  id: string;
  quantity: number;
}

export class Product implements ProductType {
  productype: string;
  private quantity: number = 0;
  private readonly id = v4();

  constructor(type: ProductTypeEnum) {
    // console.log(`Product Id: ${this.id}`);
    this.productype = type;
  }

  // @successResponse('200')
  async GetProductByID(): Promise<ProductObj> {
    // @successResponse
    // @Post
    // console.log()
    return Promise.resolve({ id: this.id, type: this.productype, quantity: this.quantity });
  }
}

function successResponse(respCode: string) {
  return function (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value = function (...args: any[]) {};
  };
}