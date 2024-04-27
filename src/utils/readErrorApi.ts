export const readError = (error) => {
    if(error.code === 'ERR_CANCELED') console.log(error.message);
    if(error.code === 'ECONNABORTED') return { status: 500, statusText:'El servidor ha tardado mucho en responder'}; 
    if(error.status === 422) return error.response;
    return { status: error?.request.status, statusText: error?.request.statusText };
}