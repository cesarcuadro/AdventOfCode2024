const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

const calculateTotalDistance = (leftList, rightList) => {
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    return leftList.reduce((total, left, i) => {
        return total + Math.abs(left - rightList[i])
    }, 0)
};

console.log(calculateTotalDistance(leftList, rightList))

module.exports = calculateTotalDistance;