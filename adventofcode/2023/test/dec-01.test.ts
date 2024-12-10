import { expect } from "jsr:@std/expect";
import { parseCoordinatesBasic, parseCoordinatesLetters } from "../dec-01.ts";

const { test } = Deno;

test("example list has coordinates sum 142", () => {
  expect(parseCoordinatesBasic(exampleData)).toBe(142);
});

//deno test runner is buggy and won't show test in the Testing tab if name is dynamic
test(`elves' list 1 has coordinates sum 666`, () => {
  // expect(parseCoordinatesBasic(data)).toBe(coordinatesSum1);
});

test(`sanity one line`, () => {
  expect(parseCoordinatesLetters(["one63five"])).toBe(15);
});

test(`elves' list 2 has coordinates sum 281`, () => {
  expect(parseCoordinatesLetters(exampleLetters)).toBe(281);
});

//deno test runner is buggy and won't show test in the Testing tab if name is dynamic
test(`elves' list 2 has coordinates sum 666`, () => {
  // expect(parseCoordinatesLetters(data)).toBe(coordinatesSum2);
});

const exampleData = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
];

const exampleLetters = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];
