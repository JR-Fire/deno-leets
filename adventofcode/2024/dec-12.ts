const LEFT = [0, -1];
const RIGHT = [0, 1];
const TOP = [-1, 0];
const BOTTOM = [1, 0];

const TOPLEFT = [-1, -1];
const TOPRIGHT = [-1, 1];
const BOTTOMLEFT = [1, -1];
const BOTTOMRIGHT = [1, 1];

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

        const paths: number[] = [0, 0, 0];
        const plot = allPaths(garden, row, col, paths, mapped);
        if (plot.length > 1)
          paths[2] = countTurns(plot, garden);
        else
          paths[2] = 4;

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
  DIRECTIONS.forEach((d) => {
    const dx = row + d[0];
    const dy = col + d[1];
    const dk = `${dx},${dy}`;

    if (inGarden(dx, dy, garden, row)) {
      if (garden[dx][dy] === t) {
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

  return [[row, col], ...plot];
}

function inGarden(row: number, col: number, garden: string[][], i: number): boolean {
  return row >= 0 && row < garden.length && col >= 0 && col < garden[i].length;
}

function countTurns(plot: number[][], garden: string[][]): number {
  let turns = 0;
  for (let i = 0; i < plot.length; i++) {
    const cropIx = plot[i];

    const up = sameCrop(garden, cropIx, TOP);
    const down = sameCrop(garden, cropIx, BOTTOM);
    const left = sameCrop(garden, cropIx, LEFT);
    const right = sameCrop(garden, cropIx, RIGHT);
    const upleft = sameCrop(garden, cropIx, TOPLEFT);
    const downleft = sameCrop(garden, cropIx, BOTTOMLEFT);
    const upright = sameCrop(garden, cropIx, TOPRIGHT);
    const downright = sameCrop(garden, cropIx, BOTTOMRIGHT);

    if (!up && !left) {
      turns++;
    }

    if (!down && !left) {
      turns++;
    }

    if (!up && !right) {
      turns++;
    }

    if (!down && !right) {
      turns++;
    }

    if (up && left && !upleft) {
      turns++;
    }

    if (down && left && !downleft) {
      turns++;
    }

    if (up && right && !upright) {
      turns++;
    }

    if (down && right && !downright) {
      turns++;
    }
  }

  return turns;
}

function sameCrop(garden: string[][], cropIx: number[], modifiers: number[]): boolean {
  const ix = [cropIx[0] + modifiers[0], cropIx[1] + modifiers[1]];
  return inGarden(ix[0], ix[1], garden, cropIx[0]) && garden[ix[0]][ix[1]] === garden[cropIx[0]][cropIx[1]];
}
