import "@/styles/globals.css";
import { GlobalStyles } from "twin.macro";
import "../src/styles/styles.css";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
