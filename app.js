// Tugma va body elementini olish
const body = document.body;
const themeToggleButton = document.getElementById('theme-toggle');

// Tugma bosilganda `light` sinfini qo'shish yoki olib tashlash
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light'); // Agar `light` sinfi bo'lsa, olib tashlaydi
  } else {
    body.classList.add('light'); // Agar bo'lmasa, qo'shadi
  }
});

window.onload = function () {
    // Sahifaning markaziga scroll qiladi
    const centerContent = document.getElementById("center-content");
    centerContent.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  
  AOS.init();
