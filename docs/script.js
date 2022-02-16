function init() {
    var btn = document.querySelectorAll("button.contact-button");

    btn.forEach(element => element.addEventListener("click", showContent));
}

function showContent(e) {
    var srcElem = e.target.id
    console.log(srcElem)

    var buttonElem = document.getElementById(srcElem)
    var contentElem = document.getElementById(srcElem.replace("-button", ""))

    buttonElem.style.visibility = "hidden";
    buttonElem.style.display = "none";
    contentElem.style.visibility = "visible";
    contentElem.style.display = "flex";
}