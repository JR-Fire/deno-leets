import { expect } from "jsr:@std/expect";
import { nearlySafeReportsCount, safeReportsCount } from "../dec-02.ts";

const { test } = Deno;

test("simple list has 5 safe reports", () => {
  expect(safeReportsCount([
    "7",
    "1 2",
    "9 7",
    "1 2 4 5",
    "8 6 4 4 1",
    "1 3 6 7 9",
  ])).toBe(5);
});

test("example list has 2 safe reports", () => {
  expect(safeReportsCount(exampleData)).toBe(2);
});

test("example list has 4 dampened safe reports", () => {
  expect(nearlySafeReportsCount(exampleData)).toBe(4);
});

//deno test runner is buggy and won't show test in the Testing tab if name is dynamic
test(`data list has 666 safe reports`, () => {
  // expect(safeReportsCount(data)).toBe(result1);
});

test("data list has 666 dampened safe reports", () => {
  // expect(nearlySafeReportsCount(data)).toBe(result2);
});

const exampleData = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];
