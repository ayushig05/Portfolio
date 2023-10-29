//js for making header sticky
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});



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



//js for enter name in form
let send = document.querySelector("#btn");
let namef = document.querySelector('#fname');
let name = document.querySelector(".name-details");
let message = document.querySelector(".message");
send.addEventListener("click", function() {
    let set = namef.value.trim();
    if (set === "") {
        namef.style.borderBottom = "1px solid red";
        message.style.display = "block";
    }
    else {
        namef.style.borderBottom = "1px solid rgb(158, 60, 163)";
        message.style.display = "none";
    }
});



//js for enter email in form
let email = document.querySelector("#email");
let emailf = document.querySelector(".email-details");
let error = document.querySelector(".error");
let emailPattern;
send.addEventListener("click", function() {
const reversedStr = [...email.value].reverse().join("");
emailPattern = reversedStr.slice(0,10);
emailPattern = [...emailPattern].reverse().join("");
    if(emailPattern === "@gmail.com") {
        emailf.style.borderBottom = "1px solid rgb(158, 60, 163)";
        error.style.display = "none";
        window.alert("Your message has been sent!");
    }
    else {
        emailf.style.borderBottom = "1px solid red";
        error.style.display = "block";
    }
});