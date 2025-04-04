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

function closeOverlay() {
  let overlay = document.getElementById("Welcome");
  overlay.classList.add("hidden"); // Add fade-out class

  // Wait for the fade-out effect to complete before removing the overlay
  setTimeout(() => {
      overlay.style.display = "none";
  }, 100); // Matches the CSS transition duration (0.5s)
}
