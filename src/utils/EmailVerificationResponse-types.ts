import * as z from "zod";


export const WelcomeHeadersSchema = z.object({
    "cache-control": z.string(),
    "content-type": z.string(),
});
export type WelcomeHeaders = z.infer<typeof WelcomeHeadersSchema>;

export const DataSchema = z.object({
    "message": z.string(),
});
export type Data = z.infer<typeof DataSchema>;

export const TransitionalSchema = z.object({
    "silentJSONParsing": z.boolean(),
    "forcedJSONParsing": z.boolean(),
    "clarifyTimeoutError": z.boolean(),
});
export type Transitional = z.infer<typeof TransitionalSchema>;

export const ConfigHeadersSchema = z.object({
    "Accept": z.string(),
    "Authorization": z.string(),
});
export type ConfigHeaders = z.infer<typeof ConfigHeadersSchema>;

export const RequestSchema = z.object({
});
export type Request = z.infer<typeof RequestSchema>;

export const ConfigSchema = z.object({
    "transitional": TransitionalSchema,
    "adapter": z.array(z.string()),
    "transformRequest": z.array(z.null()),
    "transformResponse": z.array(z.null()),
    "timeout": z.number(),
    "xsrfCookieName": z.string(),
    "xsrfHeaderName": z.string(),
    "maxContentLength": z.number(),
    "maxBodyLength": z.number(),
    "env": RequestSchema,
    "headers": ConfigHeadersSchema,
    "baseURL": z.string(),
    "method": z.string(),
    "url": z.string(),
});
export type Config = z.infer<typeof ConfigSchema>;

export const WelcomeSchema = z.object({
    "data": DataSchema,
    "status": z.number(),
    "statusText": z.string(),
    "headers": WelcomeHeadersSchema,
    "config": ConfigSchema,
    "request": RequestSchema,
});
export type Welcome = z.infer<typeof WelcomeSchema>;