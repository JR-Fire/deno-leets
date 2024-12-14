const BUTTON_A_COST = 3;
const BUTTON_B_COST = 1;

export type ClawMachine = {
    ButtonAMove: number[];
    ButtonBMove: number[];
    PrizeAt: number[];
};

export function tokensToWinMost(testMachines: ClawMachine[], maxPresses: number = -1): number {
    return testMachines.map(m => tokensToWin(m, maxPresses)).reduce((s, t) => s + t, 0);
}

export function tokensToWin(m: ClawMachine, maxPresses: number = -1): number {

    for (let a = 0; (a < maxPresses || maxPresses == -1) && a * m.ButtonAMove[0] <= m.PrizeAt[0] && a * m.ButtonAMove[1] <= m.PrizeAt[1]; a++) {
        const claw = [a * m.ButtonAMove[0], a * m.ButtonAMove[1]];
        let total = a * BUTTON_A_COST;

        for (let b = 0; (b < maxPresses || maxPresses == -1); b++) {
            if (m.PrizeAt[0] === claw[0] && m.PrizeAt[1] === claw[1])
                return total;

            claw[0] += m.ButtonBMove[0];
            claw[1] += m.ButtonBMove[1];
            total += BUTTON_B_COST;
        }
    }

    return 0;
}


export function bestTokensToWin(m: ClawMachine): number {
    const x = m.PrizeAt[0];
    const y = m.PrizeAt[1];
    const a0 = m.ButtonAMove[0];
    const a1 = m.ButtonAMove[1];
    const b0 = m.ButtonBMove[0];
    const b1 = m.ButtonBMove[1];
    
    const b = Math.round(
        (y - x * a1 / a0) / (b1 - b0 * a1 / a0)
    );
    const a = Math.round((x - (b * b0)) / a0);

    if ((a * a0) + (b * b0) !== x || (a * a1) + (b * b1) !== y)
        return 0;

    const total = a * BUTTON_A_COST + b * BUTTON_B_COST;
    return total;
}