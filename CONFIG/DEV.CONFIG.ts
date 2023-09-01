import { coerce, z, number, string } from "zod";

const DEV = {
    PUBLIC_KEY: 'PUBLIC_KEY',
    PORT: 'PORT',
    S: 'S'
} as const;

const DevEnvConfig = {
    [DEV.PUBLIC_KEY]: string(),
    [DEV.PORT]: coerce.number(),
    [DEV.S]: coerce.boolean().default(false)
} as const;

type DevEnvType = typeof DEV[keyof typeof DEV];

export function Env<TData extends DevEnvType, TRes = z.infer<typeof DevEnvConfig[TData]>>(val: TData){
    return DevEnvConfig[val].parse(process.env[val]) as TRes
}

