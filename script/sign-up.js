let sign_up = () => {
    return ` <div id="main_banner">
    <div id="box">
        <form action="">
            <img src="/images/nifty_form_logo.png" alt="Niftypm Logo">
            <h2>Get started in less <br> than 1 minute!</h2>
            <div>
                <input type="email" id="mail" placeholder="name@company.com" required="required">
                <button id="Get_btn">Get Started</button>
            </div>
        </form>
    </div>
</div>`
}
let catch_data = () => {
    document.querySelector("#Get_btn").addEventListener("click", myfun)
    let arr = JSON.parse(localStorage.getItem("email")) || [];
    function myfun() {
        let mail = document.querySelector("#mail").value
        let obj = {
            email: mail
        }
        arr.push(obj)
        localStorage.setItem("email", JSON.stringify(arr))
    }
    let ul = document.querySelector("#main_banner")
    ul.onclick = function (event) {
        // var target = getEventTarget(event);

        console.log(event.target.id)
        if (event.target.id === "main_banner") {
            ul.style.display = "none"
        }
    };
}
export { sign_up, catch_data };
