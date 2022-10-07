import { useEffect, useState } from "react";
import { sleep } from "../lib/lib";
import styles from "../styles/Home.module.css";
const Logo = () => {
  const text = ["Himansa ", "Eshan "];
  const [display, setDisplay] = useState(" ");
  useEffect(() => {
    (async () => {
      // control logic
      var t = 0;
      var n = 0;
      var is_forward = true;
      var _text = "";

      while (true) {
        setDisplay(text[t].slice(0, n));
        if (!text[t][n + 1] && is_forward) is_forward = false;
        if (!text[t][n - 1] && !is_forward) {
          t = t == text.length - 1 ? 0 : t + 1;
          n = 0;
          is_forward = true;
          await sleep(600);
        }
        await sleep(text[t].length - 1 == n ? 2500 : is_forward ? 400 : 100);
        is_forward ? n++ : n--;
      }
    })();
  }, []);
  return (
    <div className={styles.logo_con}>
      &#60;&nbsp;<span className={styles.logo_typewriter}>{display}</span>
      &nbsp;&#47;&#62;
    </div>
  );
};
export default Logo;
