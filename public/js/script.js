// Elements initialization
const div = document.querySelector(".div");
let counter = document.createElement("p");
let space = document.createElement("br");
let incrementButton = document.createElement("button")
let decreaseButton = document.createElement("button")

// Assigning values
counter.innerText = 0;
incrementButton.innerHTML = "+";
decreaseButton.innerHTML = "-";

// Function to append items and Tailwind CSS class
document.addEventListener("DOMContentLoaded", function () {
    div.appendChild(counter);
    div.appendChild(incrementButton);
    div.appendChild(space)
    div.appendChild(decreaseButton);
    counter.classList.add("font-semibold","text-5xl", "md:text-8xl", "lg:text-8xl", "font-grotesk");
    incrementButton.classList.add("text-5xl", "rounded-lg", "mt-12", "mb-1", "h-16", "w-80", "border-2", "border-blue", "bg-blue", "font-grotesk");
    decreaseButton.classList.add("text-5xl", "rounded-lg", "mt-2", "h-16", "w-80", "border-2", "border-blue", "bg-blue", "font-grotesk")
})

// EventListener for click
incrementButton.addEventListener("click", increment)
decreaseButton.addEventListener("click", decrement)

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
