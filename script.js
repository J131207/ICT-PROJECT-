const about = document.getElementById("about");
const project = document.getElementById("projects");
const skill = document.getElementById("skills");
const contact = document.getElementById("contact");

function point() {
    alert("You Clicked On About");
}

function point1() {
    alert("You Clicked On Skill Set");
}

function point2() {
    alert("You Clicked On Project Set");
}

function point4() {
    alert("You Clicked On Certificates Set");
}

function con() {
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("email-error");
    const emailValue = emailInput.value.trim();

    errorMsg.textContent = "";

    if (emailValue === "") {
        errorMsg.textContent = "Please enter your email";
        return;
    }

    if (!emailValue.includes("@")) {
        errorMsg.textContent = "Email must contain '@'";
        return;
    }

    alert("Your message has been successfully sent!");
}
