import { v4 as uuidv4, validate } from "uuid";
import crpyto from "crypto";
import pino from "pino";
// import path from "path";
import jwt from "jsonwebtoken";

const signAccessJWT = (id: string, payload: any) => {
  return jwt.sign(
    { userID: id, data: payload },
    String(process.env.publicKey),
    {
      expiresIn: process.env.JWT_TIMEOUT,
    }
  );
};

const signRefreshJWT = (id: string, payload: any) => {
  return jwt.sign(
    { userID: id, data: payload },
    String(process.env.privateKey),
    {
      expiresIn: process.env.JWT_TIMEOUT,
    }
  );
};

const verifyJWT = (token: string, type: "access" | "refresh") => {
  try {
    const decoded = jwt.verify(
      token,
      String(type === "access" ? process.env.publicKey : process.env.privateKey)
    );
    return {
      valid: true,
      expired: false,
      decoded: decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};

const CurrencyFormatter = (
  Amount: string,
  Code: string,
  locale: string = "en-NG"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: Code,
    minimumSignificantDigits: 2,
  }).format(Number(Amount));
};

const GenerateOTP = () => {
  // Generate a 6-digit random number
  const OTP = String(Math.floor(100000 + Math.random() * 987654));
  // Set the expiration time for the OTP to 5 minutes from now
  const expiresIn = 60 * 60 * 1000; //  1 Hour in milliseconds
  const expirationTime = Date.now() + expiresIn;

  // Return the OTP and expiration time
  return { OTP: OTP, expiresIn: expiresIn, expirationTime: expirationTime };
};

export default GenerateOTP;

const GenerateOrderRef = (): string => {
  const prefix = "NT";
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const uniquePart = `${year}${month}${day}`;
  const randomString = Math.random().toString(36).substring(2, 6);
  const orderReference = prefix + uniquePart + randomString.toUpperCase();

  return orderReference;
};

const Logger = pino()

export const UTILS = {
  Logger,
  GetUUID: uuidv4,
  ValidateUUID: validate,
  signAccessJWT,
  signRefreshJWT,
  verifyJWT,
  CurrencyFormatter,
  GenerateOTP,
  GenerateOrderRef,
};
