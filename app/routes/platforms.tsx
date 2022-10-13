import { Outlet } from "@remix-run/react";

export default function PlatformsRoute() {
  return (
    <div>
      <h1>Platforms</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
