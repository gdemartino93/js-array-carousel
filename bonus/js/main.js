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
console.log(bigImg)
console.log(minImg)
// Dichiaro i due container delle img e puntatore

for (let i = 0 ; i < imgArray.length ; i++) {
  bigImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="none" id="img-${i}">`
  minImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="none" id="min-${i}">`
}
// Inseriamo le img grandi e piccola

let bigActive=document.getElementById("img-" + attiva)
let minActive=document.getElementById("min-" + attiva)
console.log(bigActive)
console.log(minActive)

bigActive.classList.add("block");
minActive.classList.add("block");
// Blocchiamo la priam img

