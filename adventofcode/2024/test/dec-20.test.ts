import { expect } from "jsr:@std/expect";
import { betterCheats } from "../dec-20.ts";

const { test } = Deno;

test("sample map has 8 cheats that save at least 12 tiles", () => {
    expect(betterCheats(sampleMap, 12)).toEqual(8);
});

test("map has 1530 cheats that save at least 100 tiles", () => {
    expect(betterCheats(raceMap, 100)).toEqual(1530);
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

const raceMap = [
'#############################################################################################################################################',
'#...#...#.........#...###...#...###.....###...#...#.....#...#.....#.....#...#.....#...#.......#...#...#...#...###.................###...#...#',
'#.#.#.#.#.#######.#.#.###.#.#.#.###.###.###.#.#.#.#.###.#.#.#.###.#.###.#.#.#.###.#.#.#.#####.#.#.#.#.#.#.#.#.###.###############.###.#.#.#.#',
'#.#...#.#...#...#...#...#.#.#.#...#...#.....#...#.#.#...#.#.#.#...#...#.#.#.#.#...#.#.#.....#.#.#.#.#.#.#.#.#.....#...............#...#.#.#.#',
'#.#####.###.#.#.#######.#.#.#.###.###.###########.#.#.###.#.#.#.#####.#.#.#.#.#.###.#.#####.#.#.#.#.#.#.#.#.#######.###############.###.#.#.#',
'#.....#...#...#.......#...#.#...#...#.....#...#...#.#...#.#.#.#...#...#.#.#.#.#...#.#.#...#.#.#.#...#.#.#.#.#.......###.....###...#.#...#.#.#',
'#####.###.###########.#####.###.###.#####.#.#.#.###.###.#.#.#.###.#.###.#.#.#.###.#.#.#.#.#.#.#.#####.#.#.#.#.#########.###.###.#.#.#.###.#.#',
'#...#...#.###...#...#.....#...#...#.#...#...#.#.....#...#.#...#...#...#.#.#...#...#.#...#.#.#.#.....#.#.#...#.#.......#...#...#.#.#.#...#.#.#',
'#.#.###.#.###.#.#.#.#####.###.###.#.#.#.#####.#######.###.#####.#####.#.#.#####.###.#####.#.#.#####.#.#.#####.#.#####.###.###.#.#.#.###.#.#.#',
'#.#.#...#.....#...#.#...#...#.###.#...#...###.......#.###...#...#...#.#.#.....#...#.....#.#.#.......#.#.....#.#.....#.#...#...#.#.#...#...#.#',
'#.#.#.#############.#.#.###.#.###.#######.#########.#.#####.#.###.#.#.#.#####.###.#####.#.#.#########.#####.#.#####.#.#.###.###.#.###.#####.#',
'#.#...#...#.......#...#.#...#...#.#.......#...#.....#...#...#.....#.#.#.###...#...#...#.#.#.........#.#.....#.....#.#.#...#...#.#...#.#.....#',
'#.#####.#.#.#####.#####.#.#####.#.#.#######.#.#.#######.#.#########.#.#.###.###.###.#.#.#.#########.#.#.#########.#.#.###.###.#.###.#.#.#####',
'#.#...#.#...#...#...#...#.....#...#...#...#.#.#.......#...#.....#...#.#...#.#...#...#.#.#.#...#...#.#.#...#...#...#.#.....#...#.#...#.#.....#',
'#.#.#.#.#####.#.###.#.#######.#######.#.#.#.#.#######.#####.###.#.###.###.#.#.###.###.#.#.#.#.#.#.#.#.###.#.#.#.###.#######.###.#.###.#####.#',
'#.#.#.#.#.....#...#.#...#...#.......#.#.#.#.#.....###...#...###...#...#...#.#.....#...#.#.#.#.#.#.#.#.#...#.#...###...#...#.....#.#...#.....#',
'#.#.#.#.#.#######.#.###.#.#.#######.#.#.#.#.#####.#####.#.#########.###.###.#######.###.#.#.#.#.#.#.#.#.###.#########.#.#.#######.#.###.#####',
'#.#.#.#.#...#...#...#...#.#.#...#...#...#...#.....#...#.#.###.....#...#.###.#.......#...#.#.#...#.#.#.#.#...#.......#...#.#.......#.#...#...#',
'#.#.#.#.###.#.#.#####.###.#.#.#.#.###########.#####.#.#.#.###.###.###.#.###.#.#######.###.#.#####.#.#.#.#.###.#####.#####.#.#######.#.###.#.#',
'#...#...#...#.#.....#...#.#.#.#.#.....#.......#...#.#...#.#...#...#...#...#.#.###...#...#.#...#...#.#...#...#.#.....###...#.#.......#...#.#.#',
'#########.###.#####.###.#.#.#.#.#####.#.#######.#.#.#####.#.###.###.#####.#.#.###.#.###.#.###.#.###.#######.#.#.#######.###.#.#########.#.#.#',
'#.......#.....#...#...#...#.#.#.#...#.#...#...#.#.#.....#.#.#...#...#...#.#.#.#...#...#.#.#...#.#...#.......#.#.....#...#...#.#.........#.#.#',
'#.#####.#######.#.###.#####.#.#.#.#.#.###.#.#.#.#.#####.#.#.#.###.###.#.#.#.#.#.#####.#.#.#.###.#.###.#######.#####.#.###.###.#.#########.#.#',
'#.....#...###...#.###...#...#.#.#.#.#...#.#.#...#.#...#.#...#.#...#...#...#.#.#.#.....#.#.#...#.#...#...#...#.#.....#...#.#...#...........#.#',
'#####.###.###.###.#####.#.###.#.#.#.###.#.#.#####.#.#.#.#####.#.###.#######.#.#.#.#####.#.###.#.###.###.#.#.#.#.#######.#.#.###############.#',
'#...#.#...#...#...#...#.#.....#.#.#.###.#.#.#.....#.#.#.#...#.#.#...#...#...#.#.#...###.#.#...#.....#...#.#.#.#...#...#.#...#...#.........#.#',
'#.#.#.#.###.###.###.#.#.#######.#.#.###.#.#.#.#####.#.#.#.#.#.#.#.###.#.#.###.#.###.###.#.#.#########.###.#.#.###.#.#.#.#####.#.#.#######.#.#',
'#.#...#...#...#.#...#...#.....#...#.#...#...#...#...#.#...#.#.#.#.....#.#...#.#.#...#...#.#.....#...#.#...#.#.#...#.#...#...#.#.#.......#.#.#',
'#.#######.###.#.#.#######.###.#####.#.#########.#.###.#####.#.#.#######.###.#.#.#.###.###.#####.#.#.#.#.###.#.#.###.#####.#.#.#.#######.#.#.#',
'#.......#.#...#.#...#...#.#...#...#...#.........#...#...###.#.#...#.....###.#.#.#.###...#.#...#.#.#...#.#...#.#.#...#...#.#.#.#...#...#.#.#.#',
'#######.#.#.###.###.#.#.#.#.###.#.#####.###########.###.###.#.###.#.#######.#.#.#.#####.#.#.#.#.#.#####.#.###.#.#.###.#.#.#.#.###.#.#.#.#.#.#',
'#...#...#.#...#.###...#...#...#.#.#...#...#.....###...#...#.#.#...#.#####...#.#.#.#...#.#.#.#...#.....#.#.###.#.#.#...#.#.#.#...#...#...#...#',
'#.#.#.###.###.#.#############.#.#.#.#.###.#.###.#####.###.#.#.#.###.#####.###.#.#.#.#.#.#.#.#########.#.#.###.#.#.#.###.#.#.###.#############',
'#.#.#...#.....#.#.....#.....#...#...#...#.#.#...#...#.#...#.#.#.#...#####...#.#.#.#.#.#.#.#...#.......#.#.#...#.#.#.###...#.....###.........#',
'#.#.###.#######.#.###.#.###.###########.#.#.#.###.#.#.#.###.#.#.#.#########.#.#.#.#.#.#.#.###.#.#######.#.#.###.#.#.###############.#######.#',
'#.#...#.......#.#.#...#...#.#...###...#.#.#.#.#...#.#.#...#.#...#.#########S#.#.#.#.#.#.#...#.#...#...#.#...#...#.#.......#.....#...#...#...#',
'#.###.#######.#.#.#.#####.#.#.#.###.#.#.#.#.#.#.###.#.###.#.#####.###########.#.#.#.#.#.###.#.###.#.#.#.#####.###.#######.#.###.#.###.#.#.###',
'#...#.###.....#.#.#.###...#.#.#.#...#.#.#.#.#.#.###.#.###.#.#.....###########.#.#.#.#.#.#...#...#.#.#...#...#.#...#...#...#.#...#.#...#...###',
'###.#.###.#####.#.#.###.###.#.#.#.###.#.#.#.#.#.###.#.###.#.#.###############.#.#.#.#.#.#.#####.#.#.#####.#.#.#.###.#.#.###.#.###.#.#########',
'#...#.#...#...#...#...#...#.#.#.#...#.#.#.#.#.#.#...#...#...#...#############.#.#.#.#...#.#...#.#.#.#.....#...#.#...#...#...#.....#...#.....#',
'#.###.#.###.#.#######.###.#.#.#.###.#.#.#.#.#.#.#.#####.#######.#############.#.#.#.#####.#.#.#.#.#.#.#########.#.#######.###########.#.###.#',
'#...#.#.....#...#...#.....#...#.....#...#...#.#.#.#...#.......#.#######.......#.#.#.....#...#.#.#.#.#.#.........#.....#...#...........#.#...#',
'###.#.#########.#.#.#########################.#.#.#.#.#######.#.#######.#######.#.#####.#####.#.#.#.#.#.#############.#.###.###########.#.###',
'#...#...###...#.#.#.#.......#...............#...#.#.#...#...#.#.#######.#.....#.#.#...#.#.....#.#.#.#.#.#.............#...#.###.........#...#',
'#.#####.###.#.#.#.#.#.#####.#.#############.#####.#.###.#.#.#.#.#######.#.###.#.#.#.#.#.#.#####.#.#.#.#.#.###############.#.###.###########.#',
'#.#...#.#...#...#.#.#.#.....#.#.............###...#...#.#.#...#...#####.#.#...#.#.#.#...#.......#...#.#.#.............#...#.....#...#...#...#',
'#.#.#.#.#.#######.#.#.#.#####.#.###############.#####.#.#.#######.#####.#.#.###.#.#.#################.#.#############.#.#########.#.#.#.#.###',
'#...#.#...#.....#.#.#.#...#...#...............#.....#.#.#.......#...###.#.#.....#.#.###.........#...#...#...#...#.....#...#...#...#...#.#...#',
'#####.#####.###.#.#.#.###.#.#################.#####.#.#.#######.###.###.#.#######.#.###.#######.#.#.#####.#.#.#.#.#######.#.#.#.#######.###.#',
'#.....#.....###...#...###...###...........#...#...#...#.......#.###.###.#.#.......#...#.#.....#...#.......#...#...#...#...#.#.#.....###...#.#',
'#.#####.#######################.#########.#.###.#.###########.#.###.###.#.#.#########.#.#.###.#####################.#.#.###.#.#####.#####.#.#',
'#.......#.......................#...#...#...#...#.....#.....#...#...###.#.#.#...#.....#...#...#...#.......#...#...#.#...#...#.......#...#...#',
'#########.#######################.#.#.#.#####.#######.#.###.#####.#####.#.#.#.#.#.#########.###.#.#.#####.#.#.#.#.#.#####.###########.#.#####',
'#.........#...#...#...#.......#...#...#.....#.#.......#.#...#...#E#####.#.#.#.#.#.....#.....#...#...#...#...#...#...#.....#...#.......#.....#',
'#.#########.#.#.#.#.#.#.#####.#.###########.#.#.#######.#.###.#.#######.#.#.#.#.#####.#.#####.#######.#.#############.#####.#.#.###########.#',
'#.........#.#.#.#.#.#...#...#...###.........#.#.#...#...#.....#...#.....#.#.#.#...#...#.....#.#.......#.............#.....#.#.#.#.........#.#',
'#########.#.#.#.#.#.#####.#.#######.#########.#.#.#.#.###########.#.#####.#.#.###.#.#######.#.#.###################.#####.#.#.#.#.#######.#.#',
'#.........#.#...#...###...#.........#...###...#...#...#...#...#...#...#...#...#...#...#.....#.#...................#.#...#...#...#...#...#...#',
'#.#########.###########.#############.#.###.###########.#.#.#.#.#####.#.#######.#####.#.#####.###################.#.#.#.###########.#.#.#####',
'#...........#...#...#...#...#...#.....#.....#.........#.#.#.#.#...###.#.......#.....#.#.......###...#...#...#.....#...#.#...#.......#.#.....#',
'#############.#.#.#.#.###.#.#.#.#.###########.#######.#.#.#.#.###.###.#######.#####.#.###########.#.#.#.#.#.#.#########.#.#.#.#######.#####.#',
'#.....#.......#.#.#.#...#.#...#...#.........#.......#.#.#...#.#...#...#.......#...#...#...#.......#...#...#.#...###...#...#.#.#.......#.....#',
'#.###.#.#######.#.#.###.#.#########.#######.#######.#.#.#####.#.###.###.#######.#.#####.#.#.###############.###.###.#.#####.#.#.#######.#####',
'#.#...#.......#...#.....#...#.......#...###...#.....#.#.....#.#...#...#.###...#.#.#...#.#.#...............#.....#...#.....#...#.#.......#...#',
'#.#.#########.#############.#.#######.#.#####.#.#####.#####.#.###.###.#.###.#.#.#.#.#.#.#.###############.#######.#######.#####.#.#######.#.#',
'#.#.#...#.....#...#.....#...#.........#.#...#...#...#.......#.#...#...#...#.#...#...#.#.#.#...............#.....#.#.....#.......#...#.....#.#',
'#.#.#.#.#.#####.#.#.###.#.#############.#.#.#####.#.#########.#.###.#####.#.#########.#.#.#.###############.###.#.#.###.###########.#.#####.#',
'#.#.#.#.#.......#...#...#.#.............#.#.......#.........#.#.#...#...#.#.#...#...#.#.#.#...............#.#...#.#.###.............#.#.....#',
'#.#.#.#.#############.###.#.#############.#################.#.#.#.###.#.#.#.#.#.#.#.#.#.#.###############.#.#.###.#.#################.#.#####',
'#.#...#...............#...#...............#...#...#...#...#.#.#.#...#.#.#.#.#.#.#.#.#...#.........#.......#.#.#...#.......#...#...###.#.#...#',
'#.#####################.###################.#.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.#.#.#.#############.#.#######.#.#.#########.#.#.#.#.###.#.#.#.#',
'#...#...#.....#...#...#.#.................#.#...#...#...#...#...###.#.#.#.#.#.#...#...#.........#.#.........#...#...#.....#.#...#.....#...#.#',
'###.#.#.#.###.#.#.#.#.#.#.###############.#.#######################.#.#.#.#.#.#######.#.#######.#.###############.#.#.#####.###############.#',
'###...#...###...#...#...#...............#.#.............###...#...#...#...#...#.......#.#.......#.................#.#...#...#...#...#.......#',
'#######################################.#.#############.###.#.#.#.#############.#######.#.#########################.###.#.###.#.#.#.#.#######',
'###.....#.......###.....................#...#.....#...#...#.#.#.#...#...#.....#.........#...#.........#...#.......#...#...#...#.#.#.#.......#',
'###.###.#.#####.###.#######################.#.###.#.#.###.#.#.#.###.#.#.#.###.#############.#.#######.#.#.#.#####.###.#####.###.#.#.#######.#',
'#...#...#.#...#...#.#.......#...#...#...###...###.#.#.#...#.#.#.#...#.#.#...#...........###...#.....#...#...#.....###.#...#...#...#.#...#...#',
'#.###.###.#.#.###.#.#.#####.#.#.#.#.#.#.#########.#.#.#.###.#.#.#.###.#.###.###########.#######.###.#########.#######.#.#.###.#####.#.#.#.###',
'#...#.###...#...#.#...#...#...#...#...#.........#.#.#.#...#.#...#.....#...#.....#.....#.......#.#...#...#...#.......#.#.#...#.....#.#.#.#.###',
'###.#.#########.#.#####.#.#####################.#.#.#.###.#.#############.#####.#.###.#######.#.#.###.#.#.#.#######.#.#.###.#####.#.#.#.#.###',
'#...#.#.....###.#.#...#.#.###...................#...#.#...#.#.....#.......#...#...###.......#...#.....#...#.........#.#.###.......#...#.#...#',
'#.###.#.###.###.#.#.#.#.#.###.#######################.#.###.#.###.#.#######.#.#############.#########################.#.###############.###.#',
'#...#...#...#...#...#...#...#.....................###...#...#...#...###.....#...#...###...#.#...#...............#...#...#...###...#...#.#...#',
'###.#####.###.#############.#####################.#######.#####.#######.#######.#.#.###.#.#.#.#.#.#############.#.#.#####.#.###.#.#.#.#.#.###',
'#...#...#.#...#...........#.#.................#...#...#...#.....#.....#...#.....#.#.#...#...#.#.#.#.............#.#...#...#.....#...#.#.#...#',
'#.###.#.#.#.###.#########.#.#.###############.#.###.#.#.###.#####.###.###.#.#####.#.#.#######.#.#.#.#############.###.#.#############.#.###.#',
'#.....#.#.#.....#.......#.#.#...............#.#...#.#.#...#.#...#.#...#...#...#...#.#.......#.#...#...#...###...#.#...#.#.............#.....#',
'#######.#.#######.#####.#.#.###############.#.###.#.#.###.#.#.#.#.#.###.#####.#.###.#######.#.#######.#.#.###.#.#.#.###.#.###################',
'#.......#.......#.....#.#.#.#.............#.#.....#.#...#.#.#.#.#.#...#.#.....#...#.###...#.#...#...#...#.....#...#.....#.............#.....#',
'#.#############.#####.#.#.#.#.###########.#.#######.###.#.#.#.#.#.###.#.#.#######.#.###.#.#.###.#.#.#################################.#.###.#',
'#...#...#.....#.#.....#...#...#.........#...#...###...#.#.#...#.#...#.#.#.#...#...#.....#.#.#...#.#...........#.....#.........#.......#.#...#',
'###.#.#.#.###.#.#.#############.#######.#####.#.#####.#.#.#####.###.#.#.#.#.#.#.#########.#.#.###.###########.#.###.#.#######.#.#######.#.###',
'###...#...#...#...#.....#...#...#.......#...#.#.#.....#.#.#.....#...#...#.#.#.#.....#.....#...###...........#.#.#...#.......#.#.....#...#...#',
'###########.#######.###.#.#.#.###.#######.#.#.#.#.#####.#.#.#####.#######.#.#.#####.#.#####################.#.#.#.#########.#.#####.#.#####.#',
'#...#...#...#...#...###.#.#...###.......#.#.#.#.#.....#...#.....#.#.....#.#.#...#...#...###...###...........#.#.#...#...#...#.#...#...#.....#',
'#.#.#.#.#.###.#.#.#####.#.#############.#.#.#.#.#####.#########.#.#.###.#.#.###.#.#####.###.#.###.###########.#.###.#.#.#.###.#.#.#####.#####',
'#.#...#...#...#...#...#...#.......#...#.#.#.#.#...#...#.......#.#...###.#...#...#...#...#...#...#.........###.#...#.#.#.#...#.#.#.#...#.....#',
'#.#########.#######.#.#####.#####.#.#.#.#.#.#.###.#.###.#####.#.#######.#####.#####.#.###.#####.#########.###.###.#.#.#.###.#.#.#.#.#.#####.#',
'#.....#.....#...#...#...###.....#...#...#.#.#...#.#...#.....#...###...#.#.....#.....#.#...#.....#...#...#...#.....#...#.#...#...#...#...#...#',
'#####.#.#####.#.#.#####.#######.#########.#.###.#.###.#####.#######.#.#.#.#####.#####.#.###.#####.#.#.#.###.###########.#.#############.#.###',
'#...#...#...#.#.#.....#.#...###.......#...#...#.#.#...#.....#.......#.#.#.....#.....#.#.#...#...#.#...#.....#.........#.#.............#.#...#',
'#.#.#####.#.#.#.#####.#.#.#.#########.#.#####.#.#.#.###.#####.#######.#.#####.#####.#.#.#.###.#.#.###########.#######.#.#############.#.###.#',
'#.#.#.....#...#.......#...#...#.......#.#.....#.#.#...#.#...#.......#.#.#.....#...#.#.#.#.###.#.#.........#...#.......#...#...........#.....#',
'#.#.#.#######################.#.#######.#.#####.#.###.#.#.#.#######.#.#.#.#####.#.#.#.#.#.###.#.#########.#.###.#########.#.#################',
'#.#...#...#.................#...#...#...#.#...#.#.#...#.#.#...#...#.#.#.#.#...#.#.#.#...#.#...#.#...#...#.#.#...#.....#...#...#.............#',
'#.#####.#.#.###############.#####.#.#.###.#.#.#.#.#.###.#.###.#.#.#.#.#.#.#.#.#.#.#.#####.#.###.#.#.#.#.#.#.#.###.###.#.#####.#.###########.#',
'#.....#.#.#.#.....###...#...#...#.#...#...#.#.#.#.#...#.#...#.#.#.#.#.#.#.#.#.#.#...#.....#...#...#.#.#.#...#.###.#...#.....#...#...........#',
'#####.#.#.#.#.###.###.#.#.###.#.#.#####.###.#.#.#.###.#.###.#.#.#.#.#.#.#.#.#.#.#####.#######.#####.#.#.#####.###.#.#######.#####.###########',
'#.....#.#...#...#.....#...#...#.#.....#...#.#...#.#...#.#...#.#.#.#.#...#.#.#.#...#...#.....#...#...#.#.....#.....#.#...###.#...#...#...#...#',
'#.#####.#######.###########.###.#####.###.#.#####.#.###.#.###.#.#.#.#####.#.#.###.#.###.###.###.#.###.#####.#######.#.#.###.#.#.###.#.#.#.#.#',
'#.....#...#...#...#...#...#.#...#...#...#...###...#.#...#...#...#.#.....#.#.#...#.#...#...#...#.#...#...#...#.....#...#...#.#.#...#...#...#.#',
'#####.###.#.#.###.#.#.#.#.#.#.###.#.###.#######.###.#.#####.#####.#####.#.#.###.#.###.###.###.#.###.###.#.###.###.#######.#.#.###.#########.#',
'#...#.....#.#...#...#.#.#.#.#...#.#...#.#.......#...#.#...#.....#...#...#...###.#.###.#...#...#.#...#...#...#.###.#.......#...###.#...#.....#',
'#.#.#######.###.#####.#.#.#.###.#.###.#.#.#######.###.#.#.#####.###.#.#########.#.###.#.###.###.#.###.#####.#.###.#.#############.#.#.#.#####',
'#.#...#...#...#.......#.#...#...#.#...#.#.#...#...###...#...#...###.#.........#...#...#...#.#...#.....#...#.#.#...#.....###.....#.#.#.#.....#',
'#.###.#.#.###.#########.#####.###.#.###.#.#.#.#.###########.#.#####.#########.#####.#####.#.#.#########.#.#.#.#.#######.###.###.#.#.#.#####.#',
'#...#.#.#.###...#...#...#.....#...#...#.#.#.#.#.#...#.......#.#...#.....#...#.#.....#...#.#.#...#.......#...#.#.......#...#.#...#...#.....#.#',
'###.#.#.#.#####.#.#.#.###.#####.#####.#.#.#.#.#.#.#.#.#######.#.#.#####.#.#.#.#.#####.#.#.#.###.#.###########.#######.###.#.#.###########.#.#',
'#...#...#.#...#...#.#.###.....#.#.....#.#.#.#.#...#.#.#.....#...#.....#.#.#...#...#...#...#.....#.#.....#...#.......#...#...#...#.....###...#',
'#.#######.#.#.#####.#.#######.#.#.#####.#.#.#.#####.#.#.###.#########.#.#.#######.#.#############.#.###.#.#.#######.###.#######.#.###.#######',
'#.......#...#.......#...###...#.#.#...#.#...#.#.....#...###...#...#...#.#.....###...#.........###...#...#.#.....#...###.#...#...#.#...#...###',
'#######.###############.###.###.#.#.#.#.#####.#.#############.#.#.#.###.#####.#######.#######.#######.###.#####.#.#####.#.#.#.###.#.###.#.###',
'#.......#...#...#.....#...#...#.#...#.#.#.....#.......#...#...#.#.#...#.#...#.......#.......#.........#...#.....#.....#.#.#.#.....#.....#...#',
'#.#######.#.#.#.#.###.###.###.#.#####.#.#.###########.#.#.#.###.#.###.#.#.#.#######.#######.###########.###.#########.#.#.#.###############.#',
'#...#...#.#...#.#...#...#.###.#.###...#.#.#...#.....#.#.#.#.#...#.....#.#.#...#.....###...#.#.......#...###.......#...#...#.#.............#.#',
'###.#.#.#.#####.###.###.#.###.#.###.###.#.#.#.#.###.#.#.#.#.#.#########.#.###.#.#######.#.#.#.#####.#.###########.#.#######.#.###########.#.#',
'#...#.#.#...#...#...###.#.#...#...#.#...#.#.#.#...#.#.#.#...#.........#.#.#...#.......#.#...#.....#.#.......#.....#.....###.#...........#.#.#',
'#.###.#.###.#.###.#####.#.#.#####.#.#.###.#.#.###.#.#.#.#############.#.#.#.#########.#.#########.#.#######.#.#########.###.###########.#.#.#',
'#.#...#...#.#.#...#.....#.#...#...#.#...#...#.#...#...#...#...#...#...#.#.#...#.....#.#...#...#...#.....#...#.#...#...#...#...#.......#.#.#.#',
'#.#.#####.#.#.#.###.#####.###.#.###.###.#####.#.#########.#.#.#.#.#.###.#.###.#.###.#.###.#.#.#.#######.#.###.#.#.#.#.###.###.#.#####.#.#.#.#',
'#...#.....#.#.#.###...#...#...#...#.#...#...#.#...###.....#.#.#.#.#...#.#.#...#...#.#.#...#.#.#.#.......#...#.#.#.#.#.#...#...#...###...#...#',
'#####.#####.#.#.#####.#.###.#####.#.#.###.#.#.###.###.#####.#.#.#.###.#.#.#.#####.#.#.#.###.#.#.#.#########.#.#.#.#.#.#.###.#####.###########',
'#.....#...#.#...#...#...###.#...#.#.#.#...#...#...#...#.....#...#.#...#.#.#...#...#...#...#.#.#.#.#.....#...#.#.#.#.#.#.###.....#.........###',
'#.#####.#.#.#####.#.#######.#.#.#.#.#.#.#######.###.###.#########.#.###.#.###.#.#########.#.#.#.#.#.###.#.###.#.#.#.#.#.#######.#########.###',
'#...#...#.#.#.....#.###.....#.#.#.#.#.#.#...#...###...#.......###...###...###...###...#...#.#.#.#.#.###.#.###.#.#.#.#.#.......#...#.....#...#',
'###.#.###.#.#.#####.###.#####.#.#.#.#.#.#.#.#.#######.#######.#####################.#.#.###.#.#.#.#.###.#.###.#.#.#.#.#######.###.#.###.###.#',
'#...#...#.#.#.#...#.....#...#.#.#.#.#.#.#.#.#.#.......#.....#...................#...#...#...#.#.#.#.#...#...#.#.#.#.#...#...#.#...#...#...#.#',
'#.#####.#.#.#.#.#.#######.#.#.#.#.#.#.#.#.#.#.#.#######.###.###################.#.#######.###.#.#.#.#.#####.#.#.#.#.###.#.#.#.#.#####.###.#.#',
'#.......#...#...#.........#...#...#...#...#...#.........###.....................#.........###...#...#.......#...#...###...#...#.......###...#',
'#############################################################################################################################################',
].map((row) => row.split(''));
