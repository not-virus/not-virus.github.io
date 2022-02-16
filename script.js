/* I've never written JS before! Woohoo! */

function init() {
    var buttons = document.querySelectorAll("button.contact-button");
    buttons.forEach(element => element.addEventListener("click", showContent));

    var projects = document.querySelectorAll("div.project-section")
    projects.forEach(element => element.addEventListener("click", goToProject))
}

function showContent(e) {
    var srcElem = e.target.id
    console.log(srcElem)

    var buttonElem = document.getElementById(srcElem)
    var contentElem = document.getElementById(srcElem.replace("-button", ""))

    buttonElem.style.visibility = "hidden";
    buttonElem.style.display = "none";
    contentElem.style.visibility = "visible";
    contentElem.style.display = "block";
}

function goToProject(e) {
    var srcElem = e.target.id
    console.log(srcElem)

    switch (srcElem) {
        case "matrix-keyboard-pi":
            window.open("https://github.com/not-virus/matrix-keyboard-pi", '_blank')
            break;
        default:
            break;
    }
}