 var a=document.querySelector("#circle");
 var btn1=document.querySelector("#button1");
 var btn2=document.querySelector("#button2");


 btn1.addEventListener("click",function(){
    
    a.style.backgroundColor="yellow";
    console.log(a)

 })
 btn2.addEventListener("click",function(){
    
    a.style.backgroundColor="red";

 })

 