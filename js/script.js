var mb = document.getElementById("menu-mobile")
var menu = document.getElementById("menu")
var price = document.getElementById("price")
var filter = document.getElementById("price_filter")
mb.addEventListener("click", to_open)


function alterar() {
    filter.innerHTML = `R$ ${price.value}`
}

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
