var box=document.querySelector("#box");
var btn=document.querySelector("button");

addEventListener("click",function(){
    var a1=Math.floor(Math.random()*256)
    var a2=Math.floor(Math.random()*256)
    var a3=Math.floor(Math.random()*256)
    box.style.backgroundColor=`rgb(${a1},${a2},${a3})`
    console.log(a1)
    console.log(a2)
    console.log(a3)
})


