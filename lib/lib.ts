export const sleep = (t: number) => {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, t);
  });
};

export const cssClass = (...n: string[]) => {
  return n.join(" ");
};
export function toFormData(o: {}) {
  return Object.entries(o).reduce(
    (d, e: [string, any]) => (d.append(...e), d),
    new FormData()
  );
}
