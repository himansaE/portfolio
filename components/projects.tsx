import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/project.module.css";
const project_list: {
  title: string;
  description: JSX.Element | string;
  available: boolean;
  link?: string;
  img: string;
  type: string;
}[] = [
  {
    title: "Torrent Movie Downloader",
    description: (
      <>
        I simple torrent movie downloader web app using YIFI api to find, save
        to watchlist and download.
        <br />
        Used Technologies like React, Firestore, Firebase authentication etc.
      </>
    ),
    available: true,
    link: "https://movie-sh.web.app",
    img: "frame_chrome_mac_dark.webp",
    type: "Web Development",
  },
  {
    title: "A simple URL Shortener",
    description: (
      <>
        Demo project for shorting long URLs.
        <br />
        Used technologies like Next.js, MongoDB, Prisma etc.
      </>
    ),
    available: false,
    img: "Link-Shortener.jpg",
    type: "Web Development",
  },
  {
    title: "Video information viewer.",
    description: "",
    img: "video_info.png",
    available: true,
    type: "Web Application",
    link: "https://vinfo.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      {project_list.map((p) => (
        <div key={p.title} className={Styles.item}>
          <div className={Styles.img}>
            <Image
              src={`/images/projects/${p.img}`}
              width={297}
              height={200}
              alt="project image"
            />
          </div>
          <div className={Styles.card}>
            <div className={Styles.type}>{p.type}</div>
            <div className={Styles.title}>{p.title}</div>
            <div className={Styles.description}>{p.description}</div>
            <div className={Styles.btn_c}>
              <button disabled={!p.available} className={Styles.btn}>
                {p.available ? (
                  <Link href={p.link ?? ""}>
                    <a target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Link>
                ) : (
                  "In Development"
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
