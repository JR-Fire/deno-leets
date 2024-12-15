const GUARD = "@";
const BOX = "O";
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

export function findBoxes(m: string[][]): number[][] {
    const boxes: number[][] = [];
    m.map((r, i) => {
        r.map((c, j) => {
            if (c === BOX)
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

export function walkWays(m: string[][], steps: string[]) {
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
    else if (m[toRow][toCol] !== BOX || move(m, toCol, toRow, dir)) {
        //move it
        m[toRow][toCol] = m[fromRow][fromCol];
        m[fromRow][fromCol] = PATH;
        return true;
    }

    return false;
}
