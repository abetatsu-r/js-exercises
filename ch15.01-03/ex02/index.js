const button = document.querySelector("button");

button.addEventListener(
  "click",
  async () => {
    await import("./module.js");
  },
  { once: true },
);
