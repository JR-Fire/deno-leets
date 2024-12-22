export const ACCEPT = 'A';


const TOP = [-1, 0];
const BOTTOM = [1, 0];
const LEFT = [0, -1];
const RIGHT = [0, 1];

const DIRECTIONS = [
    TOP,
    RIGHT,
    BOTTOM,
    LEFT
];

//7 8 9
//4 5 6
//1 2 3
//  0 A

interface Path {
    symbol: string,
    direction: number[],
}

export const NUMPAD = new Map<string, Path[]>([
    [ACCEPT, [
        { symbol: "3", direction: TOP },
        { symbol: "0", direction: LEFT },
    ]],
    ["0", [
        { symbol: "A", direction: RIGHT },
        { symbol: "1", direction: TOP },
    ]],

    ["3", [
        { symbol: "6", direction: TOP },
        { symbol: "A", direction: BOTTOM },
        { symbol: "2", direction: LEFT },
    ]],
    ["2", [
        { symbol: "3", direction: RIGHT },
        { symbol: "5", direction: TOP },
        { symbol: "0", direction: BOTTOM },
        { symbol: "1", direction: LEFT },
    ]],
    ["1", [
        { symbol: "2", direction: RIGHT },
        { symbol: "4", direction: TOP },
    ]],

    ["6", [
        { symbol: "9", direction: TOP },
        { symbol: "3", direction: BOTTOM },
        { symbol: "5", direction: LEFT },
    ]],
    ["5", [
        { symbol: "6", direction: RIGHT },
        { symbol: "8", direction: TOP },
        { symbol: "2", direction: BOTTOM },
        { symbol: "4", direction: LEFT },
    ]],
    ["4", [
        { symbol: "5", direction: RIGHT },
        { symbol: "7", direction: TOP },
        { symbol: "1", direction: BOTTOM },
    ]],

    ["9", [
        { symbol: "6", direction: BOTTOM },
        { symbol: "8", direction: LEFT },
    ]],
    ["8", [
        { symbol: "9", direction: RIGHT },
        { symbol: "5", direction: BOTTOM },
        { symbol: "7", direction: LEFT },
    ]],
    ["7", [
        { symbol: "8", direction: RIGHT },
        { symbol: "4", direction: BOTTOM },
    ]],
]);

//  ^ A
//< v >

const DPAD = new Map<string, Path[]>([
    [ACCEPT, [
        { symbol: ">", direction: BOTTOM },
        { symbol: "^", direction: LEFT },
    ]],

    ["^", [
        { symbol: "A", direction: RIGHT },
        { symbol: "v", direction: BOTTOM },
    ]],

    ["<", [
        { symbol: ">", direction: RIGHT },
    ]],

    ["v", [
        { symbol: ">", direction: RIGHT },
        { symbol: "^", direction: TOP },
        { symbol: "<", direction: LEFT },
    ]],

    [">", [
        { symbol: "A", direction: TOP },
        { symbol: "v", direction: LEFT },
    ]],
]);

export function pressCode(target: string, level: number = 3): string[] {
    const symbols = target.split('');

    const path: Path[] = [];
    let current = { symbol: ACCEPT, direction: [0, 0] };
    for (let i = 0; i < symbols.length; i++) {
        const s = symbols[i];

        const trail = pressOnPad(current, s, NUMPAD);
        current = trail[trail.length - 1];

        trail.shift();

        let l = 0;

        let tp = [...trail];
        do {
            for (let j = 0; j < tp.length; j++) {
                const dPath = pressOnPad({ symbol: ACCEPT, direction: [0, 0] }, translate(tp[j].direction), DPAD);
                dPath.shift();
                const a = pressOnPad(dPath[dPath.length - 1], ACCEPT, DPAD);
                a.shift();
                tp = [...dPath, ...a];
            }
            l++;
        } while (l < level);

        path.push(...tp);
    }

    return path.map(p => p.symbol);
}

function translate(d: number[]): string {
    switch (d) {
        case LEFT:
            return '<';
        case RIGHT:
            return '>';
        case TOP:
            return '^';
        default:
            return 'v';
    }
}

//A-> ? -> ? -> target
export function pressOnPad(current: Path, target: string, pad: Map<string, Path[]>, visited: Set<string> = new Set<string>()): Path[] {
    if (current.symbol === target)
        return [current];

    const front = pad.get(current.symbol)!;
    const t = front.filter(f => f.symbol === target);
    if (t.length > 0) {
        return [current, t[0]];
    }

    visited.add(current.symbol);

    let nextPaths: Path[] = [];
    for (let i = 0; i < front.length; i++) {
        const next = front[i];
        if (!visited.has(next.symbol)) {
            visited.add(next.symbol);

            const options = pressOnPad(next, target, pad, visited);
            if (options.length < nextPaths.length || nextPaths.length === 0) {
                nextPaths = options;
            }
        }
    }

    return [current, ...nextPaths];
}