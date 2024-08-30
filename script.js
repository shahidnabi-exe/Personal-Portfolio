
let tabcontents = document.getElementsByClassName("tab-contents");
let tablinks = document.getElementsByClassName("tab-links");

function opentab(tabname) {
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}