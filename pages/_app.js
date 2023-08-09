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
          content=" Unlock the Path to Financial Prosperity with Robert Allen Miller, a seasoned Financial Adviser an investment broker. Allow Robert guide you through the complexities of the financial world, tailoring strategies to your unique goals.
          working with Robert will change your finanical life toward complete financial freedom.
           "
        />

        <meta name="robots" content="index" />
        <meta name="robots" content="index" />
        <meta name="keywords" content="Robert Allen Miller" />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        {/* <link rel="icon" sizes="16x16" href="/favicon (2).ico" /> */}

        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        ></link>

        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}

        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        <title>Robert Alen M</title>
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
