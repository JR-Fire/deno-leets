import { expect } from "jsr:@std/expect";
import { allTrailheads, trailheadScores } from "../dec-10.ts";

const { test } = Deno;

test("mini data has 1", () => {
  expect(trailheadScores(mini)).toBe(1);
});
test("tower data has 2", () => {
  expect(trailheadScores(tower)).toBe(2);
});
test("example data has 36", () => {
  expect(trailheadScores(example)).toBe(36);
});
test("example data has total 81", () => {
  expect(
    allTrailheads(example).entries().reduce((s, th) => s + th[1].length, 0),
  ).toBe(81);
});

const mini = [
  "0123",
  "1234",
  "8765",
  "9876",
].map((r) => r.split("").map((t) => parseInt(t)));

const tower = [
  "9990999",
  "9991999",
  "9992999",
  "6543456",
  "7000007",
  "8000008",
  "9000009",
].map((r) => r.split("").map((t) => parseInt(t)));

const example = [
  "89010123",
  "78121874",
  "87430965",
  "96549874",
  "45678903",
  "32019012",
  "01329801",
  "10456732",
].map((r) => r.split("").map((t) => parseInt(t)));
