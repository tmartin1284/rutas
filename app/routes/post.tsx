import { Form } from "react-router";
import type { Route } from "./+types/post";
import manolo from "./manolo2.jpg";
import { useSubmit, useFetcher } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  // de aqui sacamos el parametro que se le ha pasado a la ruta
  const id = params.id;
  return { id };
}

export async function action({ request }: Route.ActionArgs) {
  //OJO. Usamos actionArgs, porque estamos en el servidor.
  // si queremos que se cargue en el cliente, usamos clientActionArgs
  //cosass
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>pagina web de tomas</h1>
      <p>cargamos el componente: {loaderData.id}</p>
      {/* Si nos fijamos aqui, para obtener los datos, el componente, llama a la funcion loaderData (importada de react-router), 
      que es la que se encarga de obtener los datos de la ruta, en este caso, el id del post.
      
      y como lo hace, llamando a la función loader que hemos definido nosotros. Actua igual que el estado o los props,
      osea, llamando a un elemento de la libreria que termina llamando a una función que hemos definido nosotros,
      PEEEEEERO, no llamamos directamtene a la función nosotros*/}
      <img src={manolo} alt="manolo echando una siesta" />
      <Form method="post">
        <button type="submit">Update</button>

        {/* /* la acción de este botón, se va a realizar
        en la función action, que hemos definido justo encima.
        Pero no la llamamos directamente, si no que lo hacemos a través de las funcionalidades de React */}
      </Form>
    </>
  );
}
