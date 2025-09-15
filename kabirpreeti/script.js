 var h1=document.querySelector("h1")
 var kabir=document.querySelector("#kabir")
 var preeti=document.querySelector("#preeti")
 var main=document.querySelector("#main")

 preeti.addEventListener("mousemove",function(){
    h1.innerHTML="bhag ja madarchod"
    kabir.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBc22lwQKLP5uptTZukbfU9DQFH--8KTeXQ&usqp=CAU")
   main.style.backgroundColor="red";
 })
 preeti.addEventListener("mouseleave",function(){
    h1.innerHTML="preeti sirf meri hein "
    kabir.setAttribute("src","https://m.media-amazon.com/images/M/MV5BOTViMWM5YWEtODVmZS00NjczLTg2ODUtMTAyNmMwYjMxN2NmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg" )
    main.style.backgroundColor="pink";
 })


