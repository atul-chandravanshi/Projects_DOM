var box=document.querySelector(".box")
var btn=document.querySelector("button")
var arr=["rectangle","triangle","star","pentagon","hexagon","square","rhombus","circle"]
btn.addEventListener("click",function(){

    var a=Math.floor(Math.random()*arr.length)
    box.classList.add(arr[a])

})