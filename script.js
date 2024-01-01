//js for making header sticky
const header = document.querySelector("header");
const stick = header.offsetTop;
function handleScroll() {
    if (window.scrollY > stick) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}
window.addEventListener("scroll", handleScroll);



//js for theme change
let change = document.getElementById("icon");
change.onclick = function theme() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        change.src = "images/moon.svg";
    }
    else {
        change.src = "images/sun.svg";
    }
}



//js for scroll up 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    window.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);



//js for filling up the form
let send = document.querySelector("#btn");
let namef = document.querySelector('#fname');
let name = document.querySelector(".name-details");
let message = document.querySelector(".message");
let email = document.querySelector("#email");
let emailf = document.querySelector(".email-details");
let error = document.querySelector(".error");
let emailPattern;

send.addEventListener("click", function() {
    //js to enter name in the form
    let setName = namef.value.trim();
    let setEmail = email.value.trim();

    if (setName === "") {
        namef.style.borderBottom = "1px solid red";
        message.style.display = "block";
    } else {
        namef.style.borderBottom = "1px solid rgb(158, 60, 163)";
        message.style.display = "none";
    }

    //js to enter email in the form
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(setEmail)) {
        emailf.style.borderBottom = "1px solid rgb(158, 60, 163)";
        error.style.display = "none";
    } else {
        emailf.style.borderBottom = "1px solid red";
        error.style.display = "block";
    }

    //js to display an appropriate message
    if (setName === "" || setEmail === "") {
        message.textContent = "Please enter your name!";
    } else {
        message.textContent = "Your message has been sent!";
        window.alert("Your message has been sent!");
    }
});