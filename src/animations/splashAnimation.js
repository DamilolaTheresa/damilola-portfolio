import gsap from "gsap";

export const splashAnimation = ({
  splashRef,
  counterRef,
  imageRef,
  labelsRef,
  setDisplayName,
  onComplete,
}) => {

  if (!counterRef.current || !imageRef.current) return;

  // Counter
  let counter = { value: 0 };

  gsap.to(counter, {
    value: 100,
    duration: 3,
    ease: "power2.out",
    onUpdate: () => {
      if (counterRef.current) {
        counterRef.current.textContent = `(${Math.floor(counter.value)
          .toString()
          .padStart(3, "0")})`;
      }
    },
  });

  // Hide portrait initially
  gsap.set(imageRef.current, {
    y: 80,
    opacity: 0,
  });

  // Portrait reveal
  gsap.to(imageRef.current, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.9,
    ease: "power4.out",
  });

  // Name scramble
  gsap.delayedCall(0.2, () => {
    const finalText = "DAMILOLA AKINWANDE";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let iteration = 0;

    const interval = setInterval(() => {
      const text = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < iteration) {
            return finalText[index];
          }

          return chars[
            Math.floor(
              Math.random() * chars.length
            )
          ];
        })
        .join("");

      setDisplayName(text);

      iteration += 0.45;

      if (
        iteration >= finalText.length
      ) {
        clearInterval(interval);
        setDisplayName(finalText);
      }
    }, 35);
  });

  // Labels
  gsap.set(labelsRef.current, {
    opacity: 0,
    y: 20,
  });

  gsap.to(labelsRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.05,
    ease: "power3.out",
  });

  // Splash Exit
  gsap.to(splashRef.current, {
    yPercent: -100,
    duration: 1,
    delay: 3.3,
    ease: "power4.inOut",
    onComplete: () => {
      onComplete?.();
    },
  });
};