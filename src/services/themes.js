export const themes = {
  setTheme() {
    const html = document.querySelector("html");
    html.style.setProperty("--bgc", "#252d36");
    html.style.setProperty("--hover", "#374757");
    html.style.setProperty("--border", "#fff");
    html.style.setProperty("--text-color", "#fff");
  },
};
