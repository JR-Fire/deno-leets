import { expect } from "jsr:@std/expect";
import { tokensToWinMost, ClawMachine, bestTokensToWin, tokensToWin } from "../dec-13.ts";

const { test } = Deno;

test("to win 2 test prizes costs 480", () => {
    expect(tokensToWinMost(testMachines, 100)).toBe(480);
});

test("best to win 2 test prizes costs 480", () => {
    expect(testMachines.map(m => bestTokensToWin(m)).reduce((s, t) => s + t, 0)).toBe(480);
});

test("best to win counts the same for 1", () => {
    expect(bestTokensToWin(testMachines[0])).toBe(tokensToWin(testMachines[0], 100))
});

test("best to win counts the same", () => {
    testMachines.map((m, ix) => {
        console.log(ix, m);
        expect(bestTokensToWin(m)).toBe(tokensToWin(m, 100))
    })
});

test("best to win 2 hard test prizes costs 666", () => {
    expect(testMachines.map(m => {
        m.PrizeAt[0] += 10000000000000;
        m.PrizeAt[1] += 10000000000000;
        return m;
    }).map(m => bestTokensToWin(m)).reduce((s, t) => s + t, 0)).toBe(875318608908);
});

const testMachines =
    `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`
        .replaceAll('\n', '   ').split('Button A:').filter(m => m.trim() !== '').map(m => {
            const cm = m.trim().split('Prize:');
            const prize = cm[1].trim().split(',').map(c => parseInt(c.replace('X=', '').replace('Y=', '').trim()))
            const buttons = cm[0].trim().split('Button B:').map(b => b.trim().split(',').map(c => parseInt(c.replace('X', '').replace('Y', '').trim())))

            return { ButtonAMove: buttons[0], ButtonBMove: buttons[1], PrizeAt: prize } as ClawMachine;
        });
