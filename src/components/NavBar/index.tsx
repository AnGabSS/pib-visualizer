import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props{
  links: {label: string, href: string}[]
}

const NavBar = ({links}: Props) => {
  const pathname = usePathname();

  return (
    <nav className="px-12 py-2 flex justify-start gap-4 items-center">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-emerald-500 hover:bg-orange-500/10 p-2 rounded-xl ${
              isActive && "underline underline-offset-8 decoration-orange-500"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
