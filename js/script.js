var mb = document.getElementById("menu-mobile")
var menu = document.getElementById("menu")
mb.addEventListener("click", to_open)

function to_open() {
    if (menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}