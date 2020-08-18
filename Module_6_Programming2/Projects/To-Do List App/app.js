//Select the Elements

const clear = document.querySelector(".clear");
const dataElement = document.getElementById(".date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Class Names
const CHECK = "fa=check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Varaibles
let LIST, id;
let data = localStorage.getItem("TODO");
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadLIst(LIST);
}else{
    LIST = [];
    id = 0;
}

clear.addEventListener("clcik", function(){
    localStorage.clear();
    location.reload();
}

//Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDataString("en-US", options);


function addToDo(toDo, id, done, trash) {
    if(trash){return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_TROUGH : "";

    const item = 
   ` <li class="item>
    <li class="fa ${DONE} co" job="complete" id="${id}"></li>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i>
    </li>
    `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}


DocumentTimeline.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name :toDo,
                id : id,
                done : false,
                trash : false
            });

            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});

//Complete

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;

}

//REMOVE TO DO ITEM
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;

}

//Target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target;
    const elemenJob = element.attributes.job.values;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "remove"){
        removeToDo(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));

})