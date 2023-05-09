import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Axios from 'axios'
import { AuthProvider } from '../context/auth';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;

  const { pathname } = useRouter();
  // const authRoutes = ["/register", "/login", "/saves/loadSample/sample1", "/saves/loadSample/sample2", "/saves/loadSample/sample3", "/saves/loadSample/sample4", "/saves/loadSample/sample5", "/saves/loadSample/sample6", "/saves/loadSample/sample7", "/saves/loadSample/sample8", "/saves/loadSample/sample9", "/saves/loadSample/sample10"];

  const authRoutes = [
    "/register",
    "/login",
    "/saves/loadSample/sample1",
    "/saves/loadSample/sample2",
    "/saves/loadSample/sample3",
    "/saves/loadSample/sample4",
    "/saves/loadSample/sample5",
    "/saves/loadSample/sample6",
    "/saves/loadSample/sample7",
    "/saves/loadSample/sample8",
    "/saves/loadSample/sample9",
    "/saves/loadSample/sample10",
    "/saves/loadQuestions/*"
  ];

  const authRoute = authRoutes.includes(pathname);

  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error: any) {
      throw error.response.data
    }
  }

  return <>
    <Head>
      <script defer src="https://use.fontawesome.com/releases/v6.1.1/js/all.js" integrity="sha384-xBXmu0dk1bEoiwd71wOonQLyH+VpgR1XcDH3rtxrLww5ajNTuMvBdL5SOiFZnNdp" crossOrigin="anonymous"></script>
    </Head>
    <SWRConfig
      value={{
        fetcher
      }}
    >

      <AuthProvider>

        {!authRoute && <NavBar />}
        <div className={authRoute ? "" : "min-h-screen"}>
          <Component {...pageProps} />
          {!authRoute && <Footer />}

        </div>

      </AuthProvider>
    </SWRConfig>
  </>
}

export default MyApp
