var main=document.querySelector("main")
var h1=document.querySelector("h1")

document.addEventListener("keydown",function(dets){
    if(dets.keyCode == 32)
    {
        h1.textContent = "SPC"
    }
    else{

        h1.textContent = dets.key
    }
    console.log(dets)
})
