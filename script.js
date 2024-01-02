//your JS code here. If required.

function outerFunction() {
    console.log("Entering outerFunction");
    middleFunction();
    console.log("Leaving outerFunction");
}

function middleFunction() {
    console.log("Entering middleFunction");
    innerFunction();
    console.log("Leaving middleFunction");
}

function innerFunction() {
    console.log("Entering innerFunction");
    console.log("Leaving innerFunction");
}

console.log("Start of the program");
outerFunction();
console.log("End of the program");
