// import { print } from "../../utils.ts";

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

export function shortestSafePath(bytes: number[][], rows: number, columns: number, current: number[], tick: number): number {
    let t = 0;
    const m: number[][] = new Array(rows);
    for (let i = 0; i < rows; i++) {
        m[i] = new Array(columns).fill(0);
    }

    while (t < tick) {
        const b = bytes[t];
        m[b[1]][b[0]] = 1;

        t++;
    }

    return getMinPath(m, current, [rows, columns]);
};

export function unsafeByte(bytes: number[][], rows: number, columns: number, current: number[], tick: number): number[] {
    let t = 0;
    const m: number[][] = new Array(rows);
    for (let i = 0; i < rows; i++) {
        m[i] = new Array(columns).fill(0);
    }

    while (t < bytes.length) {
        const b = bytes[t];
        m[b[1]][b[0]] = 1;

        t++;
        if (t >= tick && getMinPath(m, current, [rows, columns]) === 0)
            return b;
    }

    return [0,0];
};

function getMinPath(m: number[][], start: number[], end: number[]): number {
    const pathCosts: [number, number, number][] = [[start[0], start[1], 0]];
    const visited = new Set<string>();

    while (pathCosts.length) {
        // poor man's priority queue for Dijkstra
        pathCosts.sort((a, b) => a[2] - b[2]);
        //pop the cheapest way
        const [row, column, cost] = pathCosts.shift()!;

        const k = `${row},${column}`;

        if (row === end[0] - 1 && column === end[1] - 1)
            // aaaand we're done!
            return cost;

        if (!visited.has(k)) {
            visited.add(k);

            for (let dirIx = 0; dirIx < 4; dirIx++) {
                const nr = row + DIRECTIONS[dirIx][0];
                const nc = column + DIRECTIONS[dirIx][1];
                if (nr >= 0 && nc >= 0 && nr < end[0] && nc < end[1] && m[nr][nc] !== 1) {
                    //continue, unless blocked
                    pathCosts.push([nr, nc, cost + 1]);
                }
            }
        }
    }

    return 0;
};