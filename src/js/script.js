let counter = document.querySelector(".value");

// Function to set the value
document.addEventListener("DOMContentLoaded", function () {
    counter.innerHTML = 0;
})

// Function to increase the value
function increment(){
    stringValue = counter.innerText;
    intValue = Number.parseInt(stringValue);
    finalValue = intValue + 1;
    counter.innerHTML = finalValue;
}

//Function to decrement the value
function decrement(){
    stringValue = counter.innerText;
    intValue = Number.parseInt(stringValue);
    finalValue = intValue - 1;
    counter.innerHTML = finalValue;
}
