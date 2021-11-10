var screenText = document.getElementById("screen-text");
var numberButtons = document.getElementsByClassName("number");
var clearButton = document.getElementById("clear");
var operationsButtons = document.getElementsByClassName("operation");

var operationsArr = [];

function stringNumToInt(stringNum) {
    if (stringNum == "zero") return 0;
    if (stringNum == "one") return 1;
    if (stringNum == "two") return 2;
    if (stringNum == "three") return 3;
    if (stringNum == "four") return 4;
    if (stringNum == "five") return 5;
    if (stringNum == "six") return 6;
    if (stringNum == "seven") return 7;
    if (stringNum == "eight") return 8;
    if (stringNum == "nine") return 9;
}

function operationMath(result, current){
    if (result.operation == "plus") {
        result.num = result.num + current.num;
    }
    if (result.operation == "minus") {
        result.num = result.num - current.num;
    }
    if (result.operation == "times") {
        result.num = result.num * current.num;
    }
    if (result.operation == "divide") {
        result.num = result.num / current.num;
    }
    return result;
}

Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener("click", function () {
        console.log(numberButton.innerText)
        screenText.innerText += stringNumToInt(numberButton.id);

    })
})

clearButton.addEventListener("click", function () {
    screenText.innerText = "";
})

Array.from(operationsButtons).forEach(operationsButton => {
    operationsButton.addEventListener("click", function () {
        console.log(operationsArr.length);
        operationsArr.push({
            num: parseInt(screenText.innerText),
            operation: operationsButton.id
        });
        console.log(JSON.parse(JSON.stringify(operationsArr)));
        if(operationsArr.length == 2){
            screenText.innerText = "";
            operationsArr[0] = operationMath(operationsArr[0], operationsArr[1])
            operationsArr[0].operation = operationsArr[1].operation;
            operationsArr.pop();
            screenText.innerText = operationsArr[0].num;
        }
        else {
            screenText.innerText = "";
        }
        
    })
})