console.log("JS file is connected");

// Variables

const present = document.querySelector("#Present");
console.log(present);

const leaf = document.querySelector("#Leaf");
console.log(leaf);

const banana = document.querySelector("#Banana");
console.log(banana);

const bag = document.querySelector("#Bag");
console.log(bag);

const fossil = document.querySelector("#Fossil");
console.log(fossil);

const flower = document.querySelector("#flower");
console.log(flower);

// Functions

function logId() {
    console.log("User Clicked On:", this.id)
}

// EventListener

present.addEventListener("click", logId);

leaf.addEventListener("click", logId);

banana.addEventListener("click", logId);

bag.addEventListener("click", logId);

fossil.addEventListener("click", logId);

flower.addEventListener("click", logId);