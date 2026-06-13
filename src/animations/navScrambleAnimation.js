export const scrambleText = (
  element,
  finalText
) => {
  if (!element) return;

  clearInterval(
    element.scrambleInterval
  );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let iteration = 0;

  element.scrambleInterval =
    setInterval(() => {
      element.textContent =
        finalText
          .split("")
          .map(
            (
              character,
              index
            ) => {
              if (
                character === " "
              )
                return " ";

              if (
                index <
                iteration
              ) {
                return finalText[index];
              }

              return chars[
                Math.floor(
                  Math.random() *
                    chars.length
                )
              ];
            }
          )
          .join("");

      iteration += 0.8;

      if (
        iteration >=
        finalText.length
      ) {
        clearInterval(
          element.scrambleInterval
        );

        element.textContent =
          finalText;
      }
    }, 30);
};