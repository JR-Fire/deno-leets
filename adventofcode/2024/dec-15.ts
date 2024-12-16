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
    walkBigWays(bigWarehouse, steps);

    return findBoxes(bigWarehouse).reduce((s, b) => s + b[0] * 100 + b[1], 0);
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

function walkBigWays(m: string[][], steps: string[]) {
    const guard: number[] = findGuard(m);

    // printWarehouse(m, `Beginning...`);

    let turn = 0;

    let row = guard[0];
    let col = guard[1];
    while (turn < steps.length) {
        const stepDir = steps[turn];

        const dir = DIRECTIONS.get(stepDir)!;

        const toRow = row + dir[1];
        const toCol = col + dir[0];
        if (largeStep(m, [col], [row], dir)) {
            col = toCol;
            row = toRow;
        }

        // printWarehouse(m, `Turn ${turn}, went ${stepDir}`);

        //end turn
        turn++;
    }
    printWarehouse(m, `Turn ${turn}`);
}

function printWarehouse(m: string[][], t: string, animate: boolean = false) {
    console.clear();
    console.log(t);
    console.log(m.map(r => r.join('')).join('\n'));

    if (animate)
        //poor man's delay
        for (let sleep = 0; sleep < 1000000000; sleep++);

    // let tmr: number;
    // const p = new Promise((r) => { tmr = setTimeout(r, 5000); });

    // p.then().finally(() => {
    //     if (tmr)
    //         clearTimeout(tmr)
    // });

    // const handle = setTimeout(callback, timeout)
    // clearTimeout(handle)

    // let handle
    // await Promise.race([
    //     http.get(‘pocketgems.com / careers /’),
    //     new Promise((resolve, reject) => {
    //         handle = setTimeout(() => {
    //             handle = undefined
    //             resolve()
    //         }, timeout)
    //     })
    // ])
    // if (handle) {
    //     clearTimeout(handle)
    // }
}

function largeStep(m: string[][], fromCol: number[], fromRow: number[], dir: number[]): boolean {

    const nextMoves = new Set<string>();
    nextMoves.add(`${fromRow},${fromCol}`);

    const n = m.length;
    const k = m[fromRow[0]].length;

    let blocked = false;
    // const moves: number[] = [];
    for (let stepIx = 0; stepIx < fromCol.length && !blocked; stepIx++) {

        const toRow = fromRow[stepIx] + dir[1];
        const toCol = fromCol[stepIx] + dir[0];
        if (toCol < 0 || toRow < 0 || toCol >= k || toRow >= n || m[toRow][toCol] === BLOCK) {
            //can't move, stay here
            blocked = true;
        }
        else if (m[toRow][toCol] === BIG_BOX[0] && dir !== LEFT && dir !== RIGHT) {
            nextMoves.add(`${toRow},${toCol}`);
            nextMoves.add(`${toRow},${toCol + 1}`);
            // if (largeStep(m, [toCol, toCol + 1], [toRow, toRow], dir))
            //     moves.push(stepIx);
            // else
            //     blocked = true;
        }
        else if (m[toRow][toCol] === BIG_BOX[1] && dir !== LEFT && dir !== RIGHT) {
            nextMoves.add(`${toRow},${toCol - 1}`);
            nextMoves.add(`${toRow},${toCol}`);
            // if (largeStep(m, [toCol - 1, toCol], [toRow, toRow], dir))
            //     moves.push(stepIx);
            // else
            //     blocked = true;
        }
        else {
            //mark to be moved
            nextMoves.add(`${fromRow[stepIx]},${fromCol[stepIx]}`);
            // moves.push(stepIx);
        }
    }

    if (!blocked) {
        const next = nextSteps(m, fromCol, fromRow, dir);
        if (!next)
            return false;
        next.forEach(k => nextMoves.add(k));

        // if (!nextMoves.values().every(mv => canMove(m, parseInt(mv.slice(mv.indexOf(',') + 1)), parseInt(mv.slice(0, mv.indexOf(','))), dir)))
        //     return false;

        nextMoves.keys().toArray().reverse().forEach((k) => {
            if (!move(m, parseInt(k.slice(k.indexOf(',') + 1)), parseInt(k.slice(0, k.indexOf(','))), dir)) {
                blocked = true;
            }
        });
    }
    // if (!blocked && moves.length > 0) {
    //     moves.forEach(stepIx => {
    //         if (!move(m, fromCol[stepIx], fromRow[stepIx], dir)) {
    //             blocked = true;
    //         }
    //     });
    // }

    return !blocked;
}

function canMove(m: string[][], fromCol: number, fromRow: number, dir: number[]) {
    const n = m.length;
    const k = m[fromRow].length;

    const toRow = fromRow + dir[1];
    const toCol = fromCol + dir[0];
    if (toCol < 0 || toRow < 0 || toCol >= k || toRow >= n || m[toRow][toCol] === BLOCK) {
        //can't move, stay here
        return false;
    }
    else if ([BOX, ...BIG_BOX].every(b => b !== m[toRow][toCol]) || canMove(m, toCol, toRow, dir)) {
        return true;
    }

    return false;
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

function nextSteps(m: string[][], fromCol: number[], fromRow: number[], dir: number[]) {

    const nextMoves = new Set<string>();
    nextMoves.add(`${fromRow},${fromCol}`);

    const n = m.length;
    const k = m[fromRow[0]].length;

    let blocked = false;
    // const moves: number[] = [];
    for (let stepIx = 0; stepIx < fromCol.length && !blocked; stepIx++) {

        const toRow = fromRow[stepIx] + dir[1];
        const toCol = fromCol[stepIx] + dir[0];
        if (toCol < 0 || toRow < 0 || toCol >= k || toRow >= n || m[toRow][toCol] === BLOCK) {
            //can't move, stay here
            blocked = true;
        }
        else if (m[toRow][toCol] === BIG_BOX[0] && dir !== LEFT && dir !== RIGHT) {
            nextMoves.add(`${toRow},${toCol}`);
            nextMoves.add(`${toRow},${toCol + 1}`);
            // if (largeStep(m, [toCol, toCol + 1], [toRow, toRow], dir))
            //     moves.push(stepIx);
            // else
            //     blocked = true;
        }
        else if (m[toRow][toCol] === BIG_BOX[1] && dir !== LEFT && dir !== RIGHT) {
            nextMoves.add(`${toRow},${toCol - 1}`);
            nextMoves.add(`${toRow},${toCol}`);
            // if (largeStep(m, [toCol - 1, toCol], [toRow, toRow], dir))
            //     moves.push(stepIx);
            // else
            //     blocked = true;
        }
        else {
            //mark to be moved
            nextMoves.add(`${fromRow[stepIx]},${fromCol[stepIx]}`);
            // moves.push(stepIx);
        }
    }

    return blocked ? undefined : nextMoves.keys().toArray();
}
