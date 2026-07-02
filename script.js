let btn = document.querySelector("#theme-toggle")
let body = document.querySelector("body")

btn.addEventListener("click",function(){
    body.classList.toggle("dark-mode")
})