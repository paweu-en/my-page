type Easing = string | [number, number, number, number] | null;

export const fade = (duration: number, delay: number, ease: Easing) => ({
  hidden: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: { duration, delay, ease },
  },
  fadeOut: {
    opacity: 0,
  },

  // transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
});
