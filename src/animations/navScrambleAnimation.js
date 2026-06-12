export const scrambleText = (
  element,
  finalText
) => {
  clearInterval(element.scrambleInterval);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let iteration = 0;

  element.scrambleInterval = setInterval(() => {
    element.textContent = finalText
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

    iteration += 1.2;

    if (iteration >= finalText.length) {
      clearInterval(
        element.scrambleInterval
      );

      element.textContent = finalText;
    }
  }, 50);
};