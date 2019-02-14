// last part of the vid has him putting the var average outside of the function but I am not going to do that since it isn't used elsewhere and doesn't need to be a global variable.

function getAverage(a, b, c, d, e, f) {

    var average = (a + b + c + d + e + f) / 6; //local variable
    console.log(average);
    return average;

}

var myResult = getAverage(7, 8, 9, 10, 11, 12); //global variable

function logResult() {

    console.log("the average is " + myResult + " inside the function");
}

logResult();