// Loading Animation 
// FUNCTION: Generate random color
function getRandomColor() {
  return "#" + Math.random().toString(16).slice(-6);
}

// FUNCTION: Set random colors to the squares 
function setRandomColors() {
  document.querySelector(".color1").style.backgroundColor = getRandomColor();
  document.querySelector(".color2").style.backgroundColor = getRandomColor();
  document.querySelector(".color3").style.backgroundColor = getRandomColor();
}

// INITIALIZE with random colors
setRandomColors();

// CONTINUE to change colors every 2 seconds
setInterval(setRandomColors, 2000);

// SHOW loader for 3 seconds, then show content
setTimeout(() => {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelectorAll(".item").forEach(el => el.style.opacity = "1");
}, 3000);

// Allow for selection of image to trigger modal view 
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.title = "Click to Enlarge";
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector('img').src;
    // Create the modal div 
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Create the img element 
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "enlarged abstract image";

    // Append the img elemet to modal div 
    modal.appendChild(imgElement);

    // Add the modal to the body
    document.body.appendChild(modal);
    setTimeout(() => {
      imgElement.classList.add("reveal");
    }, 10);

    // REMOVE MODAL WHEN CLICKED
    modal.addEventListener("click", () => {
      imgElement.classList.remove("reveal");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
  })
});

// FUNCTION TO CHECK IF PAGE IS SCROLLED AND ADJUST THE LOGO SIZE 
function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  let scrollPosition = window.scrollY;

  // Add / remove "scrolled" class based on scroll position
  if(scrollPosition > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Calculate new font-size based on scroll position 
  let newSize = 2 - (scrollPosition * 0.03); // decrese by 0.03 rem for every 1px scrolled

  // Clamping the font-size between 1.5rem and 3rem 
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(2.2, newSize);

  logo.style.fontSize = newSize + "rem";
}

// EVENT LISTENER FOR SCROLL EVENT 
window.addEventListener("scroll", checkScroll);