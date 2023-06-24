// navbar opacity

const navItems = document.querySelectorAll(".list");

navItems.forEach((navItem) => {
  navItem.addEventListener("mouseover", () => {
    navItems.forEach((item) => {
      if (item !== navItem) {
        item.style.opacity = "0.6";
      }
    });
  });

  navItem.addEventListener("mouseout", () => {
    navItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.cursor = "pointer";
    });
  });
});
