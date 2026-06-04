const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

document
.getElementById("showSignup")
.addEventListener("click", function(e){

e.preventDefault();

loginForm.classList.remove("active");
signupForm.classList.add("active");

});

document
.getElementById("showLogin")
.addEventListener("click", function(e){

e.preventDefault();

signupForm.classList.remove("active");
loginForm.classList.add("active");

});

/* Cursor Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

/* Password Toggle */

document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", () => {

        const input = toggle.parentElement.querySelector("input");

        if (input.type === "password") {
            input.type = "text";
            toggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            input.type = "password";
            toggle.innerHTML = '<i class="fas fa-eye"></i>';
        }

    });
});