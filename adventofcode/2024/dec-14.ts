export default function mapRobotsSafety(robots: number[][][], turns: number, nx: number, ny: number): number {
  robots = robots.map(r => {
    const s = r[0];
    const m = r[1];
    const ex = (s[0] + turns * m[0]) % nx;
    const ey = (s[1] + turns * m[1]) % ny;
    const e = [ex < 0 ? ex + nx : ex, ey < 0 ? ey + ny : ey];
    return [e, m];
  });

  printRobotsMap(ny, nx, robots);

  const rm = Math.floor(nx / 2);
  const cm = Math.floor(ny / 2);
  const quadrants = [
    robots.filter(([p, _]) => p[0] < rm && p[1] < cm).reduce((c, _) => c + 1, 0),
    robots.filter(([p, _]) => p[0] < rm && p[1] > cm).reduce((c, _) => c + 1, 0),
    robots.filter(([p, _]) => p[0] > rm && p[1] < cm).reduce((c, _) => c + 1, 0),
    robots.filter(([p, _]) => p[0] > rm && p[1] > cm).reduce((c, _) => c + 1, 0),
  ];

  return quadrants.reduce((s, q) => s * q, 1);
}

export function robotsXMasSafety(robots: number[][][], nx: number, ny: number): number {
  for (let t = 0; t < nx * ny + 1; t++) {
    const r = robots.map(r => {
      const s = r[0];
      const m = r[1];
      const ex = (s[0] + t * m[0]) % nx;
      const ey = (s[1] + t * m[1]) % ny;
      const e = [ex < 0 ? ex + nx : ex, ey < 0 ? ey + ny : ey];
      return [e, m];
    });

    if (getRobots(ny, nx, r, '*').filter((row) => row.indexOf('*'.repeat(robots.length / 20)) >= 0).length > 0) {
      Deno.writeTextFileSync(`try${t}.txt`, printRobots(ny, nx, r));
      return t;
    }
  }

  return 0;
}

export function xmasTree(robots: number[][][], nx: number, ny: number): boolean {

  printRobotsMap(ny, nx, robots);

  let treeTop = 1;

  const rm = Math.floor(nx / 2);
  const cm = Math.floor(ny / 2);

  const xmasTreeTop = [-1, -1];
  let xmasTree = 0;
  let forest = 0;
  const maxForest = Math.ceil(robots.length / 10);
  for (let i = 0; i < ny; i++) {
    if (treeTop === 1 && i > cm)
      return false;

    const inRow = robots.filter(r => r[0][1] === i);
    if (inRow.length > treeTop)
      return false;

    if (inRow.length === 0 && treeTop > 3)
      return false;

    if (inRow.length === 0 && treeTop === 1)
      continue;

    if (inRow.length >= treeTop) {
      if (treeTop === 1) {
        inRow.sort(([p, _], [n, __]) => p[0] - n[0]);
        xmasTreeTop[0] = inRow[Math.floor(inRow.length / 2)][0][0];
        xmasTreeTop[1] = i;
      }

      const robotsOnTree = inRow.filter(r => r[0][0] >= rm - xmasTreeTop[0] || r[0][0] < rm + xmasTreeTop[0]).length;
      xmasTree += robotsOnTree;
      forest += inRow.length - robotsOnTree;
      if (forest > maxForest) {
        return false;
      }

      const xmas = robots.length - xmasTree <= maxForest;
      if (xmas) {
        return true;
      }

      treeTop += 2;
    } else {
      //is this the tree trunk?
      if (inRow.length === treeTop - 4) {
        const robotsOnTree = inRow.filter(r => r[0][0] >= rm - xmasTreeTop[0] || r[0][0] < rm + xmasTreeTop[0]).length;
        xmasTree += robotsOnTree;
        forest += inRow.length - robotsOnTree;
        const xmas = robots.length - xmasTree <= maxForest;
        if (xmas) {
          return true;
        } else {
          return false;
        }

      } else {
        return false;
      }
    }

  }
  return false;
}

export async function mapRobots(robots: number[][][], nx: number, ny: number, printFile = false) {

  for (let t = 0; t < nx * ny; t++) {

    const r = robots.map(r => {
      const s = r[0];
      const m = r[1];
      const ex = (s[0] + t * m[0]) % nx;
      const ey = (s[1] + t * m[1]) % ny;
      const e = [ex < 0 ? ex + nx : ex, ey < 0 ? ey + ny : ey];
      return [e, m];
    });

    if (printFile)
      Deno.writeTextFileSync(`try${t}.txt`, printRobots(ny, nx, r));
    else {
        console.clear();
        console.log(`Try ${t}\n${printRobots(ny, nx, r)}`);
        await new Promise((r) => { setTimeout(r, 50) });
    }
  }
}

function printRobots(ny: number, nx: number, robots: number[][][]): string {
  let s = '';
  const m: string[][] = [];
  for (let i = 0; i < ny; i++) {
    m.push([]);
    for (let j = 0; j < nx; j++) {
      const rij = robots.filter(r => r[0][0] === j && r[0][1] === i).length;
      m[i].push(rij === 0 ? ' ' : `1`);
    }
    s += m[i].join('') + '\n';
  }
  return s;
}

function getRobots(ny: number, nx: number, robots: number[][][], c: string): string[] {
  const s: string[] = [];
  const m: string[][] = [];
  for (let i = 0; i < ny; i++) {
    m.push([]);
    for (let j = 0; j < nx; j++) {
      const rij = robots.filter(r => r[0][0] === j && r[0][1] === i).length;
      m[i].push(rij === 0 ? ' ' : `${c}`);
    }
    s.push(m[i].join(''));
  }
  return s;
}

function printRobotsMap(ny: number, nx: number, robots: number[][][]) {
  const m: string[][] = [];
  for (let i = 0; i < ny; i++) {
    m.push([]);
    for (let j = 0; j < nx; j++) {
      const rij = robots.filter(r => r[0][0] === j && r[0][1] === i).length;
      m[i].push(rij === 0 ? '.' : `${rij}`);
    }
    console.log(m[i].join(''));
  }
  console.log();
}