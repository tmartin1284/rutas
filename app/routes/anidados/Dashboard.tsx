import { Outlet, NavLink } from "react-router";

export default function Dashboard() {
  return (
    <>
      <div style={{ background: "green" }}>
        <h1>dasboardddd</h1>

        <Outlet />
      </div>
    </>
  );
}
