import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toFormData } from "../lib/lib";
import styles from "../styles/contact.module.css";
import main_styles from "../styles/Home.module.css";
const social_list = [
  ["facebook", "https://www.facebook.com/himansa.eshan"],
  ["twitter", "https://twitter.com/EshanHimansa"],
  ["linkedin", "https://www.linkedin.com/in/himanse/"],
  ["github", "https://github.com/himansaE/"],
];

const GOOGLE_APPSCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyYW9U_LM9mQBL4yYlXFMLl9gr1kF54CLvmBNNShgppTnMm_GbT7WNT3xaYMHJiVO8v/exec";
const Contact = () => {
  const [message, setMessage] = useState<string>();
  const [is_error, setIsError] = useState(false);
  const [is_submitting, setIsSubmitting] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.social_con}>
        <div className={styles.social}>
          <h2 className={styles.title}>Contact Me</h2>
          <div className={styles.contact_m}>
            <div className={styles.contact_m_i}>
              <Image
                src={"/images/icons/phone-outline.png"}
                height={24}
                width={24}
                alt="phone"
              />
              +94 77 091 039
            </div>
          </div>
          <div className={styles.contact_m}>
            <div className={styles.contact_m_i}>
              <Image
                src={"/images/icons/at.png"}
                height={24}
                width={24}
                alt="phone"
              />
              himansa.24067@gmail.com
            </div>
          </div>
          <div className={styles.social_h}>
            <div>
              {social_list.map((i) => (
                <div key={i[0]} className={styles.social_i}>
                  <Link href={i[1]}>
                    <a>
                      <Image
                        src={`/images/icons/${i[0]}.png`}
                        height={24}
                        width={24}
                        alt={i[0]}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cv}>
            <div className={main_styles.more_about_btn}>
              <Link href="/data/cv.pdf ">
                <a target="_blank" rel="noopener noreferrer" download>
                  <button>Download CV</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (is_submitting) return;
            setIsSubmitting(true);
            const target = e.target as HTMLFormElement;

            const form_data = toFormData({
              timestamp: new Date().getTime(),
              email: target.email.value,
              name: target._name.value,
              message: target.message.value,
            });

            fetch(GOOGLE_APPSCRIPT_URL, {
              method: "POST",
              body: form_data,
            })
              .then((r) => {
                console.log("done", r);
                setIsError(false);
                setMessage("Done. I'll contact you.");
              })
              .catch((e) => {
                setIsError(true);
                setMessage("Something went wrong.");
              })
              .finally(() => setIsSubmitting(false));
          }}
        >
          <div className={styles.form_d}>
            <input type="text" name="_name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <div className={main_styles.more_about_btn}>
              <button className={styles.m} disabled={is_submitting}>
                Submit
              </button>
            </div>
            <div className={styles.message_c}>
              {message ? (
                <div
                  className={styles.message}
                  style={{ backgroundColor: is_error ? "#471010" : "#132f13" }}
                >
                  <div>{message}</div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    onClick={() => {
                      setMessage(undefined);
                    }}
                  >
                    <path
                      fill="gray"
                      d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                    ></path>
                  </svg>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
