let burger = document.querySelector('.burger');
let right = document.querySelector('.right-nav');
let smallNav = document.querySelector('.small-nav');

burger.addEventListener('mouseover', () => {
  right.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!right.contains(event.target)) {
    right.style.display = 'none';
  }
});
