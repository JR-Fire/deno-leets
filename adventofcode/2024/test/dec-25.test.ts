import { expect } from "jsr:@std/expect";
import { fits } from "../dec-25.ts";

const { test } = Deno;

test("sample has 3 fitting locks and keys", () => {
    expect(fits(sample)).toEqual(3);
});

const sample = `#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`;
