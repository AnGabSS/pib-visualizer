import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); // Hook que pega o path atual corretamente

  const actualPath =
    pathname === "/" ? "home" : pathname === "/table" ? "table" : "";

  return (
    <nav className="px-12 py-2 flex justify-start gap-4 items-center bg-emerald-500 text-white">
      <Link
        href="/"
        className={`hover:text-white hover:bg-orange-400 p-2 rounded-sm ${
          actualPath == "home" &&
          "underline underline-offset-8 decoration-orange-500"
        }`}
      >
        Gráficos
      </Link>
      <Link
        href="/table"
        className={`hover:text-white hover:bg-orange-400 p-2 rounded-xl ${
          actualPath == "table" &&
          "underline underline-offset-8 decoration-orange-500"
        }`}
      >
        Tabela
      </Link>
    </nav>
  );
};

export default NavBar;
