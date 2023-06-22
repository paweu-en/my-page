export const indexPageContent = (delay: number) => ({
  contentInitial: {
    y: "2%",
    opacity: 0,
  },
  contentAnimate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, delay, ease: "easeInOut" },
  },
  contentExit: {
    x: "-35%",
    opacity: 0,
    transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
  },
});

export const aboutPageContent = (delay: number) => ({
  contentInitial: {
    opacity: 0,
  },
  contentAnimate: {
    opacity: 1,
    transition: { duration: 0.75, delay, ease: "easeInOut" },
  },
  contentExit: {
    opacity: 0,
    transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
  },
});
