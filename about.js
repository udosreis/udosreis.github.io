currentPage = 0
function scrollPosition() {
    var height = window.innerHeight
    var distScrolled = document.body.scrollTop
    if (distScrolled >= height) {
        currentPage = 1
        document.getElementById("name").style.color = "#2C2C2C"
        document.getElementsByClassName("Logos")[0].style.fill = "#2C2C2C"
        document.getElementsByClassName("Logos")[1].style.fill = "#2C2C2C"
        document.getElementsByClassName("next-page")[0].style.opacity = 0.0
    }
    else {
        currentPage = 0
        document.getElementById("name").style.color = "#FFFFFF"
        document.getElementsByClassName("Logos")[0].style.fill = "#FFFFFF"
        document.getElementsByClassName("Logos")[1].style.fill = "#FFFFFF"
        document.getElementsByClassName("next-page")[0].style.opacity = 1.0
    }
}
