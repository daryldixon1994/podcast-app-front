import "@/styles/globals.css";
import { GlobalStyles } from "twin.macro";
import "../src/styles/styles.css";
import "semantic-ui-css/semantic.min.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <GlobalStyles />
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
