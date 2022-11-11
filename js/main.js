const imgArray=[
`img/01.webp`,
`img/02.webp`,
`img/03.webp`,
`img/04.webp`,
`img/05.webp`,
]

let box=document.getElementById("output")
// definisco container
const mybtn=document.getElementById("mybtn")
const arrowLeft=document.getElementById("arrow-left");
const arrowRight=document.getElementById("arrow-right");
// dEFinisco tasto e i due tag <a> arrow

// inserisco le img
for (let i = 0; i < imgArray.length; i++){
 box.innerHTML+=`
   <img src="${imgArray[i]}" alt="" class="d-none>`

 
 
 
 
}

mybtn.addEventListener("click",
function(){
}
)

