import { expect } from "jsr:@std/expect";
import { allBigBoxes, allBoxes } from "../dec-15.ts";

const { test } = Deno;

test("baby warehouse, baby steps", () => {
  expect(allBoxes(babyWarehouse, babySteps)).toEqual(104);
});

test("small robot, baby warehouse", () => {
  expect(allBigBoxes(babyWarehouse, babySteps)).toEqual(109);
});

test("small robot, big baby warehouse", () => {
  expect(allBigBoxes(bigBabyWarehouse, babySteps)).toEqual(105);
});

test("small robot, 1 extra baby warehouse", () => {
  expect(allBigBoxes(extraBaby1, extraBabySteps)).toEqual(3536);
});

test("small robot, hole warehouse", () => {
  expect(allBigBoxes(holeWarehouse, holeSteps)).toEqual(1537);
});

test("small robot, small warehouse", () => {
  expect(allBigBoxes(smallWarehouse, smallSteps)).toEqual(1751);
});

test("small warehouse, small steps", () => {
  expect(allBoxes(smallWarehouse, smallSteps)).toEqual(2028);
});

test("larger warehouse, larger steps", () => {
  expect(allBoxes(largerWarehouse, largerSteps)).toEqual(10092);
});

test("small robot, larger warehouse", () => {
  expect(allBigBoxes(largerWarehouse, largerSteps)).toEqual(9021);
});

test("small robot in prison warehouse", () => {
  expect(allBigBoxes(prisonWarehouse, babySteps)).toEqual(406);
});

test("big warehouse, big steps", () => {
  expect(allBoxes(bigWarehouse, bigSteps)).toEqual(1514353);
});

test("small robot, extra big warehouse", () => {
  const r = allBigBoxes(extraWarehouse, extraSteps);

  expect(r).toBe(1430);
});

