var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var h1 = document.querySelector("h1")
var id = document.querySelector("a102")
btn1.addEventListener("click",function(){
    var a1 = Math.floor(Math.random()*10)
    var a2 = Math.floor(Math.random()*10)
    var a3 = Math.floor(Math.random()*10)
    var a4 = Math.floor(Math.random()*10)
    h1.innerHTML = `${a1} ${a2} ${a3} ${a4}`
})
console.log(a1,a2,a3,a4)