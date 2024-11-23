"use client";

import { logout } from "../login/actions";

export default function Dashboard() {
  return (
    <main className="h-screen w-screen p-2 text-center">
      <h1 className="text-2xl">Dashboard page</h1>
      <button onClick={() => logout()}  className="btn px-2 py-1 bg-white text-black rounded-lg mt-3">Logout</button>
    </main>
  );
}
