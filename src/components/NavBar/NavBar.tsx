import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [actualPath, setActualPath] = useState<string>("/");

  useEffect(() => {
    setActualPath(window.location.pathname);
  }, []);

  return (
    <nav className="px-12 flex justify-start gap-4 items-center">
      <Link
        href="/"
        className="hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl"
      >
        Gráficos
      </Link>
      <Link
        href="/table"
        className="hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl"
      >
        Tabela
      </Link>
    </nav>
  );
};

export default NavBar;
