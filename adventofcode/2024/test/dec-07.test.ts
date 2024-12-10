import { expect } from "jsr:@std/expect";
import {
  betterCalibrationSum,
  resultreal,
  resultstupid,
  totalCalibrationSum,
} from "../dec-07.ts";

const { test } = Deno;

test("6 is a result of 2,3", () => {
  expect(resultreal(6, [2, 3])).toBe(true);
});

test("12 is a result of 2,3,6", () => {
  expect(resultreal(12, [2, 3, 6])).toBe(true);
});

test("17 is a result of 1, 3, 3, 7", () => {
  expect(resultreal(17, [1, 3, 3, 7])).toBe(true);
});
test("127 is a result of 11, 6, 16, 20", () => {
  expect(resultreal(127, [11, 6, 16, 20])).toBe(true);
});

test("190 is a result of 10, 19", () => {
  expect(resultreal(190, [10, 19])).toBe(true);
});

test("sample total sum is 3749", () => {
  expect(totalCalibrationSum(sample)).toBe(3749);
});
test("sample better sum is 11387", () => {
  expect(betterCalibrationSum(sample)).toBe(11387);
});

test("5 is a stupid result of 2,3", () => {
  expect(resultstupid(5, [2, 3])).toBe(true);
});
test("6 is a stupid result of 2,3", () => {
  expect(resultstupid(6, [2, 3])).toBe(true);
});
test("84 is a stupid result of 1, 3, 3, 7", () => {
  expect(resultstupid(84, [1, 3, 3, 7])).toBe(true);
});
test("89 is a stupid result of 1, 3, 3, 7, 5", () => {
  expect(resultstupid(89, [1, 3, 3, 7, 5])).toBe(true);
});

test("3267 is a stupid result of 81, 40, 27", () => {
  expect(resultstupid(3267, [81, 40, 27])).toBe(true);
});

test("292 is a stupid result of 11, 6, 16, 20", () => {
  expect(resultstupid(292, [11, 6, 16, 20])).toBe(true);
});

test("7290 is made better with 6 8 6 15", () => {
  expect(betterCalibrationSum([[7290, 6, 8, 6, 15]])).toBe(7290);
});

test("156 is made better with 15 6", () => {
  expect(betterCalibrationSum([[156, 15, 6]])).toBe(156);
});
test("192 is made better with 17 8 14", () => {
  expect(betterCalibrationSum([[192, 17, 8, 14]])).toBe(192);
});

const sample = [
  [190, 10, 19],
  [3267, 81, 40, 27],
  [83, 17, 5],
  [156, 15, 6],
  [7290, 6, 8, 6, 15],
  [161011, 16, 10, 13],
  [192, 17, 8, 14],
  [21037, 9, 7, 18, 13],
  [292, 11, 6, 16, 20],
];
