import { TypeWithKey } from "../models/type-with-key"

export const getValidationError = (errorCode: any,errorStatus:number) => {
    // const codeMatcher: TypeWithKey<string> = {
    //     Your email address is not verified: "Se rompio la red",
    //     ERR_BAD_RESPONSE:"ocurrio un error en el servidor",
    //     ERR_BAD_REQUEST: `Request failed with status code ${errorStatus}`
    // }
    return codeMatcher[errorCode]
}