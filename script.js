let tabcontents = document.getElementsByClassName("tab-contents");
let tablinks = document.getElementsByClassName("tab-links");
let sidemenu = document.getElementById("sidemenu");
let menuItems = sidemenu.querySelectorAll('li a');

let isMenuVisible = false;
let scrollTimeout;
const menuShowPosition = 200; 
function openmenu() {
    sidemenu.style.right = "0";
    isMenuVisible = true;
}

function closemenu() {
    sidemenu.style.right = "-200px";
    isMenuVisible = false;
}

function opentab(tabname) {
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Add event listener to hide menu on menu item click
menuItems.forEach(item => {
    item.addEventListener('click', closemenu);
});

// Scroll behavior
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    // Show menu when scrolling up and stopped at a specific position
    if (window.scrollY < menuShowPosition && !isMenuVisible) {
        openmenu();
    } 

    // Hide menu when scrolling down
    if (window.scrollY >= menuShowPosition && isMenuVisible) {
        closemenu();
    }

    // Toggle menu visibility based on scroll direction and position
    scrollTimeout = setTimeout(() => {
        // Check if user has scrolled up from the bottom
        if (window.scrollY < menuShowPosition && !isMenuVisible) {
            openmenu();
        } else if (window.scrollY >= menuShowPosition && isMenuVisible) {
            closemenu();
        }
    }, 500); // Hide menu after 0.5 seconds of inactivity
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbyFYDtU5L7PeN5fjJcKh1x01jOflBXL1RuhVL5GDz4QMtHemqxixCLvBt-x2eZvvk4p/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully!!"
        setTimeout( () => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})