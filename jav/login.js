var nameinput = document.getElementById("nameinput")
var emailinput = document.getElementById("emailinput")
var pass = document.getElementById("pass")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")

var accountinputs = []

if (localStorage.getItem("container") !== null) {
    accountinputs = JSON.parse(localStorage.getItem("container"))
}

signin.addEventListener("click", function (e) {
    e.preventDefault();
    window.location = "./index.html"
})

signup.addEventListener("click", function () {
    if (nameinput.value == "" || emailinput.value == "" || pass.value == "") {
        document.getElementById("massage").innerHTML = `
         <span class="text-danger">All inputs is required</span>
            `
    }
    else if (validname() && validemail() && validpass()) {
        if (checkemail()) {
            document.getElementById("massage").innerHTML = `
            <span class="text-danger">this email is existing</span>
`
        }
        else {
            var account = {
                name: nameinput.value,
                email: emailinput.value,
                pass: pass.value
            }
            accountinputs.push(account)
            localStorage.setItem("container", JSON.stringify(accountinputs))
            document.getElementById("massage").innerHTML = `
                  <span class="text-success">Success</span>
`
            clearform()
        }
    }
    else {
        document.getElementById("massage").innerHTML = `
                 <span class="text-danger">not valid</span>

`
    }
})

function validname() {
    var regex = /^[A-Z][a-z]{3,9}$/
    if (regex.test(nameinput.value)) {
        return true
    }
    return false
}

function validemail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (regex.test(emailinput.value)) {
        return true
    }
    return false
}

function validpass() {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    if (regex.test(pass.value)) {
        return true
    }
    return false
}

function clearform() {
    nameinput.value = ""
    emailinput.value = ""
    pass.value = ""
}

function checkemail() {
    for (i = 0; i < accountinputs.length; i++) {
        if (emailinput.value.toLowerCase() == accountinputs[i].email.toLowerCase()) {
            return true
        }
    }
    return false
}
























