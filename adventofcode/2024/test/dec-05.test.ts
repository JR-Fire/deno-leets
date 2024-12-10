import { expect } from "jsr:@std/expect";
import { getFixedIncorrectsSum, sumPrintedMiddle } from "../dec-05.ts";

const { test } = Deno;

test("sample data has middle number sum 143", () => {
  expect(sumPrintedMiddle(sampleRules, sampleUpdates)).toBe(143);
});
test("sample data has fixed incorrects middle number sum 123", () => {
  expect(getFixedIncorrectsSum(sampleRules, sampleUpdates)).toBe(123);
});

test("data has middle number sum 666", () => {
  // expect(sumPrintedMiddle(dataRules, dataUpdates)).toBe(result);
});
test("data has fixed incorrects middle number sum 666", () => {
  // expect(getFixedIncorrectsSum(dataRules, dataUpdates)).toBe(resultFixed);
});

test("update rows have odd number of pages only", () => {
  // expect(dataUpdates.every(r => r.length % 2 == 1)).toBe(true);
});

const sampleRules: number[][] = [
  [47, 53],
  [97, 13],
  [97, 61],
  [97, 47],
  [75, 29],
  [61, 13],
  [75, 53],
  [29, 13],
  [97, 29],
  [53, 29],
  [61, 53],
  [97, 53],
  [61, 29],
  [47, 13],
  [75, 47],
  [97, 75],
  [47, 61],
  [75, 61],
  [47, 29],
  [75, 13],
  [53, 13],
];

const sampleUpdates: number[][] = [
  [75, 47, 61, 53, 29],
  [97, 61, 53, 29, 13],
  [75, 29, 13],
  [75, 97, 47, 61, 53],
  [61, 13, 29],
  [97, 13, 75, 29, 47],
];
