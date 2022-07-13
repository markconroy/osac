const donate = document.querySelector(".donate-pop-up");
const donateLink = document.querySelector(".donate-pop-up__link");
const donateClose = document.querySelector(".donate-pop-up__close");
const transitionTime = 333;

function setHideDonate() {
  let expire = new Date();
  expire = new Date(expire.getTime() + 1 * 3600 * 1000);
  document.cookie = "donateMessageHide=true; expires=" + expire;
}

function handleCloseDonate() {
  donate.classList.remove("donate-pop-up--opening");
  donate.classList.add("donate-pop-up--closing");
  setTimeout(function () {
    donate.classList.add("donate-pop-up--closed");
  }, transitionTime);
  setHideDonate();
}

function handleOpenDonate() {
  donate.classList.remove("donate-pop-up--closed");
  donate.classList.add("donate-pop-up--closing");
  setTimeout(() => {
    donate.classList.add("donate-pop-up--opening");
  }, transitionTime);
}

if (
  !document.cookie
    .split("; ")
    .find((row) => row.startsWith("donateMessageHide=true"))
) {
  handleOpenDonate();
}

donateClose.addEventListener("click", handleCloseDonate);
donateLink.addEventListener("click", handleCloseDonate);
