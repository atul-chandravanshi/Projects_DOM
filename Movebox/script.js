var box = document.querySelector("#box")
var valX = 0;
var valY = 0;
    document.addEventListener("keydown",function(dets){
        if(dets.key=='ArrowRight')
        {   
            valX+=10;
            box.style.left = valX+"px"
            console.log(dets.key)
        }
        if(dets.key=='ArrowLeft'){
            valX-=10;
            box.style.left = valX+"px"
            console.log(dets.key)
        }
        if(dets.key=='ArrowUp'){
            valY-=10;
            box.style.top = valY+"px"
            console.log(dets.key)
        }
        
        if(dets.key=='ArrowDown'){
            valY+=10;
            box.style.top = valY+"px"
            console.log(dets.key)
        }
                
    })
