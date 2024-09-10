
let tabcontents = document.getElementsByClassName("tab-contents");
let tablinks = document.getElementsByClassName("tab-links");
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
function opentab(tabname) {
    let tabcontents = document.getElementsByClassName("tab-contents");
    let tablinks = document.getElementsByClassName("tab-links");

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

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