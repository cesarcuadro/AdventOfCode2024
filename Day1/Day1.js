const fs = require('fs');

const data = fs.readFileSync('/Users/ceasarcuadro/Desktop/AdventOfCode2024/Day1/day1Input.txt', 'utf8');
// parses all the data as one big string
console.log(data);

const lines = data.split('\n');
// splits the data by each line
// each line turns into a string and is put into an array
console.log(lines);
//TODO: figure out why it returns a small number and not a list of all the numbers
const leftList = lines[0].split('   ').map(Number);
const rightList = lines[1].split('   ').map(Number);

console.log(leftList)
console.log(rightList)


const calculateTotalDistance = (leftList, rightList) => {
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    return leftList.reduce((total, left, i) => {
        return total + Math.abs(left - rightList[i])
    }, 0)
};

//console.log(calculateTotalDistance(leftList, rightList));

module.exports = calculateTotalDistance;