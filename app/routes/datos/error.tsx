import type { Route } from "../../../.react-router/types/app/routes/datos/+types/CServ.ts";
import manolo from "./manolo.jpg";
import { useActionData } from "react-router";

export default function Tomas() {
  const resultadoAccion = useActionData();
  return (
    <>
      <h1>
        <p>ha habido un error en la carga de datos. </p>
        <p>seguro que lo has puesto todo bien</p>
        <p>
          mientras te entran ganas de revisar el código, mira una foto de manolo
          de sietas
        </p>
      </h1>
      <img src={manolo} alt="manolo echando una siesta" />

      {resultadoAccion?.success && (
        <p>Nombre actualizado a: {resultadoAccion.updatedName}</p>
      )}
    </>
  );
}
