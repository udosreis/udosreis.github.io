window.onload() = animBckg()

function animBckg() {
    var date = new Date();
    var current_hour = date.getHours();
    if (current_hour < 5) {
        document.body.style.backgroundImage = "radial-gradient(closest-side at 42% 18%, #081F40 59%, #041022 100%);"
    }
    else if (current_hour < 7) {
        document.body.style.backgroundImage = "radial-gradient(closest-side at 42% 18%, #081F40 59%, #041022 100%);"
    }
    else if (current_hour < 17) {
        document.body.style.backgroundImage = "radial-gradient(closest-side at 42% 18%, #1A7AFF 59%, #5893E4 100%);"
    }
    else if (current_hour < 19) {
        document.body.style.backgroundImage = "radial-gradient(closest-side at 42% 18%, #081F40 59%, #041022 100%);"
    }
    else {
        document.body.style.backgroundImage = "radial-gradient(closest-side at 42% 18%, #081F40 59%, #041022 100%);"
    }
}