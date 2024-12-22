import { expect } from "jsr:@std/expect";
import { shortestSafePath, unsafeByte } from "../dec-18.ts";

const { test } = Deno;

test("shortest safe path after 12 bytes is 22", () => {
    expect(shortestSafePath(sampleBytes, 7, 7, [0, 0], 12)).toEqual(22);
});

test("unsafe path after byte 6,1", () => {
    expect(unsafeByte(sampleBytes, 7, 7, [0, 0], 12)).toEqual(sampleBytes[20]);
});

const sampleBytes = [
    [5, 4],
    [4, 2],
    [4, 5],
    [3, 0],
    [2, 1],
    [6, 3],
    [2, 4],
    [1, 5],
    [0, 6],
    [3, 3],
    [2, 6],
    [5, 1],
    [1, 2],
    [5, 5],
    [2, 5],
    [6, 5],
    [1, 4],
    [0, 4],
    [6, 4],
    [1, 1],
    [6, 1],
    [1, 0],
    [0, 5],
    [1, 6],
    [2, 0],
];