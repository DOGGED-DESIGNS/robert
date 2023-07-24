// pages/_app.js

import Head from "next/head";
import General from "@/hooks/context/General";

import "../styles/global.css";

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Unlock the Path to Financial Prosperity with Robert Allen Miller, a seasoned Financial Adviser an investment broker. Allow Robert guide you through the complexities of the financial world, tailoring strategies to your unique goals.
          working with Robert will change your finanical life toward complete financial freedom.
           "
        />

        <meta name="robots" content="index" />
        <meta name="robots" content="index" />
        <meta
          name="keywords"
          content="RobertAllenMiller, Robert Allen Miller ,forex, broker, crypto, financial adviser "
        />
        <meta name="keywords" content="love, relationship happiness" />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        <link rel="shortcut icon" href="/asset/img/robertshort.png" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        <title>Rober Allen Miller</title>
        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      <General>
        <Component {...pageProps} />
      </General>
    </>
  );
}

export default MyApp;
