const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const imageYoshi = document.getElementById("yoshi");


function onclick_addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        newListItem = document.createElement("li");
        newListItem.innerHTML = inputBox.value;
        listContainer.appendChild(newListItem);
        let span = document.createElement("span");
        span.innerHTML ='\u00d7'
        newListItem.appendChild(span);
    }
    // damit dannach die box wieder leer ist
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

