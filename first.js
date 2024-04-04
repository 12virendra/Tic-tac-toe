let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newntn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=true;//playerX playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
         if (turn===true){
            box.style.color="yellow"
             box.innerText="O";
             turn=false;
         }
         else{
          box.style.color="skyblue"
             box.innerText="X";
             turn=true;
         }
        box.disabled=true;
        checkwinner();

    });
    });

    const enableBoxes=()=>{
      for(let box of boxes){
          box.disabled=false;
          box.innerText="";
      }
  };
  
    const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    };
    
    const showwinner=(winner)=>{
      msgcontainer.classList.remove("hide");
        msg.innerText=`congratulation,winner is ${winner}`;
        
        disabledBoxes();
    }
  const checkwinner=()=>{
    for(let pattern of winpatterns){
      let pos1val=boxes[pattern[0]].innerText
      let pos2val=boxes[pattern[1]].innerText
      let pos3val=boxes[pattern[2]].innerText
      if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
          showwinner(pos1val);
        }
      }
    }

  };
  newntn.addEventListener("click",resetgame);
  reset.addEventListener("click",resetgame);

