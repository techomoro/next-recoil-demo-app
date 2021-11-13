import "../styles/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
