export const indexPageContent = (delay: number) => ({
  init: {
    y: "2%",
    opacity: 0,
  },
  fadeIn: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, delay, ease: "easeInOut" },
  },
  fadeOut: {
    x: "-25%",
    opacity: 0,
    transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
  },
});

export const aboutPageContent = (delay: number) => ({
  init: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.75, delay, ease: "easeInOut" },
  },
  fadeOut: {
    opacity: 0,
    transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
  },
});
