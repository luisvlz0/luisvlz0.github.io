const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

document.getElementById('star-button').addEventListener('click', function() {
  alert('You clicked the star!');
  // You can add more functionality here
});

document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('calc-display');
  const buttons = document.querySelectorAll('.calc-btn');
  let displayValue = '';
  let operator = '';
  let firstOperand = null;
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const value = this.textContent;
          if (value === 'C') {
              displayValue = '';
              operator = '';
              firstOperand = null;
              display.value = displayValue;
          } else if (value === '=') {
              if (operator && firstOperand !== null) {
                  displayValue = calculate(firstOperand, parseFloat(displayValue), operator).toString();
                  display.value = displayValue;
                  firstOperand = null;
                  operator = '';
              }
          } else if (['+', '-', '*', '/'].includes(value)) {
              if (firstOperand === null) {
                  firstOperand = parseFloat(displayValue);
                  operator = value;
                  displayValue = '';
              } else if (operator) {
                  displayValue = calculate(firstOperand, parseFloat(displayValue), operator).toString();
                  display.value = displayValue;
                  firstOperand = parseFloat(displayValue);
                  operator = value;
                  displayValue = '';
              }
          } else {
              displayValue += value;
              display.value = displayValue;
          }
      });
  });

  function calculate(a, b, operator) {
      switch (operator) {
          case '+':
              return a + b;
          case '-':
              return a - b;
          case '*':
              return a * b;
          case '/':
              return a / b;
          default:
              return b;
      }
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
