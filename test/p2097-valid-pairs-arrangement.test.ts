import { expect } from "jsr:@std/expect";
import { validArrangement } from "../leets/p2097-valid-pairs-arrangement.ts";
// import { describe, it } from "jsr:@std/testing/bdd";

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

// [{
//   testData: [[5, 1], [4, 5], [11, 9], [9, 4]],
//   expected: [[11, 9], [9, 4], [4, 5], [5, 1]]
// },
// {
//   testData: [[1, 3], [3, 2], [2, 1]],
//   expected: [[1, 3], [3, 2], [2, 1]]
// },
// {
//   testData: [[1, 2], [1, 3], [2, 1]],
//   expected: [[1, 2], [2, 1], [1, 3]]
// }, {
//   testData: [[4, 5], [5, 9], [9, 4]],
//   expected: [[4, 5], [5, 9], [9, 4]]
// },
// ].forEach((test, ix) => {

//   Deno.test(name = `${ix + 1}: for [${test.testData}]`, () => {
//     const result = validArrangement(test.testData);
//     expect(result).toBe(test.expected);
//   });

// });

// //must have for vscode to see the test file
// Deno.test("test file", () => {
//   expect(true);
// });

// // describe('aaa', () => {
// //   it("t", () => {
// //     expect(true);
// //   });

// // });

// // Deno.test("ttttttt9", () => {
// //   expect(true);
// // });

// describe(name = "valid arrangement", () => {
//   [{
//     testData: [[5, 1], [4, 5], [11, 9], [9, 4]],
//     expected: [[11, 9], [9, 4], [4, 5], [5, 1]]
//   },
//   {
//     testData: [[1, 3], [3, 2], [2, 1]],
//     expected: [[1, 3], [3, 2], [2, 1]]
//   },
//   {
//     testData: [[1, 2], [1, 3], [2, 1]],
//     expected: [[1, 2], [2, 1], [1, 3]]
//   }, {
//     testData: [[4, 5], [5, 9], [9, 4]],
//     expected: [[4, 5], [5, 9], [9, 4]]
//   },
//   ].forEach((test, ix) => {

//     it(name = `${ix+1} valid for ${test.testData}`, () => {
//       const result = validArrangement(test.testData);
//       expect(result).toBe(test.expected);
//     });

//   });

// });
