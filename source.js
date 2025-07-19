 

const reset=document.querySelector("#resetButton");
const container=document.querySelector(".container");

function input(){
    let n;
    n=parseInt(prompt("enter the grid size"));
    if(n>100||n<0)
        n=100;
    return n;
}

function createGrid(n){
    for(let i=0;i<n;i++){
    let column=document.createElement("div");
    column.setAttribute("class","column")
    container.appendChild(column);
    for(let i=0;i<n;i++){
        let row=document.createElement("div");
        row.setAttribute("class","row")
        column.appendChild(row);  
    }   
}

}

function draw(){
    
let myRow=document.querySelectorAll(".row");
        myRow.forEach((block)=>{
            block.addEventListener("mouseover",(e)=>{
            block.style.backgroundColor="black";
            
        });
    });

}

reset.addEventListener("click",(button)=>{
    container.replaceChildren();

    input=parseInt(prompt("enter the grid size"));
        if(input>100||input<1)
            input=100;
    createGrid(input);
    draw();
    
});


createGrid(input());
draw();

