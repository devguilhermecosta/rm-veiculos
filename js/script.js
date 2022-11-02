var mb = document.getElementById("menu-mobile")
var menu = document.getElementById("menu")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
var container_sell = document.getElementById("container-sell")
mb.addEventListener("click", to_open)


function to_open() {
    if (window.innerWidth < 768) {
        if (menu.style.display == "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    } else {
        menu.style.display = "block"
    }
}
