console.log("Starting homework...");

setTimeout(() => {

console.log("Homework done!");

console.log("Starting dinner...");

setTimeout(() => {

// / console.log("Dinner done!");

// console.log("Getting ready to go out...");

setTimeout(() => {

console.log("Going to the playground!");

}, 1000); // after dinner

}, 1500); // dinner time

}, 2000); // homework time


} console.log("Starting dinner..."); setTimeout(() => { console.log("Dinner done!"); callback(); }, 1500);

function goToPlayground() {

} console.log("Going to the playground!");

// Chained in steps, but cleaner

finishHomework(() => {

eatDinner(() => { });

goToPlayground();

});
const p=new Promise((res,rej))=>{
    let done=false
    setTimeout((=>)){
        if (done){
            res("Work is done!!")
        }else{
            rej("Work is done!!")
        },5000
        }
    }
console.log(p)
function doHomework() {

return new Promise((resolve, reject) => {

setTimeout(() => {

let homeworkDone = true;

if (homeworkDone) {

console.log("Homework is done");

resolve("Homework complete");

} else {

}

reject("Homework not done");

}, 3000);

});

}

