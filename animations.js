(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.documentElement.classList.add("motion-reduced");
    return;
  }

  const selectors = [
    ".intro-band",
    ".section-heading",
    ".feature-card",
    ".tour-shot",
    ".visual-card",
    ".use-case-grid article",
    ".sample-pdf",
    ".sample-email",
    ".comparison-band .table-wrap",
    ".roi-band > *",
    ".trust-band .link-cards a",
    ".faq-grid article",
    ".marketplace-band > *",
    ".content-grid > article",
    ".policy-layout > *",
    ".doc-nav a"
  ];

  const revealItems = Array.from(document.querySelectorAll(selectors.join(",")));
  if (!revealItems.length) {
    return;
  }

  document.documentElement.classList.add("motion-ready");

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => observer.observe(item));
})();
