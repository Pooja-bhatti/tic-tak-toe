let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let mesg=document.querySelector(".mesg");
let mesgcon=document.querySelector(".mesg-c");
let div=document.querySelector(".con");
let h1=document.querySelector("h1");
let turnx=true//player x, player y
let count=0;
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,7]];



boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box");
        if(turnx==true){
            box.innerText="X";
            turnx=false;
        }
        else{
                box.innerText="O";
                turnx=true;
            
        }
        box.setAttribute("disabled", true);
        count++;
        let isWinner=checkwinner();
        if(count==9 && !isWinner){
            gamedraw();
        }
    })
})

const gamedraw=()=>{
    mesg.innerText=`Game was a Draw`;
    mesgcon.classList.remove("hide");
    div.classList.add("hidediv");
    h1.classList.add("hidediv");
    disableBoxes();

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.setAttribute("disabled", true);

    }
};
  
const enableBoxes = () => {
    for (let box of boxes) {
      box.removeAttribute("disabled");

      box.innerText = "";
    }
    count = 0;
};

const showWinner=(winner)=>{
    mesg.innerText=`Congaratulation! Winner ${winner}`;
    mesgcon.classList.remove("hide");
    div.classList.add("hidediv");
    h1.classList.add("hidediv")
    disableBoxes();


}
const checkwinner=()=>{
    for( let p of winPattern){
        let b1=boxes[p[0]].innerText;
        let b2=boxes[p[1]].innerText;
        let b3=boxes[p[2]].innerText;
        if(b1!=""&& b2!=""&& b3!=""){
            if(b1==b2 && b2==b3){
                console.log("winner ",b1);
                showWinner(b1);
                return true;
                
            }
        }

    }
    return false;
}


reset.addEventListener("click", () => {
    enableBoxes();
    div.classList.remove("hidediv");
    h1.classList.remove("hidediv") 
    turnx = true; 
    mesgcon.classList.add("hide"); 
});
  

  