var username = JSON.parse(localStorage.getItem("username"))
var logout = document.getElementById("logout")


document.getElementById("massage").innerHTML += username
logout.addEventListener("click", function () {

    localStorage.removeItem("username")
    window.location = "./index.html"
})
