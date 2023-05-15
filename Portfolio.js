const skill = document.querySelector(".skill");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("content");

skill.addEventListener('click', (event) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById('skills').classList.add("active-tab");
});
experience.addEventListener('click', (event) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById('experience').classList.add("active-tab");
});
education.addEventListener('click', (event) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById('education').classList.add("active-tab");
});

const side = document.querySelector("#side-menu");

function openmenu() {
    side.style.right = "0px";
}

function closemenu() {
    side.style.right = "-200px";
}




window.addEventListener('resize', () => {
    if (gridContainer.offsetWidth < gridItems[0].offsetWidth * 2) {
        gridContainer.style.display = 'none';
    } else {
        gridContainer.style.display = 'grid';
    }
});

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 100

});

ScrollReveal().reveal('.about-col-1,.header-text p',{origin: 'top'});
ScrollReveal().reveal('.about-col-2,.service-list,.work-list,.social-icons,.contact p,.header-text h1',{origin: 'bottom'});
ScrollReveal().reveal('.h1-reveal',{origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings:['UI/UX Designer','Web Designer','Web Developer'],
    typeSpeed: 150,
    backDelay: 100,
    backSpeed : 100,
    loop : true
});
