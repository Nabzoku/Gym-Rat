document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', navHighlighter);
  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop =
        current.getBoundingClientRect().top + window.pageYOffset - 50;
      let sectionId = current.getAttribute('id');
      const section =
        window.innerWidth < 845
          ? document.querySelector(
              '.menu .mobile-menu a[href*=' + sectionId + ']'
            )
          : document.querySelector(
              '.menu .desktop-menu a[href*=' + sectionId + ']'
            );
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
});
