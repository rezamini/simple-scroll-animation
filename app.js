const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const children = Array.from(entry.target.children);
    children.forEach((child) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        if (child.classList.contains("hidden-delay")) {
          child.classList.add("show");
        }
      } else {
        entry.target.classList.remove("show");
        if (child.classList.contains("hidden-delay")) {
          child.classList.remove("show");
        }
      }
    });
  });
});

const sections = document.querySelectorAll(".hidden");
sections.forEach((element) => observer.observe(element));
