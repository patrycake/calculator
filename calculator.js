var screenText = document.getElementById("screen-text");
var numberButtons = document.getElementsByClassName("number");

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

Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener("click", function () {
        console.log(numberButton.innerText)
        screenText.innerText += stringNumToInt(numberButton.id);
        
    })
})