# Journey Thru Code

**Journey Thru Code** is a project that showcases a responsive and interactive web page designed with HTML, CSS, and JavaScript. The page includes various features such as a sticky header, tab navigation, platform navigation, and a responsive menu.

## Table of Contents

- [Journey Thru Code](#journey-thru-code)
  - [Table of Contents](#table-of-contents)
  - [Inspiration](#inspiration)
  - [Features](#features)
  - [Setup](#setup)
  - [Usage](#usage)
    - [HTML Structure](#html-structure)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Technical Challenges](#technical-challenges)
  - [Next Iteration](#next-iteration)
  - [Author](#author)

## Inspiration

The "Journey Thru Code" project takes inspiration from how I started my software development journey - by simply signing up on the ALX Website and submitting my CV so you can see that I'm trying to exit the same way I entered when it comes to this project. Overall it aims to create an engaging and interactive web experience, showcasing the power of modern web technologies. This project serves as a learning tool and a demonstration of various web development techniques.

## Features

- **Sticky Header**: The header stays fixed at the top of the page when scrolling.
- **Tabs Navigation**: Toggle between different tab contents.
- **Platform Navigation**: Navigate between different music platforms (players).
- **Responsive Menu**: A responsive navigation menu that adapts to different screen sizes.
- **Form Submission**: Submit contact form data to Google Sheets and display a confirmation message.

## Setup - Option 1

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SeanGam13/JourneyThruCode.git
   cd JourneyThruCode
   ```

2. **Open the project in your preferred code editor**.

3. **Run a local server**:
   - You can use VS Code's Live Server extension or a simple HTTP server:
     ```bash
     python -m http.server
     ```

4. **Open `index.html` in your browser**.

## Setup - Option 2
   
**Click the link to view the website live**:

https://seangam13.github.io/JourneyThruCode/

## Usage

### HTML Structure

The basic structure of the HTML file includes the following components:

- **Header**: Contains navigation links and a background image.
- **Tabs**: Different tabs for navigation.
- **Platform Container**: Container for platform iframes.
- **Form**: Contact form for users to submit queries.

### CSS

The CSS file includes styles for the header, tabs, platform navigation, responsive menu, and form elements. Key classes to note:

- `.fixed-header`
- `.active-tab`
- `.active-link`
- `.platform-container`
- `.player`
- `.menu-open`
- `.noscroll`

### JavaScript

The JavaScript file includes the following functionalities:

1. **Sticky Header**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       var header = document.getElementById('header');
       var initialOffset = header.offsetTop;

       window.addEventListener('scroll', function() {
           var scrollPos = window.scrollY;

           if (scrollPos >= initialOffset) {
               header.classList.add('fixed-header');
           } else {
               header.classList.remove('fixed-header');
           }
       });
   });
   ```

2. **Tabs Navigation**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       var tabLinks = document.querySelectorAll('.tab-links');

       tabLinks.forEach(function(tabLink) {
           tabLink.addEventListener('click', function() {
               var tabId = this.getAttribute('data-tab');
               var tabContent = document.getElementById(tabId);

               if (tabContent.classList.contains('active-tab')) {
                   tabContent.classList.remove('active-tab');
                   this.classList.remove('active-link');
               } else {
                   document.querySelectorAll('.tab-contents').forEach(function(tabContent) {
                       tabContent.classList.remove('active-tab');
                   });
                   document.querySelectorAll('.tab-links').forEach(function(link) {
                       link.classList.remove('active-link');
                   });

                   tabContent.classList.add('active-tab');
                   this.classList.add('active-link');
               }
           });
       });
   });
   ```

3. **Platform Navigation**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
       var platformContainer = document.querySelector('.platform-container');
       var platforms = platformContainer.querySelectorAll('.player');
       var currentPlatformIndex = 0;

       function navigatePrevious() {
           platforms[currentPlatformIndex].classList.remove('active');
           currentPlatformIndex = (currentPlatformIndex - 1 + platforms.length) % platforms.length;
           platforms[currentPlatformIndex].classList.add('active');
       }

       function navigateNext() {
           platforms[currentPlatformIndex].classList.remove('active');
           currentPlatformIndex = (currentPlatformIndex + 1) % platforms.length;
           platforms[currentPlatformIndex].classList.add('active');
       }

       var prevButton = document.querySelector('.prev');
       var nextButton = document.querySelector('.next');
       prevButton.addEventListener('click', navigatePrevious);
       nextButton.addEventListener('click', navigateNext);

       platforms[currentPlatformIndex].classList.add('active');
   });
   ```

4. **Responsive Menu**:
   ```javascript
   function isSmallScreen() {
       return window.innerWidth <= 600;
   }

   function openmenu() {
       document.querySelector("nav ul").classList.add("open");
       if (isSmallScreen()) {
           document.querySelector(".fa-chess-king").style.display = "block";
           document.querySelector(".fa-chess-board").style.display = "none";
           document.body.classList.add("menu-open");
           document.body.classList.add("noscroll");
       }
   }

   function closemenu() {
       document.querySelector("nav ul").classList.remove("open");
       if (isSmallScreen()) {
           document.querySelector(".fa-chess-king").style.display = "none";
           document.querySelector(".fa-chess-board").style.display = "block";
           document.body.classList.remove("menu-open");
           document.body.classList.remove("noscroll");
       }
   }

   document.addEventListener('click', function(event) {
       if (!event.target.closest('nav') && !event.target.closest('.fa-solid')) {
           closemenu();
       }
   });

   document.addEventListener('scroll', function(event) {
       closemenu();
   });
   ```

5. **Form Submission**:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/AKfycbxl7kX1J11M3n6bFHv-T3HYFvZEXCVp298gjZL5fLgim_wpEI1CkjtcmAciZiDxucGYYA/exec'
   const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg")

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
           .then(response => {
               msg.innerHTML = "Kindly expect to hear from me soon, cheers!"
               setTimeout(function(){
                   msg.innerHTML = ""
               },5000)
               form.reset()
           })
           .catch(error => console.error('Error!', error.message))
   })
   ```

## Technical Challenges

- **Sticky Header**: Ensuring the header remains fixed while scrolling and adapting to different screen sizes.
- **Tab Navigation**: Implementing smooth transitions and toggling between active and inactive states.
- **Responsive Design**: Making the navigation menu and other components responsive for various screen sizes.
- **Form Submission**: Handling form data submission to Google Sheets and providing user feedback.

## Next Iteration

- **Enhanced Animations**: Add more animations for a smoother user experience.
- **Backend Integration**: Integrate a backend to manage user data and platform content.
- **Improved Accessibility**: Ensure the website is fully accessible to all users.

## Author

**Sean Gambanou**