test("small robot, big warehouse", () => {
  const r = allBigBoxes(bigWarehouse, bigSteps);
  expect(r).toBeGreaterThan(1529906)
  expect(r).toBeLessThan(1539130)
  expect(r).toBeLessThan(1537931)//3076

  expect(r).toBe(1533076);
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
  'v>>^^>>v'
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
].join('').split('');;

const bigWarehouse = [
  '##################################################',
  '#.#...O...O..#O.O...O..O...#....O...#O...O...OO..#',
  '##OO.....O#....#...O..OO.OOOO.O#......O...O......#',
  '#..........#O#...O..O.O......OOO#......O#.O.OO...#',
  '#........O..OO#...#O....O##O...O....OO.#.O.OO.O..#',
  '#O..O..##O...O.O.O......OO.O...O.........#..O...O#',
  '#..O...#..O....O.O..O#...#.OO..O....O.....OOO...##',
  '#..O.O.O.O..#...O.............O...#O.O.O..O.OOO.O#',
  '#....O............OOO.O..#.#..#..#...O.OO.#....O.#',
  '#.#.O.O.#.OOO........O...OOOO#......OO.#O..#.#O..#',
  '#.O....O...............O.O.O.OO..OOO..OO#.O##O..O#',
  '###.OO.......O...O.O..O..O..O.O.O..OO.O.OO....O#.#',
  '#...O.O...#.O..O....O...O.O.O...O..OOO.........O.#',
  '#.O....O...........O.....OO..OO#..OOO....#...O..O#',
  '#....OOOO.O.#...#....#............O......OO#.O.O.#',
  '##OOO.O...O.O..O.O.....OO....#....OOOO...O.O....##',
  '#O......#.O..O...O...O..O.O..O...OOO#O.#.O..O....#',
  '#.OOOO.O......OO.OOO....#.....O.O.OO.......O...#.#',
  '#..............O.O....O...#.O.......OO...........#',
  '##O..O.#O.....O.#.O..O#...O..#.O....O#.O.O.......#',
  '#.O.#.OO.....O..#....O.O....O....O....#..O##.O...#',
  '#.##.O.O.O.OOO.O.O.........OO.##.O...O...OOO..OO.#',
  '#O#.##.#..##.#......O...#O.O.O..#..O.OO.....O..OO#',
  '#O....#.##....O...O.##OO.O..O..........O.....O.#.#',
  '#O..O.#O...O....O..O....@.OO...O...O...O..O.O..OO#',
  '#O.OO..O...O......O#.##OO.#..OO.....O..O.O.O...O.#',
  '#..O##..OO..OO.O...OOO...O...O..OO..O.OOO...O....#',
  '##..OO..OOO.....#OOO.O..#O.O.O..OO.O.OOO..O..#OOO#',
  '#O.##.##.OOOO..#.OO.....O...O.#OOO..O..O.#.O.OO#.#',
  '#..OOO.#.O..O....O#..#.OO..#.O.O..OO..#O...O...#.#',
  '#..O.......O.....O.O..O.O#..#...#..O..#.OO..O.O..#',
  '#O..O..#.#O.O..O..O...O...OO....O.O.OO.O.O#....#.#',
  '#.......#.O...O..#...O.O.OO..O.O.O...#..........O#',
  '#.OO....O.OO#...O..O.O..O...O..OO..OO.O...O......#',
  '#O.O.O...O...OO.O.OO.OO.OO.#...O.O.....#.O.O.....#',
  '#O..O.O...O..#............O.#..#..O.OO..O#...O.O.#',
  '##O...O......O....OO.O.....O...OO.O..OOO..OOO...O#',
  '#......#..O.OO..#O...OO.....O..OO...OO.....O.OO.O#',
  '#...#.O.#.O..O..#...#.......#...........O.O...O..#',
  '#.O.O.....OO..OOO...O..O.O..O..#..O###.O.....OO..#',
  '#.O.....O.#........OO.......O...O....#O.....OO#O.#',
  '#O#OO.....O....O..O........O..#O#.OO.O..O......O##',
  '#...#...O....O.O.O.OOO......OO..........OOO...O..#',
  '#.O.O.....OOO...#.O...OO#....O....O.##O..O...O..O#',
  '#...O.......O#.O..#.O.OO......##O.O..O..OO..O....#',
  '#....O.....O.......#.OO...O..O.....O.O...O..O.OO##',
  '#..O..OO#O#..O..O.......O..........O.........O...#',
  '#....O..#.O........O...#OO...O..O.O...O...O#.....#',
  '#.....###...........O..O....O........O.....##O..O#',
  '##################################################',
].map(r => r.split(''));

const bigSteps =
  `><<vv>><>>^v><^>vv>v><vv>^v<>^v<^v>>v<^<<v^>>v<^>^^^^^v^v><<<<v<<v<^>^^v^vv^^>^>^<v<>v><^<>^^>^>vv<>v><>>^>^><v^>^vv><>><<^>^>^v^<v><v^v>^>v^<^^>^<>^v^<>v^^^>>><v^><v<^>>^<^^vvvv>^v<>>v>^>>v<v><<<vv<vv<v^>v>vvvv<v>^<v^>vv<v<><<^^^>^><^^v>v>^^>^<^v<vv>v<^v^v>v><<><vv<^>^<>^v<>><<^^<<<^v<^vv^^^^>v<<<v^vv<<vv>^^v<^<>><>><v^<<vv<v^<<<>^<vv>^<>^>>>^><<<^><<<v^v<>^^^^<<^^>^vv>^><>^<^<^v^<v<v^^><v^<><<v^>><<^^>v<>v^>>><>^><<<<^^<^<<<<v>v>vv<vv^vvv<^v<v^>>>v^><<<^>vv^>>v^<^vv<><><<^<<^v>vv<^^><>>>^<v<<>^v>>>^v><vv>>vv^v<<v>>^<<>vv><><^v<vvvvv<v><>v<><v>^>vvvv<>>vv><>><^v<<>^>vvv>^v<vv^^>v^<^v<v<^<>>^^v<^>>><<<^^<^<^^^^<<>^^^>^>^><v<v<<<<^^<vv>v<<^^^>v^v<v<><>^^>^^vvvv^>^^><<><^^>>^><<v^vv^<>v<^^<v^^v^>^<^v<<<v^<v<><^v^>>^<<vvv^^^^<<^<^^>vvvv>>^<>^^>^^^v<^>v<^<vv<><^v>^<^<>^>>^^v<>vv>>^<>v^^^^^^><vv<^v<^>^vv>v<<>>^v<v<>>vvv>>>>v><>>^v<vv<>^<<^<v<>>v<v^<^><^^><^v>v><<vvvvv<^<v<^v>^<<><v^<>>v>v>>v>v^><vv><<>v>^^<>v<>>^^><v<<v^>>v^>^v^<>v><^^>>vv>v>v<>v^^^<^>^<v>^<>v<><<><^<<><v<>^>v<><<<<^v^<^^v<
<^<^^<><>^<v><>^<^v>>>^<<>^>>v^v^<<v^>v<<v^^>vv><<><vv>^v^<>><<>>^^^^<<^vv>><<v^^<>><^^^<<vvv><<v^^^vv^^^>><v>>>>><v<^^^v>>>v<>vv><<vvvv^^>vv<v<^<>v^vv^v><^<<^v<<v^<vvv<v<<>^>v^v>^>>v>><><>vvv>>>^v^<<>^>^<>^><^>^^>>v<^>vv^^v<>>>>>v^><^>^>v>v<v<<vv^^^>><v^^^>v^^<^^><><>>v<>>^>v^^>^><^^<v>>v^>v^>v<^<vv^<^><v^v^v^v>v<^^vvv>>^>v>^v^^>v^><<v<><^^^<>v><^^v^v<v<>>^>^<>^<<>v<^><><v<><^<v<^>>^v^>^^vv<>v>v^v>v<<v^<<>>v^^v<v>^^v>v^<^^v><v>v^>^<<v<><>>^v>vv<>v^v<>^^v>>v<v^<><<><>>>^vv>v<v^^vv^<>>>v<>vvv^>^<<<^>><<>^>>^>^v><>^^v^<^<vv^><><>vv>v<^<v^^>^vv^^>^v>^v^>><v^v>>^^>vv>v<v<^>v<><^>>^><v<<<v<v><v><^<>v^^<<^vv^><>><<>>>v^<><>>^v>^vv<>v<^<v^<>>v^^<<<^^><v<^<^^<^>vvv<v<<>v^^><v^^<>>><^v>^v^>v>v^^v>^v<>v^^vvv>>v<<^><^^v<v<^v<^><vv>v<<<v<>>^<^v<<<><<>^<vv<^>v<>vvv>^^>>^>^>>^>^>vv>>^>v>^v<<>vvv^^<<<><<><<vvv<>><><^>v^><v^>>^>^>>^v^<<^<^^^v^^<<v><^<<vv<>^vv<^v<<^>^><>^<v<<>^v<>><v^<^v>^>>^>vvv<>v><v^vv<vv<<<<^vv^v^v^>>>^<v><^^vv<<<<^<^<^><>v<>v<<v^^<vv>v><^v>^<^^^^vvv>^^vv<<>^>^<<v<v^<<v^^<v<^^<v^v^
>^^>>v>>^^vv^vv>^>><^^>>^v<^<><vv>v<v<v>^>><v<^^v><v^>>vv<<^v>>^v>^<vv>^>v<v><<<>^>v^<>v^>^^^<v<v>v<^>vv>>v<><>v^>>v^<<^><<v^^^>vv<>^><>>^<<<>^^<><<v>>v^^<<>><>v><<v<^>>^>>^v^<^>^<>v^v>v>^v^><><>><>vv<vvv<<v>v>vv>^<^<<vv<>^<<>^v<<><<^v>^>>v<>>vvvv<<^>^><<>>^^v<>^^v>v<<<vv<vv^^>v<<v^^<v^v^^><<v><^vvv>>v^<v^<><<<>v<^<>^>v><^^<^<<>><>>>>v<v<<>v<v^<>>><<^<>^>^^^^<>v^v^<><v<^>vv^<^<^^vv^v^>^v>>v><^<^>>>><^>>^>><vv^<>^v<v><<>>vvvvvv^^^<v<>>v^>>v<^v>^^><>>>v^v>^v>>^>>^><^^<<^^^^><><^^vv^><><>v^^>^^<<^^^<><<>v>>vv^^>^^^v<v^v>^v^^^><<><<><v>vv>v<^^>^<<<^><><^v^<^vv<^^^v<>^>>^<^>><><^vv^^>^<^v>^>v^v>^<>v^v<^>v><v<^^>v^<<^v<>vv^v><>v>>v^<^<v<^>v><^<^<>>>v<^>^vv>>>v>v<^^v<v<>v^v<^vv><v>^v>>v>^<><^v><<<vv>v>>v^v^vv^<<vv^<>><<>>^v<v^v>^^vv<v><<^><^v^^<<^vv^^<<^>^>>v<>^><^^v<v^v^^>^^^>v^<<>^^<v^v>>>v<v^<^v><^vv<>^^vv^^v>>^<>v<>>^><<<vvvv><<<v>>^<^v>^>^^>>v>v^v<<v^^^<><<^v>><<^^<<<^^v<<v>>v<v<<vv<v><^v^>^<vv>^><^<v><v^vv>^v<^>v>>>>>^<<^<^v>>v^>v^>^vv>^v>v^v<v^>v^<^<v<>^<<vvvvv^v>v>>^>^<<v<vv<v>>^^^<^<
<v^v<>>^<v>vv>><<v><v>^^>v^^v<<v<^<^^^><^^>>^>vv<^<>v^<<<<^<<<><v^^<>>>^v>^>vv^>>><<<>v<vv^>vvv<^v<^^<v<<v^>v^^^vvv^><<v<><>v>v^<<^^^v^>^>v^^<>>><^v<>>><>v<vv^^><>^v<v>>><vvv<^vv><><v<>>^><^vv^>v<^>>v>><>vv^^>^^><^<<>^>v^<><<>v<v^<vvv>^^vv>^<^v^>><v<v>>>v>^vv>^<>^^>^><>v<vv^><<^v^>^<>vv^^^>vv<>^v>^>^^<>><>^v<^^><v^v<^v^<vv^>>><>v<<<^^<v^^^><^v^<<^>vvv<^<v^<>>>^v<<<<v<v<<<v^v^^^>^>^><^v^^^><<<><><v<v>>^v<>^<<v>^>^^v^^<<>^v<<>v>^v^v^<<<vv><<<v>>v>^v^^><vv><<<v>>><^>^<><v>v<<<^<>>^<v^<<>v>vv>v^v>v>><^^vv<>><>^v^<v<v^vv^>^>^^^^^<<v<v^<^<>v>^v>v^v>>>>>>vv<<v>v>^^<<vvv^^^^><^vvv>><^<^>v<v>v>^<>>v<v^<vv^vv>vvv<>v>>v><><>v<^><^<^<v><^v>vv^^^<^v^<<<>^^>>^<^<>>>vv^^vv^>^>vv^>>v>^>>>^>v^<v<>^^v><>><>^^<v>>v<^^>^^v^>^<<^<>>>>^vvv<>>^^v<vv<^^^^>^>^^<v<v<v<^^>^v<^^>>^<^^<>^v<^>>^<<v^^^<>>>>^><<><v>v^^<v>>v>>>v^vv>v^><v^v>>v<^v^^^v^<^v<^>vv<>v>>v^v<vv<<^>>^^vv>^v<^^<><v>^^>>^<>^<^^>vvv^>>>><^^vv>>^<<>^v^>vv<<^vvv^><v<vv<^v^>v^>^<vv<^vv<>^<^>>><>>^v>^<^v<^v><<><<^>><><^><^^^<^>^<v>^v^v^<<^v>>>v>><^<^^
v>^^<<><>vv^v<<<>v<v<><vv<<v^^^vv<^v<^^<<vv^>>vvv>>vv<v<v<<<>v>>^v<>v^>v<<>^<^><v>>v>>>vv^>^<<^^<vvv^^^>^^<v^<vv^v>^>vvv<v^>v>^v<<^<v^v>>^<vv^<v^^^v^<<<<>^^>^vvv<>v>vv<^^v^>^>v^^>>>v^^>v<><v<^v^^^<vv<<<<<^vvv^^^^>^^v>v^<<^^^vv^<^>>^<^v<^<>>v^^<v^<<<>^vv^^^^<>v<>>^>>v>^v^^^><vv^>v><<vv<<^<v<^v>v^v>>>>v<<<<^v^vv<>^vv>>><<v^><<^^^>>vv^^>>>vv^<>v^<^<><v^^>v>>^>>v<<v<>^>>^v^v<>^<<^<^^>><>^>v>^<><v>>^v^^>>vvv^^^v^^>>>><<>v<><^<v<^>v<^^>><<v><>^<>v<v>v<vv^>^>^<<^^^><^<<<<v^>^<^v^><vvv^>v^^vvv>><^<^<<>v^^>v^><^<v>>^^v<<^<<^vvv^^>^^vvv<<v>>>^v^vv<v^v^>^>^v<<>^>v^<vvv>>vv>^<^>^^>vv<>>^<v^^^<^>^v^<>^><v^>><v<<^<^<>^>^<^<<v^^>><v>^<>>^v^><<^v>^>>>^<vv<<<v^<v><vvv^<>v>^^>>><<><v^^^<v>>v<v^>>^^^^>>^v<^>><^^^vv^<v<>>^vv^>^<>><<^>>>>>><v<>vv^^>v<>>v<^><v<^^<>v>v^^v<>v<<>><^><v<>>v^>>vv<<>>^>v^v<^<^^<v^<>^<>v^<<^><><v^<>>^^v^^<v^^<>^v>>^^v><<v^v><>^>>^vvv><^^<<>vv<>><<><<<<v^^^<v^<^^>^>><^^^v><v^v^<v><<<>^^>^>vv^<<<v><><<^vv<v^<v^^^^>>^<vv<^>v<<^>>^<>^<>>^<v>^<<^^><^><>^v^>>v><><<>^>>v>>>^<>^>^<v<<^^^>
vv><>^<v^vvv<>><^<<vv^v^<>v>>v>v^^v><^>^<v>^v>vv><^>^^^><<^><>v^>v>^<v<^<vvvvvvv<v<v><^v^<>^>v><>v>>^^>v<vv^<v<v^<><<>v><vv<v<<<<><>>>^<v^^<<<v<>v^v>>>><^v<v^<<vv^><^<<>>^^>>>vv><<v<<>><^<>^<^^v><^>^<vv<^v<<vvvv<^>vvv>^>vv><><<>v^v^<vvv><>v<<^v<vvvv<^^^>^^><<><vv^v<^><><^^<^vv<<vv^v<<vv<<^>><<^<<>^<^>^^v<<^<>><>^>^vv<v^>>^^v<v>>^v<vvv>v^v^<<<>^v<v^<>v^<v^v<^v>>^<^^^^<><v<^>v<<<>^<v<<<><>><v^<v>v><^^^>v^^v>><v<v^^<v<v>>v<^v>>^>>vv>v^v>vvv<>v>v>><><<<<><<^><^v^v^^^>^>vvv^^^^^><<^^^v<v>^^>^<>^^^vv^^<^<>v^v^^^<<v^^^<^<vv>v<^^><^<><<^v>v<><v>^<<^>vv^v<><<<>^v<<<<^>><<^^<^v<v<>>>>^<>><<vv<<^<^vvv>vv^<>^>v>^v>v><<>>v^<^^><<^^<>>v>v>^v>><^>>>vvv>>><<<^<<v^<vvv>>>>^v<v<v^^^>vvv<<^^v^v>>v<v<^><^v><<^vv<vv^<^^<vv^><<<>v^vv^v^^>^v>v><<<<<^v<vvvvv<<^^v>><>v>^v>>^^v><><v>vv<v<>>^v<vvv>v<<v>^^^^>><^<><<v>v<^<<vv^v^<^>><<><^<^><^<><v<^>^>>^>^>^<<<vv<^^<v<vv^<>>>^v><>^<>^>vv^<><^^v^v<<>><v<^>>^v>v>v>^v^>^v^v><<^<^v^><<v>^vv>^<v^^v<v<^<<<>v^>>>vv^<<>>^>^^>>^>><>^^><<>vv<v>v>^v>>^<^vvv<<<^^<v>v^^^>^<^>v^
^><^v<>>^<<^vv^<v<vv><<^^<^^<><>>^><>><^>^v>>v^v>v><>^vvv><<^>^^v^<vv<v>^>>v><^v<<v>vv^v^>>>>^vv<<v<>^^v^^v<<v>>v<v><v<<>><<vv>>vv>^v>v>^v<<v^<<v>vv<^^<<vv<<<><>>vvv>v^<^<><v>^>^^vv^<^v>><^v<<>>^vv>>v^>^^<<v^v>>v<<v>^^^>^>v<v<v^<>^<^^^v><^vv^><v<<^>>>^><<><<>>vv>^v>v^>v>^<v<<^<>vvv><>><<v^v^>>^>>>^<<v<<v>><^>>>^v^>vv><><^<<v<><<<v<v<^vv>>>><>^>v>v^^^v<^^^v>^^v>v>^<v^<<<v><<vvv<v>^>vv<<v^^^^><>>v<^>^v<><vv<vv<vv>>>^^^v<v<^<v<>><<>v^v>v<<vv<<^v^<v^vv^><^^v^v>>>>^<<<v>^v><^v^><^^>><<<^^<vv>^>^^<<<^>vvv^><vv>><<><>v^<v<v>vv<>v<v>^<vv<^v^<>v<vvv<>v<^<<^<><<><^<v>^<>>>^<v><^>v>^<>^>^v^^<<v<>v><<^v<<vvv<><^>^<>^^><<^v<^^v>^^vv^<<><<>^^v^^>>>vv<^^<^^^>v>^>^<<><<^v^>v^>^^v><^^>^v<v<>^^<vv^^^v>>v<>>^<<<>vvv<^v^^v^^^<<<^>v><>>v>>v>v<v<^>v^<v^<^v^^v>^>vvv^v<^v<>^^><^<><>^^^<v<^<^^^v^<<<vv^v><v><>>^v>^<v^^v>vv>^^^^>^v^>v>>^v^v>v<^<^<v^<<^^>>vvv<v<^<<^<><<^^v^vv^><<<<>v><<<<v<<^v^^>^><>^<v><>><v^v^^>>>>v<<^<vv>^^<>^^v<^^>^v<<^><>v^<<>^<<v^^vv>^vvv>v>^<<>vv><v<>v^<<^vv><v><>^^<^>v<<^>>><^>v<<>^>^><v>
v^>v<>^<v><><vvvv^>v^>^<^^>>vv^<v^^><<>><v<<<v>^vvv^>v<v^v<><>v<vv>v>>^v^<<>v><^^>>>>v<<>><^><>>^>v>>^vv^<^v^<v<^<<<v<^<v<>>>vv^v<v>^v<^^v<^<>><vvv<>^<v^^><^<<v><^<<>>>v^^<^v><v><<^^<v>v^<^v^<v>>>>vvvv>>vv>>^<^<>>v><>v^^v>v<v^><v<v<<^<^<>^v^>><v>>^<v<v>^<^v><>^>>^v><<<v>vv^v<>^v<v>^<>>^^^vv^>^^<^<<<^><>^^^>^<>>vv><^<^vv<<>>^v<><>v<vv<>^<<^<^v<vv^v<^>vv><>>^^><<<>v>^v^<^v>v<^<><^><v^^><v<v^><<^^>>^v>^>^<>^><>vv<v^<v^<v<>v^v<<>^^^^<<^v>^<<>><^><>v^<<<v<<><>>>>^>>v<>>^^>^^^>><v^<^<vvv<<^^^^v<>><><v^>v^^v<v^^<^>v<<^^v^>^vv^vv>^v>>^^vv>v^<>>^>^<>>vv<>>^^^<^^v>><><<v<v<v>><^<^vvv^^^<><>^>^<v<<v><v><>>>>>>vv^<v><^vv>^<<<>^>v><>v<<<>vv^v<<^>^v<v<<<v<v^>>vv^v>>>v<><^>>>^>v<>vv^><v><<^>^v<v<vv^v>vv><<^<<^<>^<>^>v<^^^v<v<<v^v>v>>v><v>>v<^><^v^<<vv^><^v<><>^<<>^<v<>^v^^v<<^v<<vv>v<>>>vv<^<<v^v<v^<><^vvv^>>^^>>v<^>>^v<<v^^^vv<><>^vv>v^vvv^^v^v<><^^v^^^<<>^<>v^^v^>>>v><^>^><^^v>^>>^v>v<^<>><v^>^><v<>^v>^<vv<>^vv<>^>^<<^>>^<><<^<v^vv>>v>^vv<<<<vvv^<v^v<<vv<>v<v^<^>v<v<^vv<v<^^>>><<^^<v>><<>>^v>^>v^>>
^^<><^>vv<>>^<>^>^^^v<>>>>>vv^<vv^v>v>>^>^v><^<vv<>><<>>>>^^v^>>^vv<v<v>^v>^^<^vv^vv<><^v>>>><<<<<<<<v<<vv<^<^^vv<vvvv^^^<v<><v<^<vvv<>^v^^>v^v><vv^^^<<^<vv^v>v<v><v^<>v<v^><>vv>v<v<v^vv^^>vv>^>^^><<<<<^<v>>^<<v<^<>vv^vv>>>v<>>v><>^^<^^^>^v^^^<<<<v><<<><<^<v<^vv^vv^v><v^<v<v<v<vv^v<<v^^v>vv^^>v<<<<<vv>^>^v>^^<>^v<^v<<><><vv<^vv^>^v>><^vv>>v<vv<<^>>>v^<<vv>>vvv>><<<<>v>v<<^^>^^><^^^^>^v>vv^^v><<><^^^^>>vv^^<^<<<<^>v^v<^>^>v^^v><>v<v<><>v<<>v^<<vvv^v^><^<><>>^^>>v>^>^v^^<^^v>vv<^^<>vv^><^^vv^>^>vv>>>>v><^<<v<^^v^v^v>>>v<><v<v>>^v^^<>><v^<><^<<^^>^>^^v^>>^v<<<^vv>>>><<<<><v<>>^>vv<vv>v^<>v<>>v<^v>^^^<^<^^^^v<<>vv>v<<^><v>><>>v<^<^>>><^<v^>>^v>v>^vvv^v<><^<v<<^>^^^><^^v^v^^v<v^^v<>>^^<^^^v>>^v^^^^>>>vv<><vv^<vvvvv>^<>>><<v><>>^vv^vvv>^<v^<v^<<v<>^>>>^v>>v>>vv>v^vv<^>>vvv<v<<v>v^>v<<<v>><v><vv>^v><><^^^<><<>v^^^v^vvv^^^vv>^<<<^><v<<>^vv<v><<v<^>^^v^^^^<>^v><>v<^<<<<<^>v<<<^<v^>vv><<>^>>v><><><<<v><vv<<><>^^><<^^^^v<<^>><v>v^^^<^<^<v<<^^><<vv<^^>^^>vv^v<v<^<v>v^<<^><>v<<<<<<<><>>v^>>v<>>^<><
vv^<><v^<<>v^<>v^^>^^>>><>><<<<^<>vv^v>^<^<<>>>^vvvv<v^^^vv>>>^>^>>^<^v^^v>^^>vv^<><^><>>v>vv^>v>v^v>>><^^<v<>v^>>>>^^^vv><^>>>^v><><<>^^^<v<v<>^v>><>vv^v<<v^^^^^v>^v^v^><^v^vv<<><<^v<vvvvv^<><<>><>^^>>>>>>>^^>^<<^v>v^vv<<^v<><^^v<v<<><v<<^^v^>v<<^^v^v^>>v>^v<>v^v><<>^<^^v^vv>^<>>^>v<v^^v<^v<v<^vv^>v<^<><^^<<<v^^^<>>><<>^v>v<vvv^^vv<>v^>^vv>^v><vvv^><^>>^>^^v>>^<>v>>>vv^<>^^v>v<>>^<v<>>>^^^<v^<^>^v<>v<<v^<><^vv^><><^<<v^^^v^<>^^v<>>^^v^><<<^<vv<^>vv^<>^v^><^<^>v<^>vv<vv^vv<^^><v^<^<><^^>>^<v<<<vvv^v>><>^^<<><>><vv>>>vv>>v^><>vv<>>>vv^><><<v>>><>>><^<>vv>^v<^^^v>><<>><^v<v>^>^><<>^>>>v>^v^^^v><><<^^^v>>>^^>^<v<<v<<v^v>v<^^<><<^><vv>>^v^>^^<<<<^vv^>>><><^^^<^v><v<^<><^>^<><>v><v<<>v^^^<^vvvv<vv^<v>>v<^v>^<<>>^><^<v^v^vvvv>^^v^v<>^>^<^>^v<>v<v^vvv^^>^^>vvv^<>^^<v<<>^<<<>^<><<v^^>^>v<<<><vv^<v^v<<v<<^<^^>^><<^^^^v>>>vv<v^^^>^^^>v>v^^v><v>^^vv^><vv>^v>>v>vv>>>><vvvv^<<v>^>>^vv><>vvv<^>^^>^v>v^^<><^<v<<>v<>v^>^v<^^vvv<v>v>>^>v^vv><>>^<v><>>^^v^>>v>>v<^^<>vv>^>^<v^^<<^>^^^>><^v^^<v>^>^v>^vv^<
vv>>><^v^>v^>>^<^<v>vv<v^^>^v>>^>>vv<v^^>vv<<<>v^v<<><>^<^^<><^<>^v^vvv><^>><^>>v^vv^>>^^^<><v<<>>^v^>^>^<vvv^v<<<^v<<<^<v^>v>>^><<^<>v>v^>>v<^><v<>>v>v^^><>^<<^^^v^vvv<<^^<^v<<^>^<<<^>>^>^^v>>v^>v<<<^^<<<><^>^>v^^^v<^>>^^vv^^<>>v><v^<v^>vvv>^><>v>v<v><^v><<<v>>^^^<v^><^>^>v<<><^<<>>>v>>>^<<^v<<<^<<<v<>v><^^^^v>^v^^^>>v>>^>>v><<^<<>v^v<<^^>v<>vvv^<vv><vv<<^v><v>v^v<<^v>^><v<v>>vv>>vv>vv^<^^^^v^>^<<^<>^v^>>v^>>^^>>v<vv>^<<<v<<^^<<><v>^>^<v>^v^vv>v>>v^^vvv>^^v>><>v><>^vvvvv^^v^>^^v<>^^^><>v<>^vv<<vvv><v<^><^v>vvv><<vv<<^<>vv^>^vv<>>^<><<v>^^vv<>><^>^^^v>v^<<^vv>v<<^><v>vv^^>^v<>>^v><v<<vvv^<>>>^^<>^^>>v^>^v><v^<>><>^<vv><<>v^<v>>^vv^v^<><vv^>>vv<<>v<vv><>>^<v><>^v><v^v>^<<>^<<<v>>^v>^<^v<>^>><<v<<<<v^>^>vv<<<<<^^<>>v><>^<^v>><vvv^<<<^^<><^>>v<^<<>>vv^>^><>^^<^^>^vvvv><>^<<^^v>>^>vv<v<<^<vv<>v^v^>vv>><^v<vv<v>v<><><v><^<^^v>v<<^v<<>v<<^^^vv<>>^>>^v>>v<<v<^>^^>v<>>^vv<>^><v^>>^>v<v>^^<><^>^v^vv^>vv>^>^^<v^>>><><v><<vv>>v><^^><<^v<>v><v>>v^^>^><>v^<<<^><>v>>>>^^><vvv<^vv>>v<v>^><vv^<<^^vv<<
^v^vv^<<><^>^v>^v<<<^^^v<<<<<>^>>vv^<<<>v^^<v<^>^^^v>vvv><<<>^^^v>vv<^><v^v^v^><><<vv^v^>><<<>v^^>v>^<>>v^^^vv^<<v<v^>^v^<>v><><<^^>^><<vvvvv^><v<^>^v<vv<^^>vv<^v>v>vv<>^>>>^v<<<<vvvv<^<^><vv^>^><v<^^^>>>>^^<><<>v<^<>>>>v>>>^vv>><vv<^^vv^v^<>vvvv^><^>^<^v<v<>^>^<v>^^><v<<vv<^v>>^v><>>v^>>v>><>><^v^^^<<v>^^v<^v<v><^<^v^>^<^>><>>>v>vv<<<>><<<^^<v>^>^^v>v>>v<v^<^^>^<v>><><v>v^<^<<^>v<>>>>v<^^vv><^v^v>^<v>^>vv^>>><<<<><v>^>><>^^vv>><^<<^^^>v^v^<>v>^v^v^v^<v^>>^v<v^v<<>^^>^<<v^><>^<>v^v^<^^^vv^>v<<v<vv^>>^<^<^<vv>>v<<>^vvv>vvvv^v^>>>^^^v>^^>^<^>v>^v><>v<v^<v><^^v^v^<<>^^>^^v^v<>^>><>^^^>>^^><<^v<>>^vv<^v^vv<v<>^<vv^<^<^>v<<>>>>vv<^v<<<><<><<v>^v<<^<vv<^<v<v>vv^<<<^^v>v><vv^>>^v^v>v^<<<>v^><>v^<>v<vvv>v^v^<<vvv^vv^<<v^><><><><>v^^^v^v<>v>vvv^>><<^>>v^^<v>>v^^<v^^<>v<^^<^<>v^<v>vvvv>^vv<v>^vv<<<><vvvv>><<>>^<><>><<v^<^<>^^>vv>^v<^><<><>^^^^v<vvv><v^<v<>^v<v<>><vv><^>^>^vv<^<<>><><^>^^^>>vv<<<^>>^<v^^>^v^<v><^^v>>^><^vvvvv<<^>><vv^>><vvv<>>^<vvv^><<<<><^vv^<>^^<><><^^^v>>>^>^^>^v><v><<^>^v<>v^
>vv^>>^>v>^<^^<^^v^<>vv^>^<vv<^^<<^^v>>><^<<>v^vv>^<><>>><v^^>>>>vv^>>><>^><<^v<^>v>v^<^>>v^>^^^<<><>vv<<>v<<vv^>^><^<>>^<v^v<<^^v><v^^<v<<v<>v<>>v<<^<vv^<<><<^v<>><>>v^<><<^v^^<>^v<v>^v^><vvv<><<v^<>^<v<>^^>><>vv^>>v^<v^><<>>vv>v^>><^v^^>>^^v<>v^<>^^<<<v^^><^<>^<^<>v>^v<v<v^v>>^<<^v>>^v<^<v<^v><><^>>><^^v<^>^><v>vv<^>>v<v<v>>><>^v<>v^v<v>v>v<^<^^<<>v<^^v^<^^<^vvv^<<v>^^<>>^^v>^>vv><^<vvvv>v^v^>vv^>^<v<>^<^<^^v><^>^v<>><<^>>>v<<<<^^<<^<^<>^^>v^>^v^vv^vv<><vv>>>v^^<^v>v><^<v>><>><v<^v^^<<v<v<v<><^v>><^>>^^>v<^^^<v^><>v^<><>>v<^<<<<<>^^<>><^^v^^^<>v><<v<^<>^<^<<^>^^<^vv>^>^><^^^<vv<>>>>vv>v>v><v^><v<<><><<><^v^^v<^vvv>^>v^v^<^<>^>>^<>^^^^v><^v^vv^v>>^^><<^^v<v<^^><<<^^v^^^v>^>^<v^<^<>><^^<^^><<<<<<>^v>><vv>vv<>^^<v>>^<><>v>v<<<<^^>^v>vv^v<<^>^^<<<^^v<>>vv^><^><^v><<v^>v>>^^>>^^v<<><>>>v^<>>^^>^<>^v^^<v^v<<>^v>v<>>>vvv^^v>v^>><^^>v^^^>v>v^>vvv<^<>v>v>^vv>^vv<<<<<<<<^>v<^<<^<<<<v><>^v><^v^>^vv>v^vv<>v>vv>v^^>^v^<v<v^^>><>v>^<<v>vvv^v>>v^v<>v>><^<<<<^^<<>v<<v^^<<v><vv<>^v<^<v>>v<^^><^^<>v>^
><>^^^>>>>>><^<>^^v^^v^>><v><<>^<v<<v<>^>^<<^^>v^^v^v>v^^^vvv><>^<<v>vv<v^<vv><v<^>^<v^>>^^<^^<v<^^v^v>>^<v^>v<>>>v^>v>>v^v^>v<>><<>^<^>>>v<<><^v><^^^>^^<vv^<><>v^vv>v<<v^^>vv<vvv<<^^>v<^^><>>v<<>^v^>v^v<^vv^<v^><v<>v<<>^vv<v<vv>^v^v<^>v><>v<<><<^^>>><><^><^v<<>v^^vv^>>>v^>>>>vvv><>>>v^^<<^<v^^v<>vv<>v^^^<v><>vv^>v<vv^^>vvv<^^><><^^><<<><<>>^<vv<<<<<<>^^>vv^^<vvvv<v^><vvv^><>^<>vv^<<<<>><>>>>>>^^>v<v^<<^<<^^<<vv<vv<^<>^^<>^vv<<<^><><v>^<^^^>v<><<>v^^v>^v^v^<>v<>>>v<>v^^>>^<>vvv><v<<>^^^^><<<v^<>>v>>v<<^^^><><<>^><<v>^v>>vv>v<<^vvvv><>vv<^^v>vv>>^<<^<>^v^<>>v>^^<>><<^v<v<<<><>vv^<<^^<^>v<v<vv^>><>^^v<<><v^<v><<^^^vvv<vv>><v>><<v<>^vvv^v><v^v<^>v^v^><<v>>v^^<>>^v<^<^^v^<^^>v<v<<^vv^<^<^v<<<^^<><<<<v^^<^><>v>^v^>^v^^^v^<<>v<><<<>^^^<><<v<^v^v^^>^v>>v>><^><<v<^v<>v^vv<^<>^^<>vv^>>><>>^<^v>^>^^>^^^^^v<v^>v><<v>>^<v>^<^^v>>v^>v^^><^v><vvv<v<>^^v^>v^>>^>^^><<>^<<v<>v>><v>vv^<^^<<<v^v>^^vvv^<<<<^^<v^<vvv>>><>>>^^>v><v<^v<>><^^><<^v^vvvvv^v>>^<<^v^v^<>>v>^>v<v^v<^><<>^vv><^>^v^<v<>>^^^<vv^v>><v
vvv>^>>><v^>^^>>>>>v^^^v<^v^<<>^v>>v>><<<<<>><><^>>^>>^<v<^^v><^^>v><vvvv^v>^<>v^<>^<<>^^>vv^^^^<v<>vv>>^^^><vv<^>v>^v>^<vv><^vv^^^><^<><^>^^<<v^>^^><v>^><^v<<^v<^<>v^<^v>v>><>>v>^>>v<<^^<>>vv<<<<^>^<v>v<>v<^<>^>^^<<<>^<><<<<v><v^<<^>>^^^vv^v^^^<v^vvv>^><v^v<v<^^><^>vv><^>v<>^>>^v<v>>v^><<><<<<^^>>v>>>>v^>>v^><>>^>^>^>^v>^<v>vv>>><>><^^^v^^vv^^v>>>v^<^v^>v>^v>v>^>>^^>v^^v<vv<^<<<v<>><<vv<v>v<v<<>v>>^v^>^<^>>>>^v>^>v<><>>vv^<<^^>v>>^<vv<><><>^<v>>v<v<>><><^^<<>><^<^<>^^>>vv^vv>v^^^<^><^<^><v<^^<v<^v>>^^^^<>>><><^^<v^<v><v<><v^>^>^v><<v>v>v>^v^<v^vv^>^^^>vv<v^>^^><^<vv<><v<vv<><>><<^>v>v^v>^vv><<>^vvv>v<v<^v^^>>>>^^<^^vv<<^^^><^<^<v>^^^<v>>v^<v^><vv^>^v<<^^^>>^>v<^v^^^<>>^<^<^^>>^v^v>v^<^v<vv<^vvvv<<<^<>^v^^<v<v^<^><<^^<<>^><<<<^<^v<<^>v<vv^>>vv^<^<>^<><<^<>>^>^^v^>^<^>^v<>v><v<v<^^v^^v^><>>><^vv^^<v^>>^<>v>v>>>^<>^^<>^vv><^^^v^>^<^v<vvv>v>>v><<<v>vvvv<v^<^>^<<<<<^vvvv^^><vv<<>v<>^><vv^>>^v^v^^>>^^v^>^<<v^v<vv^vvv>vv^>^vvv^^<v^^>><<^>><>>v<^vv><>v>v>vv<^v<><vvv>>^^v^>>>^>^^^v<>v>v<v^>>^^
<<>v>v^<v<v^>v<^^>^v^>v>^>><>^v>^^^<v^vv><<v^<v<<>><v<^<^>>>>^^>^v^<^^v^>^<<>^^^^^^v^v^^v^>>v>^^<<v<vv<<<v>><>v<v<v><v<>>v<^<v>^v><<v<vv<>^>^v^^vv<v<v>><v^>>^<>^v><>><><^v^^^^><<<v<^vv<>^>v>^v^>^<>>^><>>>^^v<vv>^^v>vv^>>^^><^<<>>^^<v^vv<<><<^^^v>><>^^v>v>>v<^^vv<>v<^v^^<^v><<^^^^<>>><vv^>^>>><<^^>vvvv<vv<<v>v><^^<^^^v>^>^<>^v<^^<v<^v>^v>v^^<^<<>^>>><v<^<>v^^>vv^v>^^v^v>v^><^>>>v>><><v>>^^^<<vv<^>vvv>^^^v<<v<^<vvv>v>vv^^<^vvv<>^v>^>v><<^v<<<>^v><<<^^><>>v<^v>^^^<^^>>v^^>vv^^^v<<v><><^v>>^>><>v<<>>><v<v>>vv>v>v<>>^v^<<><^^>v<^^v^^^v^v^v<^vvvvvv<><<^><vv^>>v^<<^<<><>^^>^<>><<v<^<>v>^<>v^vv^<v>v^<<<v<^vvv><^><>^vvv<<<v>^v>v>^>v><<^^^<v<>>>^>>>><^v<v>>v<v<>vv^<<vv<v^>^<^<vvv>^>^v<^<^v<^^<v<^>>v>^vv^><vv<v>v^v><<>^^^^<<v<>vv<v^<vvv>^^<<>^<<vv^<>>vv<v>><>><<vv<>vv>v>>^^<>^<>>v<^>^vvv<v<<v<>^<vvvv<vvv^>^vvv>v<>v<^><^^vvv<^>>^<v^v>v>^<<^vv^<^^<v^vv<>v^>>>^<>v>>^^>>v<vv^v^^^>>>>>v>v^vv<>vvv<v^<^v>^><<^>^<>vv>^<v^>^>>vv>^<>>^^>>>^<<vvvv<v>^v><<v>>^^v<^v^v<v<v><^>v<^v<<^<^>v<vv^^^>><^^>v>^><v>^^<v
v<><<<>>><^^<^^<><>v<<>>>>vv<v^>v<<vvv<^><><vv<>^^<>>>v<v>^><><<^<<<v>>>v^v^^^^^^^>>vv><^<^v>><v<><>>v<vvvv^v^>>>>v^vv^<<v>>^>v<<^>v<^^>^>^<>^<>^<^^<>v^><<<><^^<><v<<<v^v>><<v<>vv>v<>^<^<><^^v^>>v>>v<<<v<><><>^>vvvv<><>>>^>v^><<<<^<v><<v<^^<<^>v<^v<v>v<v^^vvv^<><v^><>>^vv<>>vv>>>><v^>>^>>v>^>v<vv<^v>vv<^><v>^>><<<^^<vvv<^v>v<>^v>v^^><<<v^<v^>^><^^>v>>>>>v<^>v^^^>>>v><>>v>v><^^^^><vv<vv^>^<^>v^vv^<><v<><>><<>>v^vv<<<^^>>><<<v><v^vv>^><><^><<^v><<>v^>v^<^>^<><^><>^v>>^>>^^<<><<<v>^<^^>><^^<v^>v^>>v><vv><vvv^v^v<^<vv<<>>vv>><<><v^vv^>v>^<>>v^<<<^<v<><>^v><<vv<<<v<<v^<><v^>>><><v^>^<>^>^vv<^>^>vv^^vv<<v><vv^<^>^^^^<><<<^^^v^<>vv^v>^<^^>vv>vvv>>>v>^^^>v>^^v>^>^^>>^>><>><^><^<^^><<v^v<<^>v<<^v<^<^v>>>>^<^^<<v^vv^^<^^^<^<>^^^<><>^v<>^^^^>>v>>^v><>^v<^v>^<>^<^v<v^^<>>^>^^<>>v>^^v^>v<>^^^<>>v<v<^><vv>v^>>>^<v^v>^<><vvv>^v<^^<^<>^v><v<><<v^<>v>^><v<<v<^vv<vvvvvv><>^v>><v<<v<<>^vv<^<^^^^<<>v^^^vv^v<v<<^^v^>v>^<>v^^^^>v^v<<^>>vv<<v>>^>^^vvv^<>>^>^^<^>^^^^>>^<^^>>>><>><><<><><<v^^v<vv^<>>^>^<>^<^<^
vvv><<^>^v^^>v<vv<<^^>><<<>^>^vvv<<^^v<vvvv<v><>v>^v<>v<^<v<<^>v<<v>v><>^^^<><<>^^^v<^^><><v<^<>>^>v><^>^^>vv^v><^>v<^vvv>^>>>v<>^vv^v>v>v^v<>v<^v<^<<>^^^<vv>>><>v>><vv>v^>>^<^<v<<>vv><>^vvv>><>>^<^<^^^^<><>^<>vv><^v^^^v<>v<><>v>v>^>>vv<<><v><v^^vvvv^>vv^<^v>v><<<v>v^>>^>v>^>^>><vv><>>^vv^^>><<><vv^<vv^^v^>v>>vv<><<^^<^>v<>>^^^>^<^<<>^<v<v>>^><<<>^^v<^><vv^><^v^vvv><v^v<<^vv^v^<<v<>^v>v^><^><>vvv^^>>v^^v<^vv<^v><^>vv<^^>v<vv>>v<<<><<^>^>^>v^>><>>v>>v>v>^>v<vv><v^><^<><<<<<<v>^^vv>v>><v^<>^v><vv^>v^^vvvv^>vvvv><>^><^>>^v^<v^>v<^^^v<<<^^<<^^^<>^v>>vvv^v>^^^>^v^<^>>v>^^vv<<<^<>>^<^^^^<^>v>>^v^>>v><^<<<v<v>v>^<<vv^<<>^vvv<^^^v^^^v^v^>v<v<^^>>v^vvv><vv^vv^^<<v<^<^<v>^><v<^<<v^^^<>>>>^v^<vv<v^>>>>v^<<<<v>><<<^v<>>^v>v<>v>v><>^^>v>>v<<^^^^>v<>>>v^>^^<^v^v^^v^v>^^<<^<^<^<<^<>>v>^v>^>^^><v^<>v>>>>>>v^v><^^^><^>>>>^v<>^^v<>><^>^<v>v<<<^<<v<^<>><>>>v<<<<>v^<>v<^>vv^^<^v^^>^<v<<<v>vv^>v<><v>^v<^^^<><<<<<<><><vvv>^>>v^^<<^^^^v<<<>v^^<<v>^>vv^^>v^<v^<<<v<v>^vv^>>^v^<<v<^^v>>vvv<>><v<v>><^><>>^^>v^>v
v<v<^v>>vvv<^^v^v^>^<><<>>v<<v>vv>v^^>>>^^<>^<v>><>^><<<>^^>>>v<v^<^<>^>^v^>^v>^<^^^^<^>v<vv<^v^v<v<^<v<<>^^v^v>^v<><v^^<^^vv^><^^v<>>>>^v^><<>>^v^<>v<>^>v>>v<^>vvv<^^<<vv<^>>v<<><>>v<vv><<v<v>^><^<<vv><>^<>^vv^v><v^<<v>^^<>v<<<^^>>^^<^vv<<v^v><>vv><v<<vv>^<^<>v<^vv^^<v><v^>v^<>><^vv<v^>v>v>v<^^><<>v<^<^>v>v>^<v^^vvvv<>vv>v^^v^^<><>>^>v<vv<><^v<^vvv<v>^v>vv<v<v<>^>^>^v><^<v^<>^v<^v^v>^<^^^<v<>vv>^>^<^<vvv<>vv>vv>vv>^<>^<<<v<<<vvv^<<<^<<>^>^v>>v^v<>>><>v<>>vv<><^>v><v^>><vv>^<v<<^vv><<v^<>><>>><<vvv<^v<^<<<>v^v>vv>v<<<^v^^>vv^^>vv^<>>^^<>vvv>v><<^v<v>>v^<^v>^>>>^>>^^^vv^>^>^>^v<>^v^vv^<<^<>>v>vv<^>>>vv<^^^v^v<^<^v<<vv>>><<<<<<>^>><^>^><>^<v<><<<^^>^<>^v^>v>^<>^^^<>v<>v^^v<>><v^<v<>vvv<^vvv<^^^^<^><>v<v<<<v<<vvv>^^^<<^v>^>v^v>^>^^vv>^v^>>^<<<v<<><^>v^>^>vv^^<>vv^<vvv^<><^^<v<<^<^vv>^^^>>v>^v<v<<>><>^vv>>^<^<<<v^><v^>^>^<>v>^>v>>v>v^v<^<^>vv^><<v<><v^<><>^^^v^>^<>^<v<^>>^^v<v<^>v<<>>^^>>^v^<^>v^>>^v<><v<^^^^<v>>v^^>vvv><v^>v>^>v^>^><><^v^<v<>v^<^^^^>v>^^^>^^>vv<><v>>^<><<<<<vv^>^v>v<>>v>>
>^^<>>v^>vvv<><v^<vv>>v<<<vv<v<>>>v<>v<<>^^<^v>><v^^vv>vv^v<v<^>><><v>vv<vv>^^>v>vvv^^v^^>v^^^<<v<>>^<v>^<<<^>^>><<<><><v<v>>><v^<v<v^v><>^>>^v^>><^<<^<^><>>>><v^>>><>v<>>vv><><^v>>v<<>vv<>v^>>>><><<><^^v<^>v>v^<>>>^<^v^v^>>vvvv>v>vvvvv^v<><>^<<^><<><<^vv>^^v<>vv^><v<>^<v<v><^<v>v^><vv<vvvvvvv^><<<^^<v>^><><<<vv<<^^^^>v<^>v^^<^>>^>^^^v^^^vvv^^v>^v>v^>><><<^^>>v^<>^<^>^vv^^^v>v><<><^v>v^>^v<v^vv>^<^<<<^^<^vv^<v>^^v^<<v><>^<<>^>^>vv^^v<v<v^vv^^v>^<^v>>^<^v^>v^^<<<>v>v>v<v><>v^>v>><v^^^^v^v<>><><>>>v^v>^><^<v<vv>>^v^v>><<<<<^<>v>v>v>>>>^>vvv><>v><v^<v<>>vv^^><<>>>^<^v>^<<^>v<>v^vv^>^<v^>v<v<<<^v>v<^<^v>^>>vv>><<>^<<v<^v^<<>><^v>vv>^>><<^^>vvv><>>vv>^<<^v^^v^<^v><vv<vv^v^<<<^>v^^v><^v<>^vv<^>>v<<><vv^vv>>vvv^<^<v^v^v>^v^>^^v^^>v^><^^>v>^^>v<^vvv^^>>^<><<v^v^>vv>><^vv^><^v>vvv><<<v^<v>v^<<>v<v<v><>vvvv<<^vvv<<vvv<vv>^v>>>v^>^v><^><^<^>^vv>>^<v<<>>>^vv>><v<^<vv<^<v<^vvvv<^<><><^>^v>^^v>>^>vv<<<v><>>v^v<<vvv>v<>vv>v<v<>v<^<^v^v>>>^<^^^><<>^>v^^v<>^>vv<^^>>v^^v^v<v^>^v^v<^>v^vv><<><><<vv<v<vv>`.split('\n').join('').split('');