import type { Route } from "./+types/home";
import manolo from "./manolo.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Tomas() {
  return (
    <>
      <h1>pagina web de tomas</h1>
      <img src={manolo} alt="manolo echando una siesta" />
    </>
  );
}
