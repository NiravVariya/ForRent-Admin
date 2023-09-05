import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "@/components/rtl-provider.js";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Header from "../components/layout/Header";
import Footer from "@/components/layout/Footer/Index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  
  const router = useRouter();
  const header = ["/login", "/register"].includes(router.pathname);
  return (
    <ChakraProvider>
      <RtlProvider>
        <Provider store={store}>
          {!header && <Header />}
          <Component {...pageProps} />
          {!header && <Footer />}
        </Provider>
      </RtlProvider>
    </ChakraProvider>
  );
}
