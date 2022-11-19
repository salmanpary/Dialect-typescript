import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable:"--font-manrope",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
