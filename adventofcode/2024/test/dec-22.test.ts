import { expect } from "jsr:@std/expect";
import { diffs, next, nextN, best } from "../dec-22.ts";

const { test } = Deno;

test("123", () => {
    expect(next(123n)).toEqual(15887950n);
});

test("15887950n", () => {
    expect(next(15887950n)).toEqual(16495136n);
});

test("16495136n", () => {
    expect(next(16495136n)).toEqual(527345n);
});

test("527345n", () => {
    expect(next(527345n)).toEqual(704524n);
});

test("704524n", () => {
    expect(next(704524n)).toEqual(1553684n);
});

test("1553684n", () => {
    expect(next(1553684n)).toEqual(12683156n);
});

test("12683156n", () => {
    expect(next(12683156n)).toEqual(11100544n);
});

test("11100544n", () => {
    expect(next(11100544n)).toEqual(12249484n);
});

test("12249484n", () => {
    expect(next(12249484n)).toEqual(7753432n);
});

test("7753432n", () => {
    expect(next(7753432n)).toEqual(5908254n);
});

test("2000th test sum", () => {
    expect(nextN([1n, 10n, 100n, 2024n], 2000)).toEqual(37327623n);
});

test("10th diffs", () => {
    expect(diffs([1n, 2n, 3n, 2024n], 10)).toEqual(
        [
            [
                0,
                6,
                -4,
                4,
                -9,
                5,
                4,
                -2,
                -5,
            ],
            [
                -4,
                2,
                -4,
                9,
                -9,
                9,
                -9,
                4,
                2,
            ],
            [
                0,
                -2,
                0,
                7,
                0,
                -4,
                3,
                2,
                -3,
            ],
            [
                -4,
                -2,
                1,
                -1,
                -2,
                5,
                -3,
                4,
                -7,
            ],
        ]
    );
});

test("2000th test price", () => {
    expect(best([1n, 2n, 3n, 2024n], 2000)).toEqual(23);
});