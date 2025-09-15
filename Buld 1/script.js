var circle=document.querySelector("#circle");
var btn=document.querySelector("button");
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
    circle.style.backgroundColor="yellow";
    flag=1;
    }
    else{
    circle.style.backgroundColor="black";
    flag=0;
    }
})