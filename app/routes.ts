import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  //index("routes/home.tsx"),
  route("tomas", "routes/tomas.tsx"),
  route("error", "routes/datos/error.tsx"),
  route("post/:id", "routes/datos/post.tsx"),

  //
  route("cserv/:name", "routes/datos/CServ.tsx"),
  route("cclient/:name", "routes/datos/CClient.tsx"),
  route("actserv/:name", "routes/datos/ActionServer.tsx"),
  route("actclient/:name", "routes/datos/ActionsClient.tsx"),
  route("submit/:name", "routes/datos/Submit.tsx"),
  route("fetcher/:name", "routes/datos/fetcher.tsx"),
  route("act/:id", "routes/datos/act.tsx"),

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
