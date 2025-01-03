import { expect } from "jsr:@std/expect";
import { betterCheats } from "../dec-20.ts";

const { test } = Deno;

test("sample map has 8 cheats that save at least 12 tiles", () => {
    expect(betterCheats(sampleMap, 12)).toEqual(8);
});

const sampleMap = [
'###############',
'#...#...#.....#',
'#.#.#.#.#.###.#',
'#S#...#.#.#...#',
'#######.#.#.###',
'#######.#.#...#',
'#######.#.###.#',
'###..E#...#...#',
'###.#######.###',
'#...###...#...#',
'#.#####.#.###.#',
'#.#...#.#.#...#',
'#.#.#.#.#.#.###',
'#...#...#...###',
'###############',
].map((row) => row.split(''));
