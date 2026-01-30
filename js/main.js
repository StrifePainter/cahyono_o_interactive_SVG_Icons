console.log("JS file is connected");

// Variables
const cherry = document.querySelector("#cherries");
console.log(cherry);

// Functions

function logId() {
    console.log("User Clicked On:", this.id)
}

// EventListener

cherry.addEventListener("click", logId);