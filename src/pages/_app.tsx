import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Dancing_Script } from 'next/font/google';

const cedarville = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cedarville.className}>
      <Component {...pageProps} />
    </div>
  );
}
