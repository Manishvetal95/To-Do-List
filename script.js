const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add the delete icon (x)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (x)
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear input field
    saveData(); // Save to local storage
}


inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Event Listener for Checking and Deleting
listContainer.addEventListener("click", function(e){
    // If clicked on LI tag (the text)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // If clicked on SPAN tag (the x icon)
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save Data to Local Storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load Data from Local Storage on refresh
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();