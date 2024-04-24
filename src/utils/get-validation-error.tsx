import { readError } from "./readErrorApi"

export const getValidationError = (error) => {
    const customError = readError(error);
    return customError;
}