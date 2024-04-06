import { TypeWithKey } from "../models/type-with-key"

export const getValidationError = (errorCode: any,errorStatus:number) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Se rompio la red",
        ERR_BAD_REQUEST: `Request failed with status code ${errorStatus}`
    }
    return codeMatcher[errorCode]
}