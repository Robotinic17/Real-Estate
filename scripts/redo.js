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
{
  function tour() {
    document.getElementById("tour").style.display = "none";
  }
}


window.addEventListener("scroll", function(){
  const header = this.document.getElementById("headscroll");

  if( window.scrollY > window.innerHeight * 0.5) {
      header.classList.add('blur');
  } else{
      header.classList.remove('blur');
  }
})