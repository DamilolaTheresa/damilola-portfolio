export const buttonScramble = (
  element,
  finalText
) => {
  if (!element) return;

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let iteration = 0;

  const interval = setInterval(() => {
    element.textContent = finalText
      .split("")
      .map((char, index) => {
        if (char === " ")
          return " ";

        if (index < iteration) {
          return finalText[index];
        }

        return chars[
          Math.floor(
            Math.random() *
              chars.length
          )
        ];
      })
      .join("");

    iteration += 0.7;

    if (
      iteration >=
      finalText.length
    ) {
      clearInterval(interval);
      element.textContent =
        finalText;
    }
  }, 25);
};