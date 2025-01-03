const START = 'S';
const END = 'E';
const BLOCK = '#';
const PATH = '.';

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

interface Coordinates {
    r: number;
    c: number;
}

export function betterCheats(raceMap: string[][], cheatTarget: number): number {
    const { maze, start, end } = getMap(raceMap);
    const cheats: { cheat: Coordinates, savings: number }[] = countCheats(maze, start, end, cheatTarget);
    return cheats.length;
}

function countCheats(raceMap: string[][], start: Coordinates, end: Coordinates, cheatTarget: number = 0): { cheat: Coordinates, savings: number }[] {
    const cheats: { cheat: Coordinates, savings: number }[] = [];
    const trackScore = getMinScore(raceMap, start, end);
    
    for (let row = 0; row < raceMap.length; row++) {
        for (let col = 0; col < raceMap[row].length; col++) {
            const tile = raceMap[row][col];
            if (tile === BLOCK && DIRECTIONS.some(d => row > 0 && col > 0 && row < raceMap.length - 1 && col < raceMap[row].length - 1 && row + d[0] > 0 && row + d[0] < raceMap.length - 1 && col + d[1] > 0 && col + d[1] < raceMap[row].length - 1 && raceMap[row + d[0]][col + d[1]] === PATH)) {
                raceMap[row][col] = PATH;

                const cheatScore = getMinScore(raceMap, start, end);
                const savings = trackScore - cheatScore
                if (savings > 0 && savings >= cheatTarget) {
                    cheats.push({
                        cheat: {
                            r: row, c: col
                        },
                        savings: savings
                    });
                }

                raceMap[row][col] = BLOCK;
            }
        }

    }

    return cheats;
}

function getMap(maze: string[][]) {
    const start: Coordinates = { r: 0, c: 0 };
    const end: Coordinates = { r: 0, c: 0 };
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === START) {
                start.r = j;
                start.c = i;
            } else if (maze[i][j] === END) {
                end.r = j;
                end.c = i;
            }
        }
    }

    return { maze, start, end };
};

function getMinScore(maze: string[][], start: Coordinates, end: Coordinates): number {
    //start at Sxy, facing east - at DIRECTIONS[1]
    const pathCosts: [number, number, number][] = [[start.r, start.c, 0]];
    const visited = new Set<string>();

    while (pathCosts.length) {
        // poor man's priority queue for Dijkstra
        pathCosts.sort((a, b) => a[2] - b[2]);
        //pop the cheapest way
        const [x, y, score] = pathCosts.shift()!;

        const k = `${x},${y}`;

        if (x === end.r && y === end.c)
            // aaaand we're done!
            return score;

        if (!visited.has(k)) {
            visited.add(k);

            for (let d = 0; d < DIRECTIONS.length; d++) {
                const nx = x + DIRECTIONS[d][0];
                const ny = y + DIRECTIONS[d][1];
                if (maze[ny]?.[nx] !== "#") {
                    //continue, unless blocked - it's cheapest, turns are expensive
                    pathCosts.push([nx, ny, score + 1]);
                }
            }
        }
    }

    return 0;
};