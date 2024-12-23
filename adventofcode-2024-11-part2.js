const input = "70949 6183 4 3825336 613971 0 15 182";
const blink = 75;

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

const rules = (frequencyMap) => {
    const newMap = new Map();

    for (const [number, count] of frequencyMap.entries()) {
        if (number === "0") {
            // 規則 1：數字 0 變成 1
            newMap.set("1", (newMap.get("1") || 0) + count);
        }
        else if (number.length % 2 === 0) {
            // 規則 2：偶數位數的數字分裂
            const leftPart = eliminateZero(number.slice(0, number.length / 2));
            const rightPart = eliminateZero(number.slice(number.length / 2));
            newMap.set(leftPart, (newMap.get(leftPart) || 0) + count);
            newMap.set(rightPart, (newMap.get(rightPart) || 0) + count);
        }
        else {
            // 規則 3：其他數字乘以 2024
            const newNum = `${BigInt(number) * BigInt(2024)}`;// 使用 BigInt 防止溢出
            newMap.set(newNum, (newMap.get(newNum) || 0) + count);
        }
    };
    return newMap;
};

function blinkToChange(stringNumberList, blink) {
    let frequencyMap = new Map();

    // 初始化頻率表
    // for (let i = 0; i < stringNumberList.length; i++) {
    //     frequencyMap.set(stringNumberList[i], frequencyMap.get((stringNumberList[i]) || 0) + 1);
    // }
    for (const number of stringNumberList) {
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
    }

    for (let i = 0; i < blink; i++) {
        frequencyMap = rules(frequencyMap);
    }

    // 計算最終的石頭數量
    let totalStones = 0;
    for (const count of frequencyMap.values()) {
        totalStones += count;
    }
    return totalStones;
};

console.log(blinkToChange(numbers, blink));
