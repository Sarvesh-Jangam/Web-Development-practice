let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#r");
let winner=document.querySelector(".winner");
let ng=document.querySelector(".ng");
let Xturn=true;
let count=0;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const showWin = (box)=>{
    winner.innerText=`${box.innerText} Wins`;
    winner.classList.remove("winner");
    winner.classList.add("wino");
    stop();
};
const checkWinner = ()=>{
    for(let i of win){
        if(boxes[i[0]].innerText!=="" && boxes[i[1]].innerText!=="" && boxes[i[2]].innerText!=="" ){
            if(boxes[i[0]].innerText===boxes[i[1]].innerText && boxes[i[1]].innerText===boxes[i[2]].innerText){
                showWin(boxes[i[0]]);
                return true;
            }
        }
    }
    return false;
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(Xturn){
            console.log(box.style.color="rgb(42, 157, 143)");
            box.innerText="X";
            Xturn=false;
        }else{
            box.innerText="O";
            Xturn=true;
        }
        box.disabled=true;
        count++;
        if(checkWinner() || count===9){  
            setTimeout(() => location.reload(), 3000);
        }
    });
});
reset.addEventListener("click",()=>{
    location.reload();
});
ng.addEventListener("click",()=>{
    location.reload();
});