const GUARD = "^";
const BLOCK = "#";
const PATH = "X";
const directions = [
  [-1, 0, "^"],
  [0, 1, ">"],
  [1, 0, "v"],
  [0, -1, "<"],
];

export function findGuard(m: string[][]): number[] {
  const r = m.map((r, j) => {
    const rowIx = r.map((c, ix) => c === GUARD ? ix : -1);
    const row = rowIx.filter((c) => c !== -1);
    return row.length === 1 ? [j, row[0]] : undefined;
  });
  const g = r.filter((c) => c);
  return g[0]!;
}

export function walkWays(m: string[][]): number {
  const guard: number[] = findGuard(m);
  const p = m.map((r) => [...r]);

  let turn = 0;

  const n = m.length;
  const k = m[0].length;
  let i = guard[0];
  let j = guard[1];
  while (i >= 0 && i < n && j >= 0 && j < k) {
    let stepIx = turn % 4;
    if (m[i][j] === BLOCK) {
      //step back
      i -= +directions[stepIx][0];
      j -= +directions[stepIx][1];
      //turn
      turn++;
      stepIx = turn % 4;
    } else {
      p[i][j] = PATH;
    }

    i += +directions[stepIx][0];
    j += +directions[stepIx][1];
  }

  return p.reduce((steps, r) => steps + r.filter((c) => c === PATH).length, 0);
}

export function walkLoops(m: string[][]): [number, string[][][]] {
  const l: string[][][] = [];
  let count = 0;
  const guard: number[] = findGuard(m);
  const [_, p] = draw(m, guard);
  const symbols = directions.map((d) => `${d[2]}`);
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p[i].length; j++) {
      if (i !== guard[0] || j !== guard[1]) {
        if (symbols.find((s) => s === p[i][j])) {
          //console.log(`trying obstacle at ${i},${j}`)
          const [loop, obstaclePath] = draw(m, guard, [i, j]);
          if (loop) {
            count++;
            l.push(obstaclePath);
          }
          //console.log(`obstacle at ${i},${j} ${loop ? "created" : "didn't create"} a loop`)
        }
      }
    }
  }

  return [count, l];
}

function draw(
  m: string[][],
  guard: number[],
  op?: number[],
): [isLoop: boolean, p: string[][]] {
  const p = m.map((r) => [...r]);
  if (op) {
    p[op[0]][op[1]] = BLOCK;
  }

  let turn = 0;

  const n = m.length;
  const k = m[0].length;
  let i = guard[0];
  let j = guard[1];
  let loop: (number | string)[][] = [];
  let isLoop = false;
  while (i >= 0 && i < n && j >= 0 && j < k) {
    let stepIx = turn % 4;
    if (p[i][j] === BLOCK) {
      //step back
      i -= +directions[stepIx][0];
      j -= +directions[stepIx][1];
      //turn
      turn++;
      if (
        loop.find((e) =>
          e[0] === i && e[1] === j && e[2] === `${directions[stepIx][2]}`
        )
      ) {
        //check for loop after turn
        const nextt = turn % 4;
        const nexti = i + (+directions[nextt][0]);
        const nextj = j + (+directions[nextt][1]);
        if (
          nexti >= 0 && nexti < n && nextj >= 0 && nextj < k &&
          (p[nexti][nextj] === `${directions[nextt][2]}` ||
            p[nexti][nextj] === BLOCK)
        ) {
          isLoop = true;
          break;
        }
      }
      stepIx = turn % 4;
    } else {
      if (p[i][j] === `${directions[stepIx][2]}`) {
        loop.push([i, j, p[i][j]]);
      } else {
        loop = [];
        p[i][j] = `${directions[stepIx][2]}`;
      }
    }

    i += +directions[stepIx][0];
    j += +directions[stepIx][1];
  }

  return [isLoop, p];
}
