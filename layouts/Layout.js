import React from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Codv Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        ></link>
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
