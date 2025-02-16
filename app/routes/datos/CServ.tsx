import type { Route } from "../../../.react-router/types/app/routes/datos/+types/CServ.ts";
import type { Pokemon } from "../../types/interfaces";
import { useLoaderData, redirect } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  //estas funciones hay que exportarlas, porque las llama el componente desde dentro,
  // y si no las exportamos, no las encuentra
  console.log(params.name?.toLowerCase());
  try {
    const res: Response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name?.toLowerCase()}`
    );

    const pokemon: Pokemon = await res.json();

    if (!res.ok) throw new Response(`Not Found   `, { status: 404 });
    return pokemon;
  } catch (error) {
    return redirect("/error");
  }
}

export default function CServ() {
  const carga: Pokemon | null = useLoaderData();
  return (
    <>
      <h1>
        Ejemplo de carga de datos en servidor
        <p>cargamos el componente: {carga?.name}</p>
        <p>
          <b>fijate que llamamos a useLoaderData()</b>
        </p>
      </h1>
      {/* Si nos fijamos aqui, para obtener los datos, el componente, llama a la funcion loaderData (importada de react-router), 
      que es la que se encarga de obtener los datos de la ruta, en este caso, el id del post.
      
      y como lo hace, llamando a la función loader que hemos definido nosotros. Actua igual que el estado o los props,
      osea, llamando a un elemento de la libreria que termina llamando a una función que hemos definido nosotros,
      PEEEEEERO, no llamamos directamtene a la función nosotros*/}
      <img src={carga?.sprites.front_default ?? ""} alt={carga?.name} />
    </>
  );
}
