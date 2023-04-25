// Get the header element and the h1 element
const header = document.querySelector('header');
const h1 = document.querySelector('h1');

// Change the header background color and the h1 text content on click
header.addEventListener('click', function() {
  header.style.backgroundColor = 'red';
  h1.textContent = 'Welcome to My Simple Homepage (Updated)';
});

// Get the main element and the paragraph element
const main = document.querySelector('main');
const p = document.querySelector('p');

// Change the paragraph text content on hover
p.addEventListener('mouseover', function() {
  p.textContent = 'Thanks for visiting my simple homepage!';
});

// Change the paragraph text content back to original on mouseout
p.addEventListener('mouseout', function() {
  p.textContent = 'Thank you for visiting my simple homepage. I hope you enjoy your stay!';
});