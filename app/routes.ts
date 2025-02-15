import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  //index("routes/home.tsx"),
  route("tomas", "routes/datos/tomas.tsx"),
  route("post/:id", "routes/datos/post.tsx"),
  route("pokemons/:name", "routes/datos/Pokemons.tsx"),

  //ejemplo usando un prefijo. LO comento porque entonces no tiran los enlaces internos
  //debajo está el mismo ejemplo, sin el prefijo
  // layout("routes/anidados/Info.tsx", [
  //   index("routes/anidados/home.tsx"),
  //   ...prefix("manolo", [
  //     route("barra", "routes/anidados/Dashboard.tsx", [
  //       route("nieta", "routes/anidados/Nieta.tsx"),
  //     ]),
  //     route("cuartos", "routes/anidados/Finanzas.tsx"),
  //   ]),
  // ]),

  layout("routes/anidados/Info.tsx", [
    index("routes/anidados/home.tsx"),
    route("barra", "routes/anidados/Dashboard.tsx", [
      route("nieta", "routes/anidados/Nieta.tsx"),
    ]),
    route("cuartos", "routes/anidados/Finanzas.tsx"),
  ]),
] satisfies RouteConfig;
