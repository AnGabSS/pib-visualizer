import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const links = [
  { label: "Gráficos", href: "/" },
  { label: "Tabela", href: "/table" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fredoka.className}>
      {/* 
        Display the NavBar component in the top of the every pages
        Exibe o NavBar no topo de todas páginas 
      */}
      <NavBar links={links}/>
      <Component {...pageProps} />
    </main>
  );
}
