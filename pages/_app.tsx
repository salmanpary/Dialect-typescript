import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <main className={`${manrope.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
