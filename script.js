const donate = document.querySelector('.donate');
const donateClose = document.querySelector('.donate__close');

function handleCloseDonate() {
  donate.classList.add('donate--closing');
  setTimeout(function() {
    donate.classList.add('donate--closed');
  }, 250);
}

donateClose.addEventListener('click', handleCloseDonate);