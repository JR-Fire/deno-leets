import { expect } from "jsr:@std/expect";
import { execute, mirror } from "../dec-17.ts";

const { test } = Deno;


test("sample program output", () => {
    expect(execute([0n, 1n, 5n, 4n, 3n, 0n], [729n, 0n, 0n])).toBe('4,6,3,5,6,3,5,2,1,0');
});
test("example program output", () => {
    expect(execute([0n, 3n, 5n, 4n, 3n, 0n], [2024n, 0n, 0n])).toBe('5,7,3,0');
});

test("example mirror program", () => {
    expect(execute([0n, 3n, 5n, 4n, 3n, 0n], [117440n, 0n, 0n])).toBe('0,3,5,4,3,0');
});
test("example mirror", () => {
    expect(mirror([0n, 3n, 5n, 4n, 3n, 0n])).toBe(117440n);
});

test("coded program output", () => {
    expect(execute([2n, 4n, 1n, 3n, 7n, 5n, 1n, 5n, 0n, 3n, 4n, 3n, 5n, 5n, 3n, 0n], [47006051n, 0n, 0n])).toBe('6,2,7,2,3,1,6,0,5');
});

test("program mirror", () => {
    expect(mirror([2n, 4n, 1n, 3n, 7n, 5n, 1n, 5n, 0n, 3n, 4n, 3n, 5n, 5n, 3n, 0n])).toBe(666);
});
// 35184372088832
// 35184742000000
// 35184808000000
// 35184838000000

//35184850000000n
//stopped at 35184850000000n
//236548287712877