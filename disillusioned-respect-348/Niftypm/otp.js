

let verifyfun = () => {

     let ip1 = document.getElementById("ip1").value = ""
     let ip2 = document.getElementById("ip2").value = ""
     let ip3 = document.getElementById("ip3").value = ""
     let ip4 = document.getElementById("ip4").value = ""
     alert("Email verifed")
     window.location.href = "userdetails.html"
}
document.getElementById("verify").addEventListener("click", verifyfun)