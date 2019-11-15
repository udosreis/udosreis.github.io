let pages = ["ABOUT ME","PROJECTS","CONTACT ME"]
let pagesId = ["about-page","project-page","contact-page"]
currentPage = 0

function changePage(num, page) {
    document.getElementById(page).scrollIntoView()
}

function changeSideBar(num) {
    currentPage = num
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("side-menu")[0].getElementsByTagName("a")[i].className = ""
    }
    document.getElementsByClassName("side-menu")[0].getElementsByTagName("a")[num].className = "selected"
    document.getElementById("np-indicator").innerHTML = pages[num] || "CONTACT ME"
    document.getElementsByClassName("next-page")[0].getElementsByTagName("a")[0].setAttribute("href","javascript:changePage("+(num+1)+",'"+pagesId[num]+"')")
    if (num == 3) {
        document.getElementsByClassName("next-page")[0].style.transform = "translate(-50%,0%)"
    }
    else {
        document.getElementsByClassName("next-page")[0].style.transform = "translate(-50%,-100%)"
    }
}

function scrollPosition() {
    var target = document.getElementsByClassName("all-content")[0]
    var height = target.scrollHeight
    var perScrolled = target.scrollTop/height * 100
    if (perScrolled < 12.5) {
        changeSideBar(0)
    }
    else if (perScrolled < 37.5) {
        changeSideBar(1)
    }
    else if (perScrolled < 62.5) {
        changeSideBar(2)
    }
    else {
        changeSideBar(3)
    }
}