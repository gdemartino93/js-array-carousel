const imgArray=[
`img/01.webp`,
`img/02.webp`,
`img/03.webp`,
`img/04.webp`,
`img/05.webp`,
]
// array con img

let bigImg=document.getElementById("output");
let minImg=document.getElementById("colonna");
let attiva= 0;
let pointerAttiva=0;
let pointercontainer=document.getElementById("pointer-container");
// Dichiaro i due container delle img e puntatore

for (let i = 0 ; i < imgArray.length ; i++) {
  bigImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="none" id="img-${i}">`;
  minImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="" id="min-${i}">`
  pointercontainer.innerHTML+=`<div class="pointer" id="nr-${i}"></div>`
  var pointerActive=document.getElementById("nr-" + 0)
  var pointerUno=document.getElementById("nr-" + i)
  // pointerActive sono i cerchi rossi
}
// Inseriamo le img grandi e piccola

let bigActive=document.getElementById("img-" + attiva)
let minActive=document.getElementById("min-" + attiva)


bigActive.classList.add("block");
minActive.classList.add("block");
pointerActive.classList.add("pointer-active")
// Blocchiamo la prima img

let arrowUp= document.getElementById("arrow-up");
let arrowDown=document.getElementById("arrow-down");
// dichiaro frecce

arrowUp.addEventListener("click", slideUp)
arrowDown.addEventListener("click", slideDown)
// dichiaro le funzioni al click

function slideUp(){
 attiva--
 if (attiva < 0) {
  attiva=imgArray.length - 1
 }
 bigActive.classList.remove("block");
 minActive.classList.remove("active-colonna");
 bigActive=document.getElementById("img-" + attiva);
 minActive=document.getElementById("min-" + attiva);
 bigActive.classList.add("block");
 minActive.classList.add("active-colonna");
 pointerActive.classList.remove("pointer-active")
 pointerActive=document.getElementById("nr-" + attiva);
 pointerActive.classList.add("pointer-active")
}

 function slideDown(){
   attiva++
   if (attiva > ((imgArray.length)-1)) {
    attiva=0
   }
  
   bigActive.classList.remove("block");
   minActive.classList.remove("active-colonna");
   bigActive=document.getElementById("img-" + attiva);
   minActive=document.getElementById("min-" + attiva);
   bigActive.classList.add("block");
   minActive.classList.add("active-colonna");
   pointerActive.classList.remove("pointer-active")
   pointerActive=document.getElementById("nr-" + attiva);
   pointerActive.classList.add("pointer-active")
  }

 var slider=document.getElementById("output")
 function pointerLink(){  
  bigActive.classList.remove("block")
  bigActive.innerHTML=`<img src="${imgArray[2]}" alt="" class="">`
  bigActive.classList.add("block")
 }

