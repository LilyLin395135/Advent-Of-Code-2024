const input = "70949 6183 4 3825336 613971 0 15 182";
const blink = 25;

const numbers = input.split(" ");

const eliminateZero = (stringNumber) => {
    let newNumber = stringNumber;
    if (parseInt(newNumber) === 0) return "0";

    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i] === "0") {
            newNumber = stringNumber.slice(i + 1);
        }
        else break;
    }
    return newNumber;
};

const rules = (stringNumberList) => {
    const changedNumberList = [];
    for (let i = 0; i < stringNumberList.length; i++) {
        if (stringNumberList[i] === "0") changedNumberList.push("1");
        else if (stringNumberList[i].length % 2 === 0) {
            changedNumberList.push(eliminateZero(stringNumberList[i].slice(0, stringNumberList[i].length / 2)));
            changedNumberList.push(eliminateZero(stringNumberList[i].slice(stringNumberList[i].length / 2)));
        }
        else {
            changedNumberList.push(`${stringNumberList[i] * 2024}`);
        }
    };
    return changedNumberList;
};

function blinkToChange(stringNumberList, blink) {
    let numbersAfterBlink = stringNumberList;
    for (let i = 0; i < blink; i++) {
        numbersAfterBlink = rules(numbersAfterBlink);
    }
    console.log(numbersAfterBlink);
    return numbersAfterBlink.length;
};

console.log(blinkToChange(numbers, blink));
