import { expect } from "jsr:@std/expect";
import { findGuard, walkLoops, walkWays } from "../dec-06.ts";

const { test } = Deno;

test("guard is at 6,4", () => {
  expect(findGuard(sample)).toEqual([6, 4]);
});

test("sample data has 41 steps", () => {
  expect(walkWays(sample)).toBe(41);
});

test("sample data has 6 possible loops", () => {
  expect(walkLoops(sample)[0]).toBe(6);
});

test("data has 14 steps", () => {
  expect(walkWays(l)).toBe(14);
});

test("data has 1 possible loops", () => {
  expect(walkLoops(l)[0]).toBe(1);
});

const sampleMap: string[] = [
  "....#.....",
  ".........#",
  "..........",
  "..#.......",
  ".......#..",
  "..........",
  ".#..^.....",
  "........#.",
  "#.........",
  "......#...",
];
const sample = sampleMap.map((r) => r.split(""));

const sampleLoop: string[] = [
  "....#.....",
  ".........#",
  "........#.",
  "..#.......",
  ".......#..",
  "..........",
  ".#..^.....",
  "........#.",
  "#.........",
  "......#...",
];
const l = sampleLoop.map((r) => r.split(""));
