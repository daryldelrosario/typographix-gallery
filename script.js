// Allow for selection of image to trigger modal view 
const items = document.querySelectorAll('.grid > div');

items.forEach(item => {
  item.title = "Click to Enlarge";
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector('img').src;
    // Create the modal div 
    const modal = document.createElement("div");
    modal.classList("modal");

    // Create the img element 
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "enlarged abstract image";

    // Append the img elemet to modal div 
    modal.appendChild(imgElement);

    // Add the modal to the body
    document.body.appendChild(modal);
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