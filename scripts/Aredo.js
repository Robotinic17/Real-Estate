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

const nav2 = document.getElementById("menu2");
nav2.addEventListener("click", togglenav);

function togglenav() {
    document.getElementById("side-nav2").style.right = "0";
    document.getElementById("overlay2").style.display = "block";
  }

const navcancel2 = document.getElementById("Xmenu2");
navcancel2.addEventListener("click", navcan2);

function navcan2() {
  document.getElementById("side-nav2").style.right = "-100%";
  document.getElementById("overlay2").style.display = "none"
}



window.addEventListener("scroll", function(){
  const header = this.document.getElementById("headscroll");

  if( window.scrollY > window.innerHeight * 0.5) {
      header.classList.add('blur');
  } else{
      header.classList.remove('blur');
  }
})