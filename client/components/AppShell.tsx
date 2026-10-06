"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import api from "@/lib/axios";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const [isCheckingAuth, setIsCheckingAuth] = useState(!isAuthPage);

  useEffect(() => {
    if (isAuthPage) {
      setIsCheckingAuth(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    api.get("/auth/me")
      .catch(() => {
        localStorage.removeItem("token");
        router.replace("/login");
      })
      .finally(() => setIsCheckingAuth(false));
  }, [isAuthPage, router]);

  if (isAuthPage) {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  if (isCheckingAuth) return null;

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