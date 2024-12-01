import { expect } from "jsr:@std/expect";
import { validArrangement } from "../leets/p2097-valid-pairs-arrangement.ts";

const { test } = Deno;

test.ignore("p2097: validArrangement", async ({ step }) => {
  const testData = [
    {
      input: [[5, 1], [4, 5], [11, 9], [9, 4]],
      expected: [[11, 9], [9, 4], [4, 5], [5, 1]],
    },
    {
      input: [[1, 3], [3, 2], [2, 1]],
      expected: [[1, 3], [3, 2], [2, 1]],
    },
    {
      input: [[1, 2], [1, 3], [2, 1]],
      expected: [[1, 2], [2, 1], [1, 3]],
    },
    {
      input: [[4, 5], [5, 9], [9, 4]],
      expected: [[4, 5], [5, 9], [9, 4]],
    },
  ];

  for (const t of testData) {
    await step(`for [${t.expected}]`, () => {
      const actual = validArrangement(t.input);
      expect(actual).toBe(t.expected);
    });
  }
});