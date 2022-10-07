import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
const icon_image_list = [
  "html",
  "java",
  "code",
  "react",
  "vue",
  "chrome",
  "c-sharp",
];
const HomeComponent = (props: { scroll_value: number }) => {
  return (
    <>
      <div className={styles.intro}>
        <span className={styles.intro_top}>Hello It&apos;s me</span>
        <h1 className={styles.title}>
          <div>
            <span>H</span>imansa
          </div>
          <div>
            <span>E</span>shan
            <span>.</span>
          </div>
        </h1>
        <p className={styles.intro_text}>
          I’m a Self-motivated Web Developer based in Sri Lanka. Web
          enthusiastic. More focused on Web performance and design.
        </p>
        <div className={styles.more_about_btn}>
          <Link href="/about">
            <a>
              <button>More about me</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.img_1}>
        <div className={styles.img_1_con}>
          <div className={styles.img_1_m}>
            <Image src={"/images/s3.png"} height={347} width={300} alt="" />
          </div>
          {icon_image_list.map((i, n) => (
            <div key={n} className={styles.img_1_sub}>
              <Image
                src={`/images/icons/${i}.webp`}
                height={50}
                width={50}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.scroll_hint}
        style={{ opacity: Math.max(0, 1 - props.scroll_value * 5) }}
      >
        <Image src="/images/Down Arrow.png" alt="" height={15} width={60} />
      </div>
    </>
  );
};
export default HomeComponent;
