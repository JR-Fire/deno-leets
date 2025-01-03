import { expect } from "jsr:@std/expect";
import { allPossibleDesigns, possibleDesigns } from "../dec-19.ts";

const { test } = Deno;

test("6 possible sample designs", () => {
    expect(possibleDesigns(sampleTowels, sampleDesigns)).toEqual(6);
});

test("1 option for single towel", () => {
    expect(allPossibleDesigns(sampleTowels, ["b"])).toEqual(1);
});

test("2 options for 2-stripe towel", () => {
    expect(allPossibleDesigns(sampleTowels, ["br"])).toEqual(2);
});

test("rr has 1 option", () => {
    expect(allPossibleDesigns(sampleTowels, ["rr"])).toEqual(1);
});

test("bggr has 1 option", () => {
    expect(allPossibleDesigns(sampleTowels, ["bggr"])).toEqual(1);
});

test("brwrr has 2 options", () => {
    expect(allPossibleDesigns(sampleTowels, ["brwrr"])).toEqual(2);
});

test("bwurrg has 1 option", () => {
    expect(allPossibleDesigns(sampleTowels, ["bwurrg"])).toEqual(1);
});

test("gbbr has 4 options", () => {
    expect(allPossibleDesigns(sampleTowels, ["gbbr"])).toEqual(4);
});

test("16 options for sample design", () => {
    expect(allPossibleDesigns(sampleTowels, sampleDesigns)).toEqual(16);
});

const sampleTowels = [
    'r', 'wr', 'b', 'g', 'bwu', 'rb', 'gb', 'br',
].sort().reverse();

const sampleDesigns = [
    'brwrr',
    'bggr',
    'gbbr',
    'rrbgbr',
    'ubwu',
    'bwurrg',
    'brgr',
    'bbrgwb',
];
