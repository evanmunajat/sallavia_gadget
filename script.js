// Loader cepat
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  // Beri delay minimal 0.5 detik supaya smooth
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loader.style.display = 'none';
      main.style.display = 'block';
      main.style.opacity = '0';
      main.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        main.style.opacity = '1';
      }, 50);
    }, 500);
  }, 300); // minimal delay 0.3 detik
});
