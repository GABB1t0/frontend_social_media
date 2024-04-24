export const readError = (error) => {
    if(error.status === 422) return error.response;
    if(error.code === 'ECONNABORTED') return { status: 500, statusText:'El servidor ha tardado mucho en responder'}; 
    return { status: error?.request.status, statusText: error?.request.statusText };
}