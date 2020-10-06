// change selected images based on passed in mode
function changeImgMode(mode) {
   // select img elements within image-container class
   const images = document.querySelectorAll('.image-container img');

   // change the images based on dark or light mode
   const prevMode = mode === 'dark' ? 'light' : 'dark';
   images.forEach(img => {
      const prevSrc = img.getAttribute('src');
      img.setAttribute('src', prevSrc.replace(prevMode, mode));
   });
}


// takes in 'light' or 'dark' string as arguement, and change element attributes base on the arguement
function changeMode(mode) {
   // declare element selectors affected during mode change
   const nav = document.getElementById('nav');
   const textBox = document.getElementById('text-box');
   const [modeText, modeIcon] = document.getElementById('toggle-icon').children;

   modeText.textContent = `${mode[0].toUpperCase() + mode.slice(1)} Mode`;

   // condition for mode
   nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
   textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
   mode === 'dark' ? modeIcon.classList.replace('fa-sun', 'fa-moon') : modeIcon.classList.replace('fa-moon', 'fa-sun');
   changeImgMode(mode);
}


// Callback to listen for mode change toggle, also store current mode in local storage
function switchTheme(event) {
   if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      changeMode('dark');
   } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      changeMode('light');
   }
}


function main() {
   const toggleSwitch = document.querySelector('input[type="checkbox"]');

   // Event Listener for switch light and dark mode
   toggleSwitch.addEventListener('change', switchTheme);

   // Check local storage for theme
   const currentTheme = localStorage.getItem('theme');
   if(currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      
      // If the dark mode is checked 
      if(currentTheme === 'dark') {
         toggleSwitch.checked = true;
         changeMode(currentTheme);
      }
   }
}

main();