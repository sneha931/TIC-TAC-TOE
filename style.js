let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let p1=prompt("enter player1 name:");
let p2=prompt("enter player2 name:")
let turnO=true;
const WinPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],[1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
];
const resetGame = () => {
  turnO =true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
   box.addEventListener("click",()=>{
      if(turnO){
        box.innerText = "O";
        turnO=false;
      }
      else{
        box.innerText = "X";
        turnO=true;
      }
      box.disabled = true;
      checkWinner();
   });
});
const disableBoxes = () => {
  for(let box of boxes){
    box.disabled=true;
  }
};
const enableBoxes = () => {
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const showWinner =(winner) => {
  if(winner==="O"){
    winner=p1;
    msg.innerText=`Congratulations, Winner is ${winner}🥇\nRunner is ${p2}🥈`;
  }
  else{
      winner=p2;
      msg.innerText=`Congratulations, Winner is ${winner}🥇\nRunner is ${p1}🥈`;
  }
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
    for(let pattern of WinPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
        if(pos1val !=""&& pos2val !="" && pos3val!=""){
          if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
          }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);