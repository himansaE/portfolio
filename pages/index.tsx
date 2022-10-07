import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useScroll } from "framer-motion";

import Projects from "../components/projects";
import Contact from "../components/Contact";
import HomeComponent from "../components/home";
import Services from "../components/services";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const [scroll_value, setScrollValue] = useState<number>(0);
  useEffect(() => {
    scrollYProgress.onChange((e) => {
      setScrollValue(scrollYProgress.get());
      return scrollYProgress.clearListeners;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Himansa Eshan</title>
        <meta name="description" content="Himansa Eshan | Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section id="home" className={styles.home}>
          <HomeComponent scroll_value={scroll_value} />
        </section>
        <section id="skills">
          <h1 className={styles.heading}>What I do</h1>
          <Services />
        </section>
        <section id="projects" className={styles.projects}>
          <h1 className={styles.heading}>My Projects</h1>
          <Projects />
        </section>
        <section id="contact">
          <h1 className={styles.heading}>Get in touch with Me</h1>
          <Contact />
        </section>
      </main>
      <footer className={styles.footer}>Made with &#10084; by Himansa</footer>
    </>
  );
};

export default Home;
