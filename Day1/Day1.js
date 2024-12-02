const fs = require('fs');

const data = fs.readFileSync('/Users/ceasarcuadro/Desktop/AdventOfCode2024/Day1/day1Input.txt', 'utf8');
// parses all the data as one big string
// console.log(data);


// Parse lines into two lists
const leftList = [];
const rightList = [];

// Iterate through each line and split the numbers
data.trim().split('\n').forEach(line => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    if (!isNaN(left) && !isNaN(right)) {
        leftList.push(left);
        rightList.push(right);
    }
});

console.log("Left List Length:", leftList.length);
console.log("Right List Length:", rightList.length);


const calculateTotalDistance = (leftList, rightList) => {
    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);
    return sortedLeft.reduce((total, left, i) => {
        return total + Math.abs(left - sortedRight[i]);
    }, 0);
};

const calculateSumOfOccurrences = (leftList, rightList) => {
    const counts = new Map();
    rightList.forEach(num => {
        counts.set(num, (counts.get(num) ?? 0) + 1);
    });

    return leftList.reduce((total, num) => {
        return total + num * (counts.get(num) ?? 0);
    }, 0);
};

const result = calculateTotalDistance(leftList, rightList);
console.log('Total Distance: ', result);

const sumOfOccurrences = calculateSumOfOccurrences(leftList, rightList);
console.log('Part 2: Sum of Occurrences:', sumOfOccurrences);

module.exports = calculateTotalDistance;