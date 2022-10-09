import Link from "next/link";
import { cssClass } from "../lib/lib";
import Logo from "./logo";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const nav_list: {
  name: string;
  url: string;
}[] = [
  { name: "Home", url: "/#home" },
  { name: "Skills", url: "/#skills" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/#contact" },
];

const NavBar = () => {
  const [nav_opened, setNavOpened] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scroll_value, setScrollValue] = useState<number>(0);
  useEffect(() => {
    scrollYProgress.onChange((e) => {
      setScrollValue(scrollYProgress.get());
      return scrollYProgress.clearListeners;
    });
  }, []);
  return (
    <>
      <nav
        className={cssClass(
          styles.nav,
          scroll_value > 0.04 ? styles.shown : ""
        )}
      >
        <ul>
          <li style={{ display: "flex" }}>
            <Logo />
          </li>
          {nav_list.map((i) => (
            <li key={i.name} className={styles.li_res}>
              <Link href={i.url}>
                <a tabIndex={nav_opened ? 0 : -1}>{i.name}</a>
              </Link>
            </li>
          ))}
          <li
            className={styles.nav_opener}
            tabIndex={0}
            onClick={() => setNavOpened((n) => !n)}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              ></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div
        className={cssClass(
          styles.fake_nav,
          nav_opened ? styles.fake_nav_o : ""
        )}
      >
        <nav aria-hidden={!nav_opened}>
          <ul>
            {nav_list.map((i) => (
              <li key={i.name}>
                <Link href={i.url}>
                  <a>{i.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
