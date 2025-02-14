import { Outlet } from "react-router";

export default function Nieta() {
  return (
    <>
      <div style={{ background: "orange" }}>
        <h1>pagina wesss nieta de la abuela</h1>

        <Outlet />
      </div>
    </>
  );
}
