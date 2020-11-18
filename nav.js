let a = document.querySelectorAll('a');
for (let i of a) {
  i.addEventListener('click', (e) => {
    for (let j of a) {
      j.classList.remove('active');
    }
    i.classList.add('active');
  });
}
