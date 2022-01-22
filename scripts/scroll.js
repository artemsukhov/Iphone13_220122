const links = document.querySelectorAll(".header-menu__item a");
seamless.polyfill();

links.forEach((e, i, a) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    const id = e.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    } else {
      seamless.elementScrollIntoView(
        document.querySelector("#characteristics"),
        {
          behavior: "smooth",
          block: "center",
          inline: "center",
        }
      );
    }
  });
});
