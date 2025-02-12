import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  //index("routes/home.tsx"),
  route("tomas", "routes/tomas.tsx"),
  // route("post/:id", "routes/post.tsx"),
  //   route("info", "routes/Info.tsx", [
  //     route("barra", "routes/Dashboard.tsx", [
  //       route("nieta", "routes/Nieta.tsx"),
  //     ]),
  //     route("cuartos", "routes/Finanzas.tsx"),
  //   ]),

  //     layout("routes/Dashboard.tsx", [
  //       route("vacineo", "routes/Info.tsx"),
  //       route("monises", "routes/Finanzas.tsx"),
  //     ]),

  layout("routes/Info.tsx", [
    index("routes/home.tsx"),
    route("barra", "routes/Dashboard.tsx", [
      route("nieta", "routes/Nieta.tsx"),
    ]),
    route("cuartos", "routes/Finanzas.tsx"),
  ]),
] satisfies RouteConfig;
