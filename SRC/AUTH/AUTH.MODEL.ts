import mongoose, { Document, Schema } from "mongoose";
import argo2 from "argon2";
import { ValidateAuthRequest } from "./AUTH.SCHEMA";

export interface IUserModel extends ValidateAuthRequest, Document {
  createdAt: Date;
  updatedAt: Date;
  validatePassword(inputPassword: string): Promise<Boolean>;
}

const userSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    refCode: {
      type: String,
      required: false,
    },
    refCodeCount: {
      required: false,
      type: Number,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    verificationCode: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashedPassword = await argo2.hash(this.password, {
      secret: Buffer.from(process.env.NODE_ENV!),
    });
    this.password = hashedPassword;
    next();
  }
});

userSchema.methods.updatePassword = async function (
  inputPassword: string
): Promise<boolean> {
  const user = this as IUserModel;

  return await argo2
    .verify(user.password, inputPassword)
    .then(async () => {
      const hashedPassword = await argo2.hash(inputPassword, {
        secret: Buffer.from(process.env.NODE_ENV!),
      });
      this.password = hashedPassword;
     const sp = await user.save()

      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

userSchema.methods.validatePassword = async function (
  inputPassword: string
): Promise<boolean> {
  const user = this as IUserModel;

  // return true;
  return await argo2.verify(user.password, inputPassword).catch((e) => {
    console.log(e);
    return false;
  });
};
