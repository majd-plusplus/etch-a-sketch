 

let input;

    input=parseInt(prompt("enter the grid size"));
    if(input>100)
        input=100;



const container=document.querySelector(".container");
for(let i=0;i<input;i++){
    let column=document.createElement("div");
    column.setAttribute("class","column")
    container.appendChild(column);
    for(let i=0;i<input;i++){
        let row=document.createElement("div");
        row.setAttribute("class","row")
        column.appendChild(row);  
    }   
}

let myRow=document.querySelectorAll(".row");

    myRow.forEach((block)=>{

            block.addEventListener("mouseover",(e)=>{
            block.style.backgroundColor="black";


        });

    });


const reset=document.querySelector("#resetButton");
reset.addEventListener("click",(button)=>{
        myRow.forEach((block)=>{

            block.style.backgroundColor="white";

    });

    input=parseInt(prompt("enter the grid size"));
        if(input>100||input<1)
            input=100;
});