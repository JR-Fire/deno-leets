const LEFT = [0, -1];
const RIGHT = [0, 1];
const TOP = [-1, 0];
const BOTTOM = [1, 0];
const DIRECTIONS = [LEFT, RIGHT, TOP, BOTTOM];

export function fences(garden: string[][]): number {
  const plots = plotGarden(garden);

  return plots.values().reduce((s, [plot, totalSides, _]) => s + plot * totalSides, 0);
}

export function discount(garden: string[][]): number {
  const plots = plotGarden(garden);

  return plots.values().reduce((s, [plot, _, edges]) => s + plot * edges, 0);
}

export function plotGarden(garden: string[][]): Map<string, number[]> {
  const plots = new Map<string, number[]>();
  const mapped = new Set<string>();

  for (let row = 0; row < garden.length; row++) {
    for (let col = 0; col < garden[row].length; col++) {
      const vk = `${row},${col}`;
      if (!mapped.has(vk)) {
        //plot this one
        mapped.add(vk);
        console.log(`Start ${garden[row][col]} ${vk}`);

        const paths: number[] = [0, 0, 4];
        const plot = allPaths(garden, row, col, paths, mapped);
        if (plot.length > 4 && hasLoop(plot))
          paths[2] -= 4

        plots.set(vk, paths);

        console.log(`${garden[row][col]} ${paths} : ${plot.values().toArray().join(' ')}`)
      }
    }
  }
  return plots;
}

function allPaths(garden: string[][], row: number, col: number, paths: number[], mapped: Set<string>): number[][] {
  const t = garden[row][col];

  paths[0] += 1;
  paths[1] += 4;

  const plot: number[][] = [];
  const adjacent: number[][] = [];
  DIRECTIONS.forEach((d) => {
    const dx = row + d[0];
    const dy = col + d[1];
    const dk = `${dx},${dy}`;

    if (inGarden(dx, dy, garden, row)) {
      if (garden[dx][dy] === t) {
        //adjacent
        adjacent.push([d[0], d[1]]);

        //delete one side
        paths[1] -= 1;

        //have we been here before?
        if (!mapped.has(dk)) {
          mapped.add(dk);

          plot.push(...allPaths(garden, dx, dy, paths, mapped));
        }
      }
    }
  });

  if (adjacent.length === 2) {
    const ax = adjacent[0][0] + adjacent[1][0];
    const ay = adjacent[0][1] + adjacent[1][1]
    if (ax !== 0 && ay !== 0 && inGarden(row + ax, col + ay, garden, row) && garden[row + ax][col + ay] !== t) {
      console.log(`${t} ${row},${col} is a corner & adds 2 edges`)
      paths[2] += 2;
    }
  }

  return [[row, col], ...plot];
}

function inGarden(row: number, col: number, garden: string[][], i: number): boolean {
  return row >= 0 && row < garden.length && col >= 0 && col < garden[i].length;
}

function hasLoop(plot: number[][]) {
  return false;
}
