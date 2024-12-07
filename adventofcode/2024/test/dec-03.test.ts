import { expect } from "jsr:@std/expect";
import { sumMultiplications, sumEnabledMultiplications } from "../dec-03.ts";

const { test } = Deno;


test("sample data has sum 161", () => {
    expect(sumMultiplications(sampleEnabled)).toBe(161);
});

test("enabled sample data has enabled sum 161", () => {
    expect(sumEnabledMultiplications(sampleEnabled)).toBe(161);
});

test("disabled sample data has enabled sum 48", () => {
    expect(sumEnabledMultiplications(sampleDisabled)).toBe(48);
});

test("input data has sum 666", () => {
    // expect(sumMultiplications(data)).toBe(result1);
});
test("input data has enabled only sum 666", () => {
    // expect(sumEnabledMultiplications(data)).toBeGreaterThan(33315174);
    // expect(sumEnabledMultiplications(data)).toBeLessThan(162693101);
    // expect(sumEnabledMultiplications(data)).toBe(result2);
});

const sampleEnabled = ["xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"];
const sampleDisabled = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];