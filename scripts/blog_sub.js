const nav = document.getElementById("menu");
nav.addEventListener("click", toggleNav);
nav.addEventListener("mouseover", toolTip);
nav.addEventListener("mouseout", ntoolTip);

function toggleNav() {
  const sideNav = document.getElementById("side-nav");
  sideNav.style.display = "block"; // Show the element
}

function toolTip() {
  document.getElementById("menutooltip").style.display = "inline";
}

function ntoolTip() {
  document.getElementById("menutooltip").style.display = "none";
}

const navcancel = document.getElementById("cancel");
navcancel.addEventListener("click", navcan);

function navcan() {
  document.getElementById("side-nav").style.display = "none";
}

{
  function tour() {
    document.getElementById("tour").style.display = "none";
  }
}

