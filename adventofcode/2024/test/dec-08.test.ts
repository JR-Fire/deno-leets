import { expect } from "jsr:@std/expect";
import { antinodes, harmonicAntinodes } from "../dec-08.ts";

const { test } = Deno;

test("Simple antinodes", () => {
  expect(antinodes(simpleData)).toBe(3);
});
test("Sample antinodes", () => {
  expect(antinodes(smapleData)).toBe(14);
});

test("Simple harmonized antinodes", () => {
  expect(harmonicAntinodes(simpleData)).toBe(9);
});

test("Sample harmonized antinodes", () => {
  expect(harmonicAntinodes(smapleData)).toBe(34);
});

const simpleData = [
  "T.........",
  "...T......",
  ".T........",
  "..........",
  "..........",
  "..........",
  "..........",
  "..........",
  "..........",
  "..........",
].map((r) => r.split(""));

const smapleData = [
  "............",
  "........0...",
  ".....0......",
  ".......0....",
  "....0.......",
  "......A.....",
  "............",
  "............",
  "........A...",
  ".........A..",
  "............",
  "............",
].map((r) => r.split(""));
