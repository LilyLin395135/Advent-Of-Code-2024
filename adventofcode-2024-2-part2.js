const input = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

const isAllPositiveOrNegative = (adjacentArray) => {
    let firstNumberIsPositive = true;
    let otherNumberIsPositive = true;
    let suitable = true;
    for (let i = 0; i < adjacentArray.length; i++) {
        if (adjacentArray[i] === 0) {
            suitable = false;
            break;
        };

        if (adjacentArray[0] < 0) firstNumberIsPositive = false;
        else firstNumberIsPositive = true;

        if (adjacentArray[i] < 0) otherNumberIsPositive = false;
        else otherNumberIsPositive = true;

        if (firstNumberIsPositive !== otherNumberIsPositive) {
            suitable = false;
            break;
        };
    }
    return suitable;
};

const isInAdjacentLevel = (adjacentArray, adjacentLevel) => {
    let suitable = true;
    for (let i = 0; i < adjacentArray.length; i++){
        if(Math.abs(adjacentArray[i]) > adjacentLevel){
            suitable = false;
            break;
        }
    }
    return suitable;
};

const isSafe = (numbers, adjacentLevel) => {
    const adjacent = numbers.map((number, index) => {
        return number - numbers[index + 1]

    });

    adjacent.pop();

    if(
        isAllPositiveOrNegative(adjacent) && 
        isInAdjacentLevel(adjacent, adjacentLevel)
    )
    return true;
    else return false;
}

const NumberOfSafeReport = (input)=>{
    const lines = input.split('\n').filter(Boolean);
    const safeReport = lines.map((line)=>{
        return isSafe(line.split(' '),3);
    });
    return safeReport.filter(s => s === true).length;

};


console.log(NumberOfSafeReport(input));