import { expect } from "jsr:@std/expect";
import { fences, discount } from "../dec-12.ts";

const { test } = Deno;

test("mini garden costs 140", () => {
  expect(fences(mini)).toBe(140);
});

test("oxo garden costs 772", () => {
  expect(fences(oxo)).toBe(772);
});

test("example garden costs 1930", () => {
  expect(fences(sample)).toBe(1930);
});

test("BFS-breaker garden costs 3508", () => {
  expect(fences(breakBFS)).toBe(3508);
});


test("1 plot discount cost", () => {
  expect(discount([['A']])).toBe(4);
});

test("1 2-plot discount cost", () => {
  expect(discount([['A', 'A']])).toBe(8);
});

test("1 3-plot and 1 discount cost", () => {
  expect(discount([['A', 'A'],
  ['A', 'B'],])).toBe((3 * 6) + (1 * 4));
});

test("1 and 1 3-plot discount cost", () => {
  expect(discount([['S', 'A'],
  ['A', 'A'],])).toBe((3 * 6) + (1 * 4));
});

test("2 1-plot discount cost", () => {
  expect(discount([['A', 'B']])).toBe(8);
});

test("1 3-plot line discount cost", () => {
  expect(discount([['A', 'A', 'A']])).toBe(12);
});

test("1 4-plot line discount cost", () => {
  expect(discount([['A', 'A', 'A', 'A']])).toBe(16);
});

test("1 4-plot with 1 line discount cost", () => {
  expect(discount([['A', 'A', 'A', 'A', 'D']])).toBe(20);
});

test("1 4-plot discount cost", () => {
  expect(discount([['A', 'A'],
  ['A', 'A'],])).toBe(16);
});

test("1 9-plot discount cost", () => {
  expect(discount([
    "OOO",
    "OOO",
    "OOO",
  ].map((r) => r.split("")))).toBe(36);
});

test("1 8-plot with middle discount cost", () => {
  expect(discount([
    "OOO",
    "OXO",
    "OOO",
  ].map((r) => r.split("")))).toBe((1 * 4) + (8 * 8));
});


test("other discount cost", () => {
  expect(discount([
    "OXO",
    "OOO",
    "OXO",
    "OOO",
  ].map((r) => r.split("")))).toBe((2 * 4) + (10 * 12));
});

test("mini garden discount cost 80", () => {
  expect(discount(mini)).toBe(80);
});

test("oxo garden discount cost 436", () => {
  expect(discount(oxo)).toBe(436);
});

test("sample garden discount cost 1206", () => {
  expect(discount(sample)).toBe(1206);
});

test("example garden discount cost 236", () => {
  expect(discount(example)).toBe(236);
});

test("ABBA garden discount cost 368", () => {
  expect(discount(abba)).toBe(368);
});


test("BFS-breaker garden discount cost 664", () => {
  expect(discount(breakBFS)).toBe(664);
});

const mini = [
  "AAAA", //A4:10,4 //4-1 + 4-2 + 4-2 + 4-3 //4-3 +4-3 +4-3 +4-3
  "BBCD", //B4:8,4 D1:1,4 //4-2 +4-2 +4-2 +4-2
  "BBCC", //C4:10,8 //4-1 +4-2 +4-2 +4-1
  "EEEC", //E3:8,4
].map((r) => r.split(""));

const oxo = [
  "OOOOO",
  "OXOXO",
  "OOOOO",
  "OXOXO",
  "OOOOO",
].map((r) => r.split(""));

const sample = [
  "RRRRIICCFF",
  "RRRRIICCCF",
  "VVRRRCCFFF",
  "VVRCCCJFFF",
  "VVVVCJJCFE",
  "VVIVCCJJEE",
  "VVIIICJJEE",
  "MIIIIIJJEE",
  "MIIISIJEEE",
  "MMMISSJEEE",
].map((r) => r.split(""));

const example = [
  "EEEEE",
  "EXXXX",
  "EEEEE",
  "EXXXX",
  "EEEEE",
].map((r) => r.split(""));

const abba = [
  "AAAAAA",
  "AAABBA",
  "AAABBA",
  "ABBAAA",
  "ABBAAA",
  "AAAAAA",
].map((r) => r.split(""));

const breakBFS = [
  "AAAAAAAAAA",
  "ABBBBBBBBA",
  "ABAAAAAAAA",
  "ABABBBBBBB",
  "ABABBBBBBB",
  "ABABBBBBBB",
  "AAABBBBBBB",
  "CCCCCCCCCC",
  "CCCCCCCCCC",
  "CCCCCCCCCC",
].map((r) => r.split(""));