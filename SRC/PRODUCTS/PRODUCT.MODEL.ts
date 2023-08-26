import { Schema, model } from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableStock: {
      type: Number,
      required: [true, "Please enter your product stock!"],
    },
    varients: {
      color: {
        type: Array,
        default: [],
      },
      sizes: {
        type: Array,
        default: [],
      },
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    tags: String,
    ratings: [
      {
        star: Number,
        default: 0,
        comment: String,
        postedby: { type: Schema.Types.ObjectId, ref: "Customer" },
      },
    ],
  },
  { timestamps: true }
);

//Export the model
export default model("Product", productSchema);
