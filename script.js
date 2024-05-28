document.addEventListener("DOMContentLoaded", function() {
    // Get the header element
    var header = document.getElementById('header');

    // Get the initial offset from the top
    var initialOffset = header.offsetTop;

    // Add event listener for scrolling
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        var scrollPos = window.scrollY;

        // Check if the scroll position is greater than or equal to the initial offset
        if (scrollPos >= initialOffset) {
            // Add a class to the header to fix its position
            header.classList.add('fixed-header');
        } else {
            // Remove the class if the scroll position is less than the initial offset
            header.classList.remove('fixed-header');
        }
    });

    // Get all tab links
    var tabLinks = document.querySelectorAll('.tab-links');

    // Add click event listener to each tab link
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function() {
            // Get the data-tab attribute value
            var tabId = this.getAttribute('data-tab');
            var tabContent = document.getElementById(tabId);

            // Toggle the visibility of the tab content
            if (tabContent.classList.contains('active-tab')) {
                tabContent.classList.remove('active-tab');
                this.classList.remove('active-link');
            } else {
                // Hide all tab contents and tab links
                document.querySelectorAll('.tab-contents').forEach(function(tabContent) {
                    tabContent.classList.remove('active-tab');
                });
                document.querySelectorAll('.tab-links').forEach(function(link) {
                    link.classList.remove('active-link');
                });

                // Show the clicked tab content
                tabContent.classList.add('active-tab');

                // Set the clicked tab link as active
                this.classList.add('active-link');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the platform container element
    var platformContainer = document.querySelector('.platform-container');

    // List of platform iframes
    var platforms = platformContainer.querySelectorAll('.player');

    // Initialize current platform index
    var currentPlatformIndex = 0;

    // Function to navigate to the previous platform
    function navigatePrevious() {
        platforms[currentPlatformIndex].classList.remove('active');
        currentPlatformIndex = (currentPlatformIndex - 1 + platforms.length) % platforms.length;
        platforms[currentPlatformIndex].classList.add('active');
    }

    // Function to navigate to the next platform
    function navigateNext() {
        platforms[currentPlatformIndex].classList.remove('active');
        currentPlatformIndex = (currentPlatformIndex + 1) % platforms.length;
        platforms[currentPlatformIndex].classList.add('active');
    }

    // Add click event listeners to the navigation buttons
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    prevButton.addEventListener('click', navigatePrevious);
    nextButton.addEventListener('click', navigateNext);

    // Show the first platform initially
    platforms[currentPlatformIndex].classList.add('active');
});

// Function to check if the screen width is below a certain threshold
function isSmallScreen() {
    return window.innerWidth <= 600; // Adjust the threshold as needed
}

function openmenu() {
    document.querySelector("nav ul").classList.add("open");
    if (isSmallScreen()) {
        document.querySelector(".fa-chess-king").style.display = "block"; // Show chess king icon
        document.querySelector(".fa-chess-board").style.display = "none"; // Hide chess board icon
        document.querySelector("body").classList.add("menu-open"); // Add class to body
        // Add a class to prevent body from scrolling when menu is open
        document.body.classList.add("noscroll");
    }
}

function closemenu() {
    document.querySelector("nav ul").classList.remove("open");
    if (isSmallScreen()) {
        document.querySelector(".fa-chess-king").style.display = "none"; // Hide chess king icon
        document.querySelector(".fa-chess-board").style.display = "block"; // Show chess board icon
        document.querySelector("body").classList.remove("menu-open"); // Remove class from body
        // Remove the class that prevents scrolling when menu is closed
        document.body.classList.remove("noscroll");
    }
}

// Add event listener to detect clicks on the document
document.addEventListener('click', function(event) {
    // Check if the clicked element is not part of the side menu or its trigger
    if (!event.target.closest('nav') && !event.target.closest('.fa-solid')) {
        // Close the side menu
        closemenu();
    }
});

// Add event listener to detect scroll events
document.addEventListener('scroll', function(event) {
    // Close the side menu
    closemenu();
});

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

