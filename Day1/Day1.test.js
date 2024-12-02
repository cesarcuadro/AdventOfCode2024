const { assert } = require('assert');
const calculateTotalDistance = require("./Day1");

describe("Day 1 should calculate total distance", () => {
    it("should calculate the total distance for the example input", () => {
        const leftList = [3, 4, 2, 1, 3, 3];
        const rightList = [4, 3, 5, 3, 9, 3];
        const result = calculateTotalDistance(leftList, rightList);
        assert.strictEqual(result, 11);
    });

})