import gsap from "gsap";

export const heroRevealAnimation = ({
  introRef,
  headingRef,
  bodyRef,
  buttonsRef,
}) => {
  const tl = gsap.timeline();

  tl.from(introRef.current, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power3.out",
  })

    .from(
      headingRef.current,
      {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.1"
    )

    .from(
      bodyRef.current,
      {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )

    .from(
      buttonsRef.current,
      {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

  return tl;
};