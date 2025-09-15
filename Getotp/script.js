var btn=document.querySelector("button");
var h1=document.querySelector("h1");

btn.addEventListener("click",function(){
    var a1 = Math.floor(Math.random()*10)
    var a2 = Math.floor(Math.random()*10)
    var a3 = Math.floor(Math.random()*10)
    var a4 = Math.floor(Math.random()*10)
    h1.innerHTML = `${a1} ${a2} ${a3} ${a4}`

})