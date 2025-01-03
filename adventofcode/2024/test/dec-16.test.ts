import { expect } from "jsr:@std/expect";
import { allCheapestPathTiles, cheapestPath } from "../dec-16.ts";

const { test } = Deno;

test("kiosk maze can be done for 7036", () => {
    expect(cheapestPath(kioskMapData)).toEqual(7036);
});

test("kiosk maze has 45 options", () => {
    expect(allCheapestPathTiles(kioskMapData)).toEqual(45);
});

test("sample maze can be done for 11048", () => {
    expect(cheapestPath(sampleMapData)).toEqual(11048);
});

test("sample maze has 64 options", () => {
    expect(allCheapestPathTiles(sampleMapData)).toEqual(64);
});

const kioskMapData = [
    '###############',
    '#.......#....E#',
    '#.#.###.#.###.#',
    '#.....#.#...#.#',
    '#.###.#####.#.#',
    '#.#.#.......#.#',
    '#.#.#####.###.#',
    '#...........#.#',
    '###.#.#####.#.#',
    '#...#.....#.#.#',
    '#.#.#.###.#.#.#',
    '#.....#...#.#.#',
    '#.###.#.#.#.#.#',
    '#S..#.....#...#',
    '###############',
].map((row) => row.split(''));

const sampleMapData = [
    '#################',
    '#...#...#...#..E#',
    '#.#.#.#.#.#.#.#.#',
    '#.#.#.#...#...#.#',
    '#.#.#.#.###.#.#.#',
    '#...#.#.#.....#.#',
    '#.#.#.#.#.#####.#',
    '#.#...#.#.#.....#',
    '#.#.#####.#.###.#',
    '#.#.#.......#...#',
    '#.#.###.#####.###',
    '#.#.#...#.....#.#',
    '#.#.#.#####.###.#',
    '#.#.#.........#.#',
    '#.#.#.#########.#',
    '#S#.............#',
    '#################',
].map((row) => row.split(''));

