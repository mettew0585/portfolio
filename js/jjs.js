const bioBtn = document.querySelector(".bio-btn");
const contactBtn = document.querySelector(".contact-btn");
const photoCho = document.querySelector(".photo__cho");
const bio = document.querySelector(".bio");

function bioBtnClick(e) {
  console.log("dfsf");
  photoCho.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
}

bioBtn.addEventListener("click", bioBtnClick);
