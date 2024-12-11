import { expect } from "jsr:@std/expect";
import { expectArray } from "../../../utils.ts";
import { countStones, stones } from "../dec-11.ts";

const { test } = Deno;

test("0 1 10 99 999 one blink", () => {
  //Deno cannot compare arrays properly
  expectArray(stones("0 1 10 99 999", 1), [1, 2024, 1, 0, 9, 9, 2021976]);
});

test("125 17 six blinks", () => {
  //Deno cannot compare arrays properly
  expectArray(stones("125 17", 6), [2097446912, 14168, 4048, 2, 0, 2, 4, 40, 48, 2024, 40, 48, 80, 96, 2, 8, 6, 7, 6, 0, 3, 2]);
});

test("125 17 twenty-five blinks", () => {
  expect(stones("125 17", 25).length).toBe(55312);
});

test("125 17 twenty-five blinks count only", () => {
  expect(countStones("125 17", 25)).toBe(55312);
});

test("0 1 10 99 999 count 75 blinks", () => {
  expect(countStones("0 1 10 99 999", 75)).toBe(149161030616311);
});

test("125 17 count 75 blinks", () => {
  expect(countStones("125 17", 75)).toBe(65601038650482);
});
