currentPage = 0
function scrollPosition() {
    var height = window.innerHeight
    var distScrolled = document.body.scrollTop
    if (distScrolled >= height) {
        currentPage = 1
        document.getElementById("name").style.color = "#2C2C2C"
        document.getElementsByClassName("Logos")[0].style.fill = "#2C2C2C"
        document.getElementsByClassName("Logos")[1].style.fill = "#2C2C2C"
    }
    else {
        currentPage = 0
        document.getElementById("name").style.color = "#FFFFFF"
        document.getElementsByClassName("Logos")[0].style.fill = "#FFFFFF"
        document.getElementsByClassName("Logos")[1].style.fill = "#FFFFFF"
        document.getElementsByClassName("next-page")[0].style.display = "block"
    }
    if (distScrolled > 80) {
        document.getElementsByClassName("next-page")[0].style.display = "none"
    }
}
