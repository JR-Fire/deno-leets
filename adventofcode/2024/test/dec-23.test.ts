import { expect } from "jsr:@std/expect";
import { optionsCount, optionsMost } from "../dec-23.ts";

const { test } = Deno;

test("0 tX in ab-cd network", () => {
    expect(optionsCount([['ab','cd']], 't')).toEqual(0);
});

test("1 tX in tb-cd network", () => {
    expect(optionsCount([['tb', 'cd']], 't')).toEqual(0);
});

test("1 tX in tb-td network", () => {
    expect(optionsCount([['tb', 'td']], 't')).toEqual(0);
});

test("3 tX in 3-node network", () => {
    expect(optionsCount([
        ['ab', 'td'],
        ['ab', 'bc'],
        ['bc', 'td'],
    ], 't')).toEqual(1);
});

test("ta in unconnected 3-node network", () => {
    expect(optionsCount([
        ['ta', 'co'],
        ['ta', 'ka'],
        ['de', 'ta'],
    ], 't')).toEqual(0);
});

test("7 tX in test network", () => {
    expect(optionsCount(testNetwork, 't')).toEqual(7);
});

test("4 tX in biggest test network", () => {
    expect(optionsMost(testNetwork, 't')).toEqual(4);
});

const testNetwork = [
    ['kh', 'tc'],
    ['qp', 'kh'],
    ['de', 'cg'],
    ['ka', 'co'],
    ['yn', 'aq'],
    ['qp', 'ub'],
    ['cg', 'tb'],
    ['vc', 'aq'],
    ['tb', 'ka'],
    ['wh', 'tc'],
    ['yn', 'cg'],
    ['kh', 'ub'],
    ['ta', 'co'],
    ['de', 'co'],
    ['tc', 'td'],
    ['tb', 'wq'],
    ['wh', 'td'],
    ['ta', 'ka'],
    ['td', 'qp'],
    ['aq', 'cg'],
    ['wq', 'ub'],
    ['ub', 'vc'],
    ['de', 'ta'],
    ['wq', 'aq'],
    ['wq', 'vc'],
    ['wh', 'yn'],
    ['ka', 'de'],
    ['kh', 'ta'],
    ['co', 'tc'],
    ['wh', 'qp'],
    ['tb', 'vc'],
    ['td', 'yn'],
];
