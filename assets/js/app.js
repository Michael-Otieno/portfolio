// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const text = document.querySelector('.fancy')
const strText = text.textContent
const splitText = strText.split("")
text.textContent = "";
for(let i=0; i<splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}
let char = 0;
let timer = setInterval(onTick, 50)

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if(char==splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer)
  timer = null;
}