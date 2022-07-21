document.querySelector("#bt-login").addEventListener("click", submited)
function submited() {
    event.preventDefault();
    let mail = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let data = {
        email: mail,
        password: password
    }
    localStorage.setItem("Login_data", JSON.stringify(data))

}



