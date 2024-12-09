const input = `
99006   28305
38540   91683
18133   49738
70780   13081
38316   55879
61729   73383
57462   59629
91153   56589
76573   52850
`;

// 1. Sort the list of left and right lines
// 2. Calculate the distance between the two lists
// 3. Sum the distance between the two lists

const lines = input.split('\n').filter(Boolean);
const leftLines = lines.map(line => line.split('   ')[0]);
const rightLines = lines.map(line => line.split('   ')[1]);

const order = (list) =>{
    return list.sort((a,b)=>a-b);
}

const distance = (line1, line2) => {
    return line1.map((item,index)=>{
        return Math.abs(item - line2[index]);
    })
};
console.log(distance(order(leftLines),order(rightLines)));


// const sumOfDistance = (input) => {
//     const divideByNextLine = input.split('\n').filter(Boolean);
//     const leftLines = divideByNextLine.map(line => line.split('   ')[0]);
//     const rightLines = divideByNextLine.map(line => line.split('   ')[1]);

//     const smallTolarge = (list) => {
//         return list.sort((a, b) => a - b);
//     }

//     const orderedLeftLines = smallTolarge(leftLines);
//     const orderedRightLines = smallTolarge(rightLines);

//     const distance = (list1, list2) => {
//         return list1.map((item, index) => Math.abs(item - list2[index]));
//     }

//     const sum = (list) => {
//         return list.reduce((acc, cur) => acc + cur, 0);
//     }

//     return sum(distance(orderedLeftLines, orderedRightLines));
// }

// console.log(sumOfDistance(input));