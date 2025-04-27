import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fredoka.className}>
      <Component {...pageProps} />
    </main>
  );
}
