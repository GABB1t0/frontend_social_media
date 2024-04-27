type Props = { 
    status: number, 
    statusText: string
}

export const actionsForErrors = ({status, statusText}:Props) => {

    console.log(status)

    if(status == 404){
        alert('Ha ocurrido un error');
        //throw {statusText: "Not Found",  status: 404 };
    }

    if(status == 403){

    }
    
    if(status == 401){
        window.location.href = '/login';
    }
    
    if(status == 500){
        alert('Estamos presentando problemas, por favor intente mas tarde');
        //throw { statusText: "error server",  status: 500 };
    }

}