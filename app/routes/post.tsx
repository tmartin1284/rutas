import type { Route } from "./+types/post";
import manolo from "./manolo2.jpg";

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;
  return { id };
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>pagina web de tomas</h1>
      <p>cargamos el componente: {loaderData.id}</p>
      <img src={manolo} alt="manolo echando una siesta" />
    </>
  );
}
