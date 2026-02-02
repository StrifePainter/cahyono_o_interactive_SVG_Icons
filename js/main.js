console.log("JavaScript file is connected!");

const icon = document.querySelectorAll("svg");
console.log(icon);

function logId(){
    console.log(this.id);
}

icon.forEach(icon => icon.addEventListener('click', logId));