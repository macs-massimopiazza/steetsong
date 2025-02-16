const form = document.getElementById('search');
const input = document.getElementById('song');
const tryAgain = document.getElementById('try-again');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if(rand(0, 1) === 0) {
    document.querySelector('#output span').innerHTML = `✨E' una street song✨ <br> <img src="bro.jpeg" />`;
    document.querySelector('#output').style.display = 'block';
  } else {
    document.querySelector('#output span').innerHTML = "Non è una street song";
    document.querySelector('#output').style.display = 'block';
  };
});


function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

tryAgain.addEventListener('click', () => {
  document.querySelector('#output').style.display = 'none'
  form.reset();
})