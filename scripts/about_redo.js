const name = document.getElementById('fname');
const email = document.getElementById('email');
const form = document.getElementById('form');
const result = document.getElementById('result');
const error = document.getElementById('error');


form.addEventListener('submit' , (event) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Input Fullname')
    }

    if (name.value.length <= 7 && name.value.length >= 1) {
        messages.push('Input atleast 6 characters')
    }

    if (name.value.length >= 20) {
        messages.push('Full name should contain less than 20 character')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Input email')
    }
    if (messages.length > 0) {
      event.preventDefault();
      error.innerText = messages.join(', ')
    }
})

const nav = document.getElementById("menu");
nav.addEventListener("click", toggleNav);

function toggleNav() {
    document.getElementById("side-nav").style.right = "0";
    document.getElementById("overlay").style.display = "block";
  }

const navcancel = document.getElementById("Xmenu");
navcancel.addEventListener("click", navcan);

function navcan() {
  document.getElementById("side-nav").style.right = "-100%";
  document.getElementById("overlay").style.display = "none"
}

{
  function tour() {
    document.getElementById("tour").style.display = "none";
  }
}

