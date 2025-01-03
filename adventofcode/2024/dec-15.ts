import { print } from "../../utils.ts"

const GUARD = "@";
const BOX = "O";
const BIG_BOX = ['[', ']'];
const BLOCK = "#";
const PATH = ".";

const TOP = [0, -1];
const BOTTOM = [0, 1];
const LEFT = [-1, 0];
const RIGHT = [1, 0];
const DIRECTIONS = new Map<string, number[]>([
    ['<', LEFT],
    ['>', RIGHT],
    ['^', TOP],
    ['v', BOTTOM],
]);

export function allBoxes(warehouse: string[][], steps: string[]): number {
    walkWays(warehouse, steps);

    return findBoxes(warehouse).reduce((s, b) => s + b[0] * 100 + b[1], 0);
}

export function allBigBoxes(warehouse: string[][], steps: string[]): number {
    const bigWarehouse = engorge(warehouse);
    walkTheWay(bigWarehouse, steps);

    return findBoxes(bigWarehouse).reduce((s, b) => s + b[0] * 100 + b[1], 0);
}
function walkTheWay(m: string[][], steps: string[], animate = false) {
    print(m, "Beginning...", animate);

    const guard = findGuard(m);
    while (steps.length > 0) {
        const step = steps.shift()!;
        const d = DIRECTIONS.get(step)!;
        const row = d[1];
        const column = d[0];
        const moves: number[][] = getMoves(m, guard[0], guard[1], row, column);
        if (moves.length > 0) {
            //move it
            const moved = new Set<string>();
            moves.forEach(([toRow, toColumn]) => {
                const fromRow = toRow - row;
                const fromColumn = toColumn - column;
                const k = `${toRow},${toColumn}`;
                if (!moved.has(k)) {
                    moved.add(k);

                    m[toRow][toColumn] = m[fromRow][fromColumn];
                    m[fromRow][fromColumn] = PATH;
                }
            });

            guard[0] += row;
            guard[1] += column;
        }

        print(m, `${step}`, animate);
    }
}

function getMoves(m: string[][], fromRow: number, fromColumn: number, directionRow: number, directionColumn: number): number[][] {
    const [nextRow, nextColumn] = [fromRow + directionRow, fromColumn + directionColumn];

    if (fromRow < 0 || fromRow >= m.length || fromColumn < 0 || fromColumn >= m[fromRow].length
        || nextRow < 0 || nextRow >= m.length || nextColumn < 0 || nextColumn >= m[fromRow + directionRow].length)
        //it's out
        return [];

    if (m[fromRow][fromColumn] === BLOCK || m[nextRow][nextColumn] === BLOCK)
        //we're blocked
        return [];

    const bigBoxness = BIG_BOX.indexOf(m[nextRow][nextColumn]);
    if (bigBoxness >= 0) {
        const nextMoves = getMoves(m, nextRow, nextColumn, directionRow, directionColumn);
        if (nextMoves.length === 0)
            //no can do
            return [];

        if (directionRow !== 0) {
            //account for box sides
            // same row, but left half has the right half to the right: col+1, right half has left to its left: col-1
            const boxHalf = bigBoxness === 0 ? 1 : -1;
            const halfMoves2 = getMoves(m, nextRow, nextColumn + boxHalf, directionRow, directionColumn);
            if (halfMoves2.length === 0)
                //no can do
                return [];

            return [...nextMoves, ...halfMoves2, [nextRow, nextColumn]];
        }

        return [...nextMoves, [nextRow, nextColumn]];
    }

    // just do it
    return [[nextRow, nextColumn]];
}


function findBoxes(m: string[][]): number[][] {
    const boxes: number[][] = [];
    m.map((r, i) => {
        r.map((c, j) => {
            if (c === BOX || c === BIG_BOX[0])
                boxes.push([i, j]);
        });
    });

    return boxes;
}

export function findGuard(m: string[][]): number[] {
    const r = m.map((r, j) => {
        const rowIx = r.map((c, ix) => c === GUARD ? ix : -1);
        const row = rowIx.filter((c) => c !== -1);
        return row.length === 1 ? [j, row[0]] : undefined;
    });
    const g = r.filter((c) => c);
    return g[0]!;
}

function walkWays(m: string[][], steps: string[]) {
    const guard: number[] = findGuard(m);

    let turn = 0;

    let row = guard[0];
    let col = guard[1];
    while (turn < steps.length) {
        const stepDir = steps[turn];

        const dir = DIRECTIONS.get(stepDir)!;

        const toRow = row + dir[1];
        const toCol = col + dir[0];
        if (move(m, col, row, dir)) {
            col = toCol;
            row = toRow;
        }

        //end turn
        turn++;
    }
}

function move(m: string[][], fromCol: number, fromRow: number, dir: number[]) {
    const n = m.length;
    const k = m[fromRow].length;

    const toRow = fromRow + dir[1];
    const toCol = fromCol + dir[0];
    if (toCol < 0 || toRow < 0 || toCol >= k || toRow >= n || m[toRow][toCol] === BLOCK) {
        //can't move, stay here
    }
    else if ([BOX, ...BIG_BOX].every(b => b !== m[toRow][toCol]) || move(m, toCol, toRow, dir)) {
        //move it
        m[toRow][toCol] = m[fromRow][fromCol];
        m[fromRow][fromCol] = PATH;
        return true;
    }

    return false;
}

function engorge(w: string[][]): string[][] {
    const engordedWarehouse: string[][] = [];
    w.map(r => {
        engordedWarehouse.push([]);
        r.map(c => {
            if (c === BOX) {
                engordedWarehouse[engordedWarehouse.length - 1].push(...BIG_BOX);
            } else {
                engordedWarehouse[engordedWarehouse.length - 1].push(c);
                if (c === GUARD)
                    engordedWarehouse[engordedWarehouse.length - 1].push(PATH);
                else {
                    engordedWarehouse[engordedWarehouse.length - 1].push(c);
                }
            }
        })
    });

    return engordedWarehouse;
}