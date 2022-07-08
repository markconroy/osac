const donate = document.querySelector('.donate');
const donateLink = document.querySelector('.donate__link');
const donateClose = document.querySelector('.donate__close');

function handleCloseDonate() {
  donate.classList.add('donate--closing');
  setTimeout(function() {
    donate.classList.add('donate--closed');
  }, 250);
}

donateClose.addEventListener('click', handleCloseDonate);
donateLink.addEventListener('click', handleCloseDonate);