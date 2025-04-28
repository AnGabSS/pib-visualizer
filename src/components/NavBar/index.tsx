import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); // Hook que pega o path atual corretamente

  const actualPath = pathname === "/"
  ? "home"
  : pathname === "/table"
  ? "table"
  : "";


  return (
    <nav className="px-12 flex justify-start gap-4 items-center">
      <Link
        href="/"
        className={`hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl ${actualPath == "home" && "underline underline-offset-8 decoration-orange-500"}`}
      >
        Gráficos
      </Link>
      <Link
        href="/table"
        className={`hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl ${actualPath == "table" && "underline underline-offset-8 decoration-orange-500"}`}
      >
        Tabela
      </Link>
    </nav>
  );
};

export default NavBar;
