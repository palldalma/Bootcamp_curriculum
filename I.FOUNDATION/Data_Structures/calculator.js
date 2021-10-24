
let myAdd = function (num1, num2) {
    return (num1 + num2);
};

let substract = function (num1, num2) {
    return (num1 - num2);
};

let multiply = function (num1, num2) {
    return (num1 * num2);
};

let divide = function (num1, num2) {
    return (num1 / num2);
};

let modulus = function (num1, num2) {
    return (num1 % num2);
};


let calculate = function (symbol, num1, num2) {

    if (symbol === "+") {
        console.log(add(num1, num2));

    } else if (symbol === "-") {
        console.log(substract(num1, num2));

    } else if (symbol === "/") {
        console.log(divide(num1, num2));

    } else if (symbol === "*") {
        console.log(multiply(num1, num2));

    } else if (symbol === "%") {
        console.log(modulus(num1, num2));

    } else {
        console.log("invalid input");
    }
}
const args = process.argv.splice(2);

if (args.length !== 3) {
    (console.log("Parameters are missing or they are provided in the wrong format"));
}

calculate(args[0], args[1], args[2]);

console.log("goodbye");
