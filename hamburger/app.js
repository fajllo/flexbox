let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.ul-nav');
let plane = document.querySelector('.plane-text');
let encrypted = document.querySelector('.encrypted');
let copy = document.querySelector('.copy');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

plane.addEventListener('input', (e) => {
  console.log(plane);
  encrypted.value = btoa(e.target.value);
  copy.innerText = 'COPY!';
});
function copyMe() {
  encrypted.select();
  encrypted.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

copy.addEventListener('click', (event) => {
  copyMe();
  event.target.innerText = 'Copied!';
});
