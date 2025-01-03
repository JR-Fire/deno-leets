import { expect } from "jsr:@std/expect";
import { allBigBoxes, allBoxes } from "../dec-15.ts";

const { test } = Deno;

test("baby warehouse, baby steps", () => {
  expect(allBoxes(JSON.parse(JSON.stringify(babyWarehouse)), JSON.parse(JSON.stringify(babySteps)))).toEqual(104);
});

test("small robot, baby warehouse", () => {
  expect(allBigBoxes(JSON.parse(JSON.stringify(babyWarehouse)), JSON.parse(JSON.stringify(babySteps)))).toEqual(109);
});

test("small robot, big baby warehouse", () => {
  expect(allBigBoxes(bigBabyWarehouse, babySteps)).toEqual(105);
});

test("small robot, 1 extra baby warehouse", () => {
  expect(allBigBoxes(extraBaby1, extraBabySteps)).toEqual(4136);
});

test("small robot, hole warehouse", () => {
  expect(allBigBoxes(holeWarehouse, holeSteps)).toEqual(1537);
});

test("small robot, left hole warehouse", () => {
  expect(allBigBoxes(leftHoleWarehouse, leftHoleSteps)).toEqual(1535);
});

test("small robot, small warehouse", () => {
  expect(allBigBoxes(JSON.parse(JSON.stringify(smallWarehouse)), JSON.parse(JSON.stringify(smallSteps)))).toEqual(1751);
});

test("small warehouse, small steps", () => {
  expect(allBoxes(JSON.parse(JSON.stringify(smallWarehouse)), JSON.parse(JSON.stringify(smallSteps)))).toEqual(2028);
});

test("larger warehouse, larger steps", () => {
  expect(allBoxes(JSON.parse(JSON.stringify(largerWarehouse)), JSON.parse(JSON.stringify(largerSteps)))).toEqual(10092);
});

test("small robot, larger warehouse", () => {
  expect(allBigBoxes(JSON.parse(JSON.stringify(largerWarehouse)), JSON.parse(JSON.stringify(largerSteps)))).toEqual(9021);
});

test("small robot in prison warehouse", () => {
  expect(allBigBoxes(prisonWarehouse, babySteps)).toEqual(406);
});

test("small robot, extra big warehouse", () => {
  const r = allBigBoxes(extraWarehouse, extraSteps);

  expect(r).toBe(1430);
});

const extraBaby1 = [
  '#######',
  '#.....#',
  '#.....#',
  '#@.O..#',
  '#.OO..#',
  '#..O..#',
  '#..O..#',
  '#..O..#',
  '#.....#',
  '#.....#',
  '#######',
].map(r => r.split(''));

const extraBabySteps = [
  'v>>^^>>vvvvvvv'
].join('').split('');

const holeWarehouse = [
  '#######',
  '#.....#',
  '#..O..#',
  '#.O.O.#',
  '#.O.O@#',
  '#..O..#',
  '#.....#',
  '#######',
].map(r => r.split(''));

const holeSteps = [
  '<>vv<<<<<<<^^><^^>>><<<vvvv>>>^^^^^',
].join('').split('');

const leftHoleWarehouse = [
  '#######',
  '#.....#',
  '#..O..#',
  '#.O.O.#',
  '#@O.O.#',
  '#..O..#',
  '#.....#',
  '#######',
].map(r => r.split(''));

const leftHoleSteps = [
  '>><vv>>>>>>>^^<>^^<<<>>>vvvv<<<^^^^^',
].join('').split('');

const bigBabyWarehouse = [
  '######',
  '#..O@#',
  '#....#',
  '######',
].map(r => r.split(''));

const babyWarehouse = [
  '########',
  '#....O@#',
  '#......#',
  '########',
].map(r => r.split(''));

const prisonWarehouse = [
  '########',
  '#......#',
  '#OO@...#',
  '########',
].map(r => r.split(''));

const babySteps = [
  '<'
].join('').split('');

const smallWarehouse = [
  '########',
  '#..O.O.#',
  '##@.O..#',
  '#...O..#',
  '#.#.O..#',
  '#...O..#',
  '#......#',
  '########',
].map(r => r.split(''));

const smallSteps = [
  '<^^>>>vv<v>>v<<'
].join('').split('');

const largerWarehouse = [
  '##########',
  '#..O..O.O#',
  '#......O.#',
  '#.OO..O.O#',
  '#..O@..O.#',
  '#O#..O...#',
  '#O..O..O.#',
  '#.OO.O.OO#',
  '#....O...#',
  '##########',
].map(r => r.split(''));

const largerSteps = [
  '<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^',
  'vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v',
  '><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<',
  '<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^',
  '^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><',
  '^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^',
  '>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^',
  '<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>',
  '^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>',
  'v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^',
].join('').split('');

const extraWarehouse = [
  '#######',
  '#.....#',
  '#.....#',
  '#.@O..#',
  '#..#O.#',
  '#...O.#',
  '#..O..#',
  '#.....#',
  '#######',
].map(r => r.split(''));

const extraSteps = [
  '>><vvv>v>^^^'
].join('').split('');