const imgArray=[
`img/01.webp`,
`img/02.webp`,
`img/03.webp`,
`img/04.webp`,
`img/05.webp`,
]
// array con img
console.log(imgArray.length)
let box=document.getElementById("output");
let attiva = 0;
// definisco container e variabile puntatore(active)

for (let i = 0; i < imgArray.length; i++){
 box.innerHTML+=`
    <div class="webapp none" id="img-${i}">
      <img src="${imgArray[i]}" alt="">
    
    </div>
   `
}
// inserisco le img

document.querySelector('.webapp').classList.add('block');
// prendi primo div e applica la classe block per far apparire solo il primo div

let imgActive = document.getElementById("img-" + attiva);
imgActive.classList.add("block");
// immagini attive

const arrowLeft=document.getElementById("arrow-left");
const arrowRight=document.getElementById("arrow-right");
arrowLeft.addEventListener("click",prevImg);
arrowRight.addEventListener("click",nextImg);
// dichiarazione frecce e funzione ad evento al click

function prevImg() {
   attiva--;
   if (attiva < 0) {
     attiva = ((imgArray.length)-1);
   }
   imgActive.classList.remove("block");
   imgActive = document.getElementById("img-" + attiva);
   imgActive.classList.add("block");
  imgActive.classList.add("animate__animated")
  imgActive.classList.add("animate__bounceInRight")
 }
//  decrease active fino a quando diventa 0 (mostrando la prima img), quando è 0 al posto di andare a meno -1 gli diamo 4
 function nextImg() {
   attiva++;
   if (attiva > ((imgArray.length) -1)) {
     attiva = 0;
   }
   imgActive.classList.remove("block");
   imgActive = document.getElementById("img-" + attiva);
   imgActive.classList.add("block");
   imgActive.classList.add("animate__animated")
   imgActive.classList.add("animate__bounceInLeft")
 }
//  increase active fino a quando diventa 4(mostrando l'ultima img), quando è 4 al posto di andare a 5 diamo ad active 0


