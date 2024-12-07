import { expect } from "jsr:@std/expect";
import { xmas, mas } from "../dec-04.ts";

const { test } = Deno;


test("sample data 1 has 18 XMAS", () => {
    expect(xmas(sample1)).toBe(18);
});

test("sample data 2 has 4 XMAS", () => {
    expect(xmas(sample2)).toBe(4);
});

test("sample data 1 has 9 MAS", () => {
    expect(mas(sample1mas)).toBe(9);
});
test("sample data 3 has 9 MAS", () => {
    expect(mas(sample3mas)).toBe(9);
});

test("sample data 2 has 1 MAS", () => {
    expect(mas(sample2mas)).toBe(1);
});

test("sample data has 666 XMAS", () => {
    // expect(xmas(data)).toBe(resultXMAS);
}); test("sample data has 666 MAS", () => {
    // expect(mas(data)).toBe(resultMAS);
});

const sample1 = [
    'MMMSXXMASM',
    'MSAMXMSMSA',
    'AMXSXMAAMM',
    'MSAMASMSMX',
    'XMASAMXAMM',
    'XXAMMXXAMA',
    'SMSMSASXSS',
    'SAXAMASAAA',
    'MAMMMXMMMM',
    'MXMXAXMASX',
];
const sample2 = [
    '..X...',
    '.SAMX.',
    '.A..A.',
    'XMAS.S',
    '.X....',
];

const sample1mas = [
    'MMMSXXMASM',
    'MSAMXMSMSA',
    'AMXSXMAAMM',
    'MSAMASMSMX',
    'XMASAMXAMM',
    'XXAMMXXAMA',
    'SMSMSASXSS',
    'SAXAMASAAA',
    'MAMMMXMMMM',
    'MXMXAXMASX',
];
const sample2mas = [
    'M.S',
    '.A.',
    'M.S',
];
const sample3mas = [
    '.M.S......',
    '..A..MSMS.',
    '.M.S.MAA..',
    '..A.ASMSM.',
    '.M.S.M....',
    '..........',
    'S.S.S.S.S.',
    '.A.A.A.A..',
    'M.M.M.M.M.',
    '..........',
];