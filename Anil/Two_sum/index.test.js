"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
test("Test with valid input where a solution exists", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = (0, index_1.default)(nums, target);
    expect(result).toEqual([0, 1]);
});
test("Test with no valid solution", () => {
    const nums = [1, 2, 3];
    const target = 7;
    const result = (0, index_1.default)(nums, target);
    expect(result).toEqual([]);
});
test("Test with multiple valid solutions (return any one)", () => {
    const nums = [1, 3, 3, 4];
    const target = 6;
    const result = (0, index_1.default)(nums, target);
    expect(result.length).toBe(2);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
});
test("Test with an array of length 2", () => {
    const nums = [3, 3];
    const target = 6;
    const result = (0, index_1.default)(nums, target);
    expect(result).toEqual([0, 1]);
});
