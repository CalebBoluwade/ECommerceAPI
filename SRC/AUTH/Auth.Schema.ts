import { TypeOf, array, object, string } from "zod";

const x: Record<string, number> = { f: 1 };

export const AuthRequestShema = object({
  email: string().email(),
  interests: array(string()),
  fullName: string().nonempty(),
  password: string()
});

export type ValidateAuthRequest = TypeOf<typeof AuthRequestShema>