import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true, //para renderización en el cliente, poner a false

  //para activar el prerender, descomentar estas lineas.
  //simplemente le decimos qué rutas queremos que pre-renderice-->
  // async prerender() {
  //   return ["/", "/tomas", "/barra"];
  //},
} satisfies Config;
