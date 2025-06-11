const container = document.querySelector("#container");
let divId = 0;

for(let i=0;i<16;i++){
    const divCreated = document.createElement("div");
    divCreated.className = "divContainer";
    divCreated.id = i;
    container.appendChild(divCreated);

    for(let j=0;j<16;j++){
        const divCreatedChild = document.createElement("div");
        divCreatedChild.className = "square";
        divCreatedChild.id = divId;
        divId++;
        divCreated.appendChild(divCreatedChild);
    }
}

const squareDivs = document.querySelectorAll(".square");
squareDivs.forEach((div) =>{
    div.addEventListener("mouseover",(event)=>{
    const target = event.target;

    target.style.backgroundColor = "black";
    });
});