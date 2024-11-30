var inputemail = document.getElementById("email")
var inputpass = document.getElementById("pass")
var massage = document.getElementById("empty")
var signup = document.getElementById("signup")

var inputlist = []

if (localStorage.getItem("container") != null) {
    inputlist = JSON.parse(localStorage.getItem("container"))
}

function checkinput() {
    if (inputemail.value == "" || inputpass.value == "") {
        document.getElementById("massage").innerHTML =
            ` 
        <span class="text-danger">All inputs is required</span>
      `
    }
    else if (checkacount()) {
        window.location = "./smart.html"
    }
    else {
        document.getElementById("massage").innerHTML =
            ` 
        <span class="text-danger">incorrect email or password</span>
      `
    }
}

signup.addEventListener("click", function(e){
    e.preventDefault()
    window.location = "./login.html"
})

function checkacount() {
    for (var i = 0; i < inputlist.length; i++) {
        if (inputemail.value.toLowerCase() == inputlist[i].email.toLowerCase() && inputpass.value.toLowerCase() == inputlist[i].pass.toLowerCase()) {
           localStorage.setItem("username" ,JSON.stringify( inputlist[i].name))
            return true
        }
    }
    return false
}

