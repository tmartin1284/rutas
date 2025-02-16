import type { Route } from "../../../.react-router/types/app/routes/anidados/+types/home.ts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 style={{ background: "pink" }}>pagina wesss de tomas</h1>
    </>
  );
}
