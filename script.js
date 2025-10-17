// Ambil semua link navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Ambil pathname dari URL saat ini (contoh: /produk)
const currentPath = window.location.pathname;

// Loop tiap link
navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  // Hapus class active dari semua
  link.classList.remove('active');

  // Kalau path-nya sama, tambahin class active
  if (linkPath === currentPath) {
    link.classList.add('active');
  }

  // Tambahkan event click supaya langsung aktif pas diklik
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("categoryCarousel");

    // Gandakan isi carousel biar looping-nya seamless
    const clone = carousel.innerHTML;
    carousel.innerHTML += clone;

    let scrollSpeed = 0.5; // kecepatan scroll (px per frame)
    let scrollPosition = 0;

    function scroll() {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0; // reset posisi ke awal (biar looping halus)
      }
      carousel.style.transform = `translateX(${-scrollPosition}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();

    // Pause kalau dihover
    carousel.addEventListener("mouseenter", () => (scrollSpeed = 0));
    carousel.addEventListener("mouseleave", () => (scrollSpeed = 0.5));
  });



// Hamburger toggle
const toggler = document.querySelector('.custom-toggler');
const navMenu = document.querySelector('.navbar-nav'); // ambil elemen menu

toggler.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('show'); // toggle class buat munculin menu
});

// 

  const carousel = document.getElementById('carousel-testimoni');
  const carouselGroup = carousel.querySelector('.testimoni-group');

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Auto scroll perlahan
  let autoScrollSpeed = 0.5; // px per frame
  let autoScroll;

  function startAutoScroll() {
    autoScroll = requestAnimationFrame(scrollLoop);
  }

  function scrollLoop() {
    if (!isDragging) {
      carousel.scrollLeft += autoScrollSpeed;
      // Loop kembali ke awal kalau sudah sampai akhir
      if (carousel.scrollLeft >= carouselGroup.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = 0;
      }
    }
    requestAnimationFrame(scrollLoop);
  }

  // Drag dengan mouse
  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch support untuk HP
  carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchend', () => {
    isDragging = false;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Start auto scroll
  startAutoScroll();

  // Styling cursor
  carousel.style.cursor = 'grab';

