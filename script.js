let columns = 26;
let row = 100;
let headerContainer = document.querySelector(".header");
let serialNoContainer = document.querySelector(".sno");
let bodyMani = document.querySelector(".main")

function headerOne(){
    for(let i = 0;i <= columns; i++){
        let creatingHeaderBlocks = document.createElement("div");
        creatingHeaderBlocks.className = "headerblocks";
        if(i !== 0){
            creatingHeaderBlocks.innerText = String.fromCharCode(64+i);
        }
        headerContainer.appendChild(creatingHeaderBlocks);
    }
}
headerOne();

function serialNoOne(){
    for(let i = 1 ; i <= row ; i++){
        let createRowSnoBlocks = document.createElement("div");
        createRowSnoBlocks.className = "row-blocks";
            createRowSnoBlocks.innerText= i;
        serialNoContainer.appendChild(createRowSnoBlocks);
    }
}
serialNoOne()

function createRow(rowNumber){
    let rowsOfBody = document.createElement("div");
    rowsOfBody.className="rowsOfBody";
    for(let i=1;i<=columns;i++){
        let creatRowColumns = document.createElement("div");
        creatRowColumns.className = "creatRowColumns";
        creatRowColumns.contentEditable=true;
        rowsOfBody.appendChild(creatRowColumns);

        creatRowColumns.id = String.fromCharCode(64+i)+rowNumber;
        creatRowColumns.addEventListener("focus",focusOnMe);
    }
    bodyMani.appendChild(rowsOfBody);
}
function runningBodyRow(){
    for(let i=1 ; i <= row;i++){
        createRow(i)
    }
}
runningBodyRow();

const activeCell = document.querySelector(".active-call");
function focusOnMe(event){
    activeCell.innerText = event.target.id;
}

