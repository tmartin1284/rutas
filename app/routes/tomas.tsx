import type { Route } from "../../.react-router/types/app/routes/datos/+types/CServ.ts";
import manolo from "./manolo.jpg";
import { useActionData } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name: string = formData.get("name")?.toString() ?? "";

  console.log("Nuevo Nombre:", name);

  return { success: true, updatedName: name + "tomas" };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Tomas() {
  const resultadoAccion = useActionData();
  return (
    <>
      <h1>pagina web de tomas</h1>
      <img src={manolo} alt="manolo echando una siesta" />

      {resultadoAccion?.success && (
        <p>Nombre actualizado a: {resultadoAccion.updatedName}</p>
      )}
    </>
  );
}
