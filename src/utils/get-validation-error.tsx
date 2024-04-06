import { TypeWithKey } from "../models/type-with-key"

export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Se rompio la red",
        ERR_BAD_REQUEST: "Request failed with status code 404"
    }
    return codeMatcher[errorCode]
}