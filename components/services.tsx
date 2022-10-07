import style from "../styles/service.module.css";

const service_list = [
  {
    name: "Web Development",
    image: (
      <svg width="3em" height="3em" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="M71.7 97.2L34.8 128l36.9 30.8a12 12 0 1 1-15.4 18.4l-48-40a12 12 0 0 1 0-18.4l48-40a12 12 0 0 1 15.4 18.4Zm176 21.6l-48-40a12 12 0 0 0-15.4 18.4l37 30.8l-37 30.8a11.9 11.9 0 0 0-1.5 16.9a12.2 12.2 0 0 0 9.2 4.3a12 12 0 0 0 7.7-2.8l48-40a12 12 0 0 0 0-18.4Zm-83.6-90.1a12.1 12.1 0 0 0-15.4 7.2l-64 176a12.1 12.1 0 0 0 7.2 15.4a11.8 11.8 0 0 0 4.1.7a12 12 0 0 0 11.3-7.9l64-176a12.1 12.1 0 0 0-7.2-15.4Z"
        ></path>
      </svg>
    ),
    description:
      "I can make your idea into website. I'm familiar with React, Next and Typescript.",
  },
  {
    name: "Software Development",
    description:
      "I will help your all software needs. I'm specialized in Python, Java, C# and Node.js.",
    image: (
      <svg width="3em" height="3em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14 18.32A7.06 7.06 0 0 1 11.28 16H3V4h18v2.26a7.08 7.08 0 0 1 2 2.15V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2Z"
        ></path>
        <path
          fill="currentColor"
          d="M17 6a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 7.5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5Z"
        ></path>
      </svg>
    ),
  },
  {
    name: "UX/UI Design",
    description:
      "I will give you clean, beautiful and accessible UI for your Webside or your App.",
    image: (
      <svg width="3em" height="3em" viewBox="0 0 24 24">
        <g fill="none" strokeWidth="1.5">
          <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#svgIDa)"
          >
            <path d="m17.674 11.408l-1.905 5.715a.6.6 0 0 1-.398.386L3.693 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.615ZM3.296 20.602l6.364-6.364"></path>
            <path d="m17.792 11.056l2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.829 0l-2.828 2.829m-1.062 6.01a1.5 1.5 0 1 0-2.121 2.122a1.5 1.5 0 0 0 2.121-2.122Z"></path>
          </g>
          <defs>
            <clipPath id="svgIDa">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div className={style.list}>
      {service_list.map((i) => (
        <div key={i.name} className={style.card}>
          <div className={style.img}>{i.image}</div>
          <div className={style.name}>{i.name}</div>
          <div className={style.d}>{i.description}</div>
          <div className={style.go}>
            <div>
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path
                  fill="#959595"
                  d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;
