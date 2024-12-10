document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
      // Saat scroll lebih dari 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll(".btn a");

  function setActiveLink(targetId) {
    // Hapus class 'active' dari semua link
    navbarLinks.forEach((navLink) => navLink.classList.remove("active"));
    // Cari link dengan href sesuai targetId dan tambahkan class 'active'
    navbarLinks.forEach((navLink) => {
      if (navLink.getAttribute("href") === `#${targetId}`) {
        navLink.classList.add("active");
      }
    });
  }

  // Event listener untuk klik di navbar
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href").substring(1); // Ambil ID tujuan
      setActiveLink(targetId);
    });
  });

  // Event listener untuk tombol dengan link
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").substring(1); // Ambil ID tujuan
      setActiveLink(targetId);
    });
  });

  // Intersection Observer untuk mendeteksi section yang aktif
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute("id");
          setActiveLink(targetId);
        }
      });
    },
    {
      threshold: 0.5, // 50% dari section harus terlihat di layar
    }
  );

  // Observe semua section
  sections.forEach((section) => {
    observer.observe(section);
  });
});