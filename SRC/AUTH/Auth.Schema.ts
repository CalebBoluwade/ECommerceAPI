import { array, object, string } from "zod";

const x: Record<string, number> = { f: 1 };

const A = object({
  interests: array(string()),
});
