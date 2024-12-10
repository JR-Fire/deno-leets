const DIRECTIONS = [[0, -1], [0, 1], [1, 0], [-1, 0]];

export function trailheadScores(trails: number[][]): number {

    const trailheads = allTrailheads(trails);
    
    return trailheads.values().reduce((s, n) => s + new Set<string>(n.map(([row, col]) => `${row},${col}`)).size, 0);
}

export function allTrailheads(trails: number[][]) {
    const trailheads = new Map<string, number[][]>();
    for (let row = 0; row < trails.length; row++) {
        for (let col = 0; col < trails[row].length; col++) {
            const t = trails[row][col];
            if (t === 0) {
                //trailhead starts
                const paths: number[][] = [];
                allPaths(trails, row, col, paths);

                trailheads.set(`${row},${col}`, paths);
            }
        }
    }
    return trailheads;
}

function allPaths(trails: number[][], i: number, j: number, paths: number[][]) {
    const t = trails[i][j];
    if (t === 9) {
        paths.push([i, j]);
    } else {
        DIRECTIONS.forEach(d => {
            const dx = i + d[0];
            const dy = j + d[1];
            if (onTheTrail(dx, dy, trails, i, j)) {
                allPaths(trails, dx, dy, paths);
            }
        })
    }
}


function onTheTrail(x: number, y: number, trails: number[][], i: number, j: number): boolean {
    return y >= 0 && y < trails.length && x >= 0 && x < trails[i].length && trails[x][y] === trails[i][j] + 1;
}