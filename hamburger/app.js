let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.ul-nav');
let plane = document.querySelector('.plane-text');
let encrypted = document.querySelector('.encrypted');
let copy = document.querySelector('.copy');
let picker = document.querySelectorAll('.pick-cypher');
let h1 = document.querySelectorAll('h1');
let a = document.querySelectorAll('.a-nav');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

plane.addEventListener('input', (e) => {
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

for (let pick of picker) {
  pick.addEventListener('click', (e) => {
    for (let i of picker) {
      i.classList.add('not-active');
      i.classList.remove('active');
    }
    pick.classList.remove('not-active');
    pick.classList.add('active');
  });
}
for (let i of a) {
  i.addEventListener('click', (e) => {
    for (let j of a) {
      j.classList.remove('current');
    }
    i.classList.add('current');
  });
}
