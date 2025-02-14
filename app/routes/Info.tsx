import { Outlet, NavLink } from "react-router";

export default function Info() {
  return (
    <>
      <div style={{ background: "red" }}>
        <h1>pagina wesss de tomas. info. Power Rangers in action </h1>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Casa
          </NavLink>
          <NavLink
            to="/barra"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            barra
          </NavLink>
          <NavLink
            to="/barra/nieta"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {({ isPending }) => (
              <>Nieta {isPending && <span className="spinner">⏳</span>}</>
            )}
          </NavLink>
          <NavLink
            to="/cuartos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cuartos
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
