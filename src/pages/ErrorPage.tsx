import { FC } from "react";
import { useRouteError } from "react-router-dom";

 const ErrorPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Ой!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}
export default ErrorPage