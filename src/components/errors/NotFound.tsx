import { useRouteError } from "react-router-dom"

type PropsError = { statusText:string, status:number}

const NotFound = () => {
  const error = useRouteError() as PropsError;
  return (
    <div>
      Hello
      <h1>Oops!</h1>
      <h2>{error?.status}</h2>
      <p>{error?.statusText}</p>
    </div>
  );
}

export default NotFound