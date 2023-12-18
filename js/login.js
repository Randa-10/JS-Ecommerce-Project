let userName = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click", function (e) {
        e.preventDefault()
        if (userName.value === "" || password.value === "") {
            alert("pleas fill form")
        } else {
            if ((getUser && getUser.trim() === userName.value.trim() && getPassword && getPassword === password.value)) {
                alert("you login successfully");


                setTimeout(() => {
                    window.location = "home.html"
                }, 1500)
            } else {

                alert("username or password is wrong");

            }
        }

    }

)