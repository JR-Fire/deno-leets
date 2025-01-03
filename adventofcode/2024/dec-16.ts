const START = 'S';
const END = 'E';

const TOP = [0, -1];
const BOTTOM = [0, 1];
const LEFT = [-1, 0];
const RIGHT = [1, 0];

const DIRECTIONS = [
    TOP,
    RIGHT,
    BOTTOM,
    LEFT
];

interface Coordinates {
    x: number;
    y: number;
}

export function cheapestPath(dataMap: string[][]): number {
    const { maze, start, end } = getMap(dataMap);

    return getMinScore(maze, start, end);
};

export function allCheapestPathTiles(dataMap: string[][]): number {
    const { maze, start, end } = getMap(dataMap);

    const cheapest = getMinScore(maze, start, end);
    const all= getAllMinPaths(maze, start, end, cheapest);

    const uq = new Set<string>();
    all.forEach(p => p.forEach((p) => uq.add(`${p.x},${p.y}`)));

    return uq.size;
};

function getMap(maze: string[][]) {
    const start: Coordinates = { x: 0, y: 0 };
    const end: Coordinates = { x: 0, y: 0 };
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === START) {
                start.x = j;
                start.y = i;
            } else if (maze[i][j] === END) {
                end.x = j;
                end.y = i;
            }
        }
    }

    return { maze, start, end };
};

function getMinScore(maze: string[][], start: Coordinates, end: Coordinates): number {
    //start at Sxy, facing east - at DIRECTIONS[1]
    const pathCosts: [number, number, number, number][] = [[start.x, start.y, 1, 0]];
    const visited = new Set<string>();

    while (pathCosts.length) {
        // poor man's priority queue for Dijkstra
        pathCosts.sort((a, b) => a[3] - b[3]);
        //pop the cheapest way
        const [x, y, dirIx, score] = pathCosts.shift()!;

        const k = `${x},${y},${dirIx}`;

        if (x === end.x && y === end.y)
            // aaaand we're done!
            return score;

        if (!visited.has(k)) {
            visited.add(k);

            const nx = x + DIRECTIONS[dirIx][0];
            const ny = y + DIRECTIONS[dirIx][1];
            if (maze[ny]?.[nx] !== "#") {
                //continue, unless blocked - it's cheapest, turns are expensive
                pathCosts.push([nx, ny, dirIx, score + 1]);
            }

            //turn right: +1, turn left: turn right three times...
            pathCosts.push([x, y, (dirIx + 1) % 4, score + 1000]);
            pathCosts.push([x, y, (dirIx + 3) % 4, score + 1000]);
        }
    }

    return 0;
};

function getAllMinPaths(maze: string[][], start: Coordinates, end: Coordinates, cheapest: number): Coordinates[][] {
    //start at Sxy, facing east - at DIRECTIONS[1]
    const pathCosts: [number, number, number, number, Coordinates[]][] = [[start.x, start.y, 1, 0, [start]]];
    const visited = new Map<string, number>();
    const paths: Coordinates[][] = [];

    while (pathCosts.length) {
        //try the next one
        const [x, y, dirIx, score, path] = pathCosts.shift()!;

        const k = `${x},${y},${dirIx}`;
        const otherPath = visited.get(k) || score;
        if (score <= cheapest) {
            if (score <= otherPath) {
                //new one, or a cheaper path to this place
                if (x === end.x && y === end.y && score === cheapest) {
                    //found one
                    paths.push(path);
                } else {
                    visited.set(k, score);

                    const nx = x + DIRECTIONS[dirIx][0];
                    const ny = y + DIRECTIONS[dirIx][1];
                    if (maze[ny]?.[nx] !== "#") {
                        //continue, unless blocked - it's cheapest, turns are expensive
                        pathCosts.push([nx, ny, dirIx, score + 1, [...path, { x: nx, y: ny }]]);
                    }

                    //same path - turn right: +1, turn left: turn right three times...
                    pathCosts.push([x, y, (dirIx + 1) % 4, score + 1000, [...path]]);
                    pathCosts.push([x, y, (dirIx + 3) % 4, score + 1000, [...path]]);
                }
            }
        }
    }

    return paths;
};