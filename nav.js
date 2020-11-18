let a = document.querySelectorAll('a');
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
console.dir(a);
for (let i of a) {
  i.addEventListener('click', (e) => {
    for (let j of a) {
      j.classList.remove('active');
    }
    i.classList.add('active');
    h2.innerHTML = i.innerHTML;
  });
}
