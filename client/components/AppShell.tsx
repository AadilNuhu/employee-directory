"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav && <SideNav onClose={() => setShowNav(false)} />}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Nav menuClick={() => setShowNav(true)} />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </>
  );
}