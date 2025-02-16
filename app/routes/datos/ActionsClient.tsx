import type { Route } from "./+types/CServ.js";
import type { Pokemon } from "../../types/interfaces.js";
import { useLoaderData, Form, useActionData } from "react-router";
import { useSubmit, useFetcher, redirect } from "react-router";

export async function clientLoader({ params }: Route.LoaderArgs) {
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
    return redirect("/tomas");
  }
}

export async function clientAction({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name: string = formData.get("name")?.toString() ?? "";

  console.log("Nuevo Nombre:", name);

  return { success: true, updatedName: name };

  //Todo lo que viene ahora sería el procesamiento de los datos, pero no lo vamos a hacer,
  //más que nada porque no hay nadie escuchando "en el otro lado", pero se haría asi

  // const res = await fetch(`/api/projects/${formData.get("projectId")}`, {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ title }),
  // });

  // if (!res.ok) {
  //   return { success: false, message: "Failed to update project." };
  // }

  return { success: true, updatedName: name };
}

export default function ActionsClient({ loaderData }: Route.ComponentProps) {
  const carga: Pokemon | null = useLoaderData();
  const resultadoAccion = useActionData();

  const submit = useSubmit();
  const handleClick = () => {
    submit({ name: "Juan" }, { method: "post", action: "/submit" });
  };
  const fetcher = useFetcher();
  return (
    <>
      <h1>pagina web de tomás</h1>
      <p>cargamos el componente: {carga?.name}</p>
      {/* Si nos fijamos aqui, para obtener los datos, el componente, llama a la funcion loaderData (importada de react-router), 
      que es la que se encarga de obtener los datos de la ruta, en este caso, el id del post.
      
      y como lo hace, llamando a la función loader que hemos definido nosotros. Actua igual que el estado o los props,
      osea, llamando a un elemento de la libreria que termina llamando a una función que hemos definido nosotros,
      PEEEEEERO, no llamamos directamtene a la función nosotros*/}
      <img src={carga?.sprites.front_default ?? ""} alt={carga?.name} />
      <Form method="post" action="/tomas">
        <label>
          Nuevo Nombre:
          <input type="text" name="name" defaultValue={carga?.name} />
        </label>
        <button type="submit">Actualizar</button>
      </Form>
      {resultadoAccion?.success && (
        <p>Nombre actualizado a: {resultadoAccion.updatedName}</p>
      )}
    </>
  );
}
