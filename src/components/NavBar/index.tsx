import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  //Get the actual path, and verify if it is the home (charts page) or table page
  //Obtenha o caminho atual e verifique se é a página inicial (gráficos) ou a página de tabela
  const actualPath =
    pathname === "/" ? "home" : pathname === "/table" ? "table" : "";

  return (
    <nav className="px-12 py-2 flex justify-start gap-4 items-center">
      <Link
        href="/"
        className={`hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-sm ${
          actualPath == "home" &&
          "underline underline-offset-8 decoration-orange-500"
        }`}
      >
        Gráficos
      </Link>
      <Link
        href="/table"
        className={`hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl ${
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
