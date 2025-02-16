import type { Route } from "./+types/CServ.js";
import manolo from "./manolo.jpg";
import { redirect, useActionData, useLoaderData } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  //estas funciones hay que exportarlas, porque las llama el componente desde dentro,
  // y si no las exportamos, no las encuentra

  try {
    //actualizamos con el dato que se le ha pasado, que está en params.name

    return { name: params.name };
  } catch (error) {
    return redirect("/error");
  }
}

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name: string = formData.get("name")?.toString() ?? "";

//   console.log("Nuevo Nombre:", name);

//   return { success: true, updatedName: name };
// }

export default function Act({ loaderData }: Route.ComponentProps) {
  const datos = useLoaderData();
  // const resultadoAccion = useActionData();
  return (
    <>
      <h1>pagina web de tomas</h1>
      <h1> Datos actualizados correctamente {datos.name}</h1>
    </>
  );
}
