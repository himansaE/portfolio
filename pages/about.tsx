import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { cssClass } from "../lib/lib";
import styles from "../styles/about.module.css";
const About = () => {
  return (
    <>
      <main className={styles.con}>
        <Head>
          <title>About | Himansa</title>
        </Head>
        <section className={cssClass(styles.s_me, styles.section)}>
          <h1 className={styles.title}>
            Nice to have you there!
            <br />
            I’m Himansa, Web Developer based in Sri Lanka.
          </h1>
          <div className={styles.pro_pic}>
            <Image
              src={"/images/me.jpg"}
              width={250}
              height={250}
              quality={100}
              alt="Profile picture"
            />
          </div>
          <p className={cssClass(styles.text, styles.text_1)}>
            I am a Software Engineering undergraduate at SLTC Research
            University and a self-motivated web developer who mainly focuses on
            the speed and performance of the web. I can do from creating simple
            web designs to designing large-scale web projects using the latest
            technologies.
          </p>
          <h2 className={styles.s_title}>Experience as Web Developer</h2>
          <div>
            <p className={styles.text}>
              As a self-thought developer, my knowledge sources were Youtube,
              course platforms like Udemy, and books. To get to know about the
              latest technologies, I use Blogs and Twitter. Since I am a
              student, to gain experience in Web development, I did lots of
              projects by myself. Some of them are listed here. If you need more
              details, feel free to contact me.
            </p>
            <div className={styles.btn_c}>
              <Link href="/#projects">
                <a className={styles.btn}>My Projects</a>
              </Link>
            </div>
          </div>
        </section>
        <section className={cssClass(styles.s_fl, styles.section)}>
          <h1 className={styles.title}>Me as a Freelancer</h1>
          <p className={styles.text}>
            I am open to contract and freelance work opportunities in web
            development and related fields. Ready to work on platforms like
            Fiverr and Upwork. You can also contact me directly via email.
          </p>
        </section>
      </main>
      <footer className={styles.foot}>
        <div className={styles.m_icon}>
          <Link href="mailto:himansa.24067@gmail.com">
            <a>
              <svg width="3em" height="3em" viewBox="0 0 24 24">
                <path
                  fill="#f7f7f7"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <h2 className={styles.f_text}>Get in touch with me.</h2>
      </footer>
    </>
  );
};
export default About;
