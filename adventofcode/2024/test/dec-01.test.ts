import { expect } from "jsr:@std/expect";
import { listDistance, listSimilarity } from "../dec-01.ts";

const { test } = Deno;

test("example list has distance 11", () => {
  expect(listDistance(exampleData)).toBe(11);
});

test("example list has total similarity 31", () => {
  expect(listSimilarity(exampleData)).toBe(31);
});

//deno test runner is buggy and won't show test in the Testing tab if name is dynamic
test(`historian office list has distance 666`, () => {
  // expect(listDistance(data)).toBe(distance);
});

test(`historian office list has similarity 666`, () => {
  // expect(listSimilarity(data)).toBe(similarity);
});

const exampleData = [
  [3, 4],
  [4, 3],
  [2, 5],
  [1, 3],
  [3, 9],
  [3, 3],
];
