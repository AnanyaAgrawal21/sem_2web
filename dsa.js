// Selecting elements
const para = document.getElementsByClassName('para');
console.log(para);

const para2 = document.querySelectorAll('.para');
console.log(para2);

// Array forEach
let arr = [23, 45, 235, 56, 54];
arr.forEach((ele) => console.log(ele));

// InnerHTML
const container = document.querySelector(".container");
container.innerHTML = "<h1>This is a heading</h1>";
console.log(container);

// Button class
const btn = document.querySelector("button");
btn.classList.add("btn");
console.log(btn);

// Click & Stop buttons
const click = document.querySelector("#click");
const stop = document.querySelector("#stop");

btn.classList.add("stop");

// Click function
function print() {
    console.log("Hello you have clicked the button");
}

// Add click listener
btn.addEventListener('click', print);

// Stop message function
function message() {
    console.log("stop button clicked!!");
}

// Stop button removes click listener
stop.addEventListener('click', () => {
    console.log("stop button clicked!!");
    btn.removeEventListener('click', print);
});

// Keyup event
click.addEventListener('keyup', message);

// Form submit
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form Submitted!!");
});

// Event bubbling & capturing
const div = document.querySelector('.container');
const outerDiv = document.querySelector('.outer');

div.addEventListener('click', () => {
    console.log('Clicked the Div');
}, false);

outerDiv.addEventListener('click', () => {
    console.log('Clicked the outer Div');
}, true);

// Variables
let a = 678;
let b = 879;

console.log(a);
console.log(b);

// Function scope
function print2() {
    let c = 63;
    console.log(c);
    console.log("inside function");
}
print2();

// Call stack trace
function first() {
    second();
}
function second() {
    third();
}
function third() {
    console.trace();
}
first();

// ❌ Infinite loop REMOVED (for safety)
// function infinite() {
//     infinite();
// }
// infinite();

// Closure example
let total = 100;

function calculate() {
    console.log(total);
}

calculate();

// setTimeout
console.log("first element");

setTimeout(() => {
    console.log("line after 2 sec");
}, 2000);

console.log("login to dashboard");

// setInterval
let count = 1;

const timerId = setInterval(() => {
    if (count === 10) {
        clearInterval(timerId);
    }
    console.log(count);
    count += 1;
}, 1000);
const name=document.querySelector("#name")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener('click',()=>{
    const li=document.createElement{'li'}
    const dlt=document.createElement{'button'}
    dlt.innerText="delete"
    li.innerText=name.value;
    list.appendChild(li)
    list.appendChild(dlt)

    name.value=""
})
console.log("Starting homework...");

setTimeout(() => {

console.log("Homework done!");

console.log("Starting dinner...");

setTimeout(() => {

console.log("Dinner done!");

console.log("Getting ready to go out...");

setTimeout(() => {

console.log("Going to the playground!");

}, 1000); // after dinner

}, 1500); // dinner time

}, 2000); // homework time