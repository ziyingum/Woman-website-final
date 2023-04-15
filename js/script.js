
document.querySelectorAll('img')
.forEach(img => {
  img.addEventListener('mouseenter', function (e) {
    e.target.classList.add('hover');
  });
  img.addEventListener('mouseleave', function (e) {
    e.target.classList.remove('hover');
  });
})