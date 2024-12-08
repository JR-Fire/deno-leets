const EMPTY = '.';
const ANTINODE = '#';

export function antinodes(m: string[][]) {
    const { ants, locationMap }: { ants: Map<string, number[][]>; locationMap: string[][]; } = makeAnts(m);

    singleAntinodes(ants, locationMap);

    return countAntinodes(locationMap)
}

export function harmonicAntinodes(m: string[][]) {
    const { ants, locationMap }: { ants: Map<string, number[][]>; locationMap: string[][]; } = makeAnts(m);

    allAntinodes(ants, locationMap);

    return countAntinodes(locationMap)
}

function allAntinodes(ants: Map<string, number[][]>, locationMap: string[][]) {
    ants.entries().forEach((ant) => {
        const coords = ant[1];

        if (coords.length > 1) {
            for (let i = 0; i < coords.length; i++) {
                for (let j = i + 1; j < coords.length; j++) {

                    const x1 = coords[i][0];
                    const y1 = coords[i][1];
                    const x2 = coords[j][0];
                    const y2 = coords[j][1];
                    
                    locationMap[y1][x1] = ANTINODE;
                    locationMap[y2][x2] = ANTINODE;

                    harmonizedAntidotes(x1, y1, x2, y2, locationMap);
                    harmonizedAntidotes(x2, y2, x1, y1, locationMap);
                }
            }
        }
    });
}

function harmonizedAntidotes(x1: number, y1: number, x2: number, y2: number, locationMap: string[][]) {
    let nextX = (2 * x1) - x2;
    let nextY = (2 * y1) - y2;

    while (antinode(nextX, nextY, locationMap)) {
        x2 = x1;
        y2 = y1;

        x1 = nextX;
        y1 = nextY;

        nextX = (2 * x1) - x2;
        nextY = (2 * y1) - y2;
    }
}

function singleAntinodes(ants: Map<string, number[][]>, locationMap: string[][]) {
    ants.entries().forEach((ant) => {
        const coords = ant[1];

        if (coords.length > 1) {
            for (let i = 0; i < coords.length; i++) {
                for (let j = i + 1; j < coords.length; j++) {

                    const x1 = coords[i][0];
                    const y1 = coords[i][1];
                    const x2 = coords[j][0];
                    const y2 = coords[j][1];

                    const prevX = (2 * x1) - x2;
                    const prevY = (2 * y1) - y2;
                    antinode(prevX, prevY, locationMap);

                    const nextX = (2 * x2) - x1;
                    const nextY = (2 * y2) - y1;
                    antinode(nextX, nextY, locationMap);
                }
            }
        }
    });
}

function countAntinodes(locationMap: string[][]) {
    return locationMap.reduce((s, l) => s += l.filter(c => c === ANTINODE).length, 0);
}

function makeAnts(m: string[][]) {
    const ants = new Map<string, number[][]>();
    const locationMap: string[][] = [];
    m.map((r, x) => {
        const row: string[] = [];
        r.map((c, y) => {
            row.push(c);

            if (c !== EMPTY) {
                const ant = ants.get(c);
                if (!ant) {
                    ants.set(c, [[y, x]]);
                }
                else {
                    ant.push([y, x]);
                }
            }
        });

        locationMap.push(row);
    });

    return { ants, locationMap };
}

function antinode(x: number, y: number, locationMap: string[][]): boolean {
    if (inMap(x, y, locationMap)) {
        locationMap[y][x] = ANTINODE;
        return true;
    }

    return false;
}

function inMap(x: number, y: number, locationMap: string[][]) {
    return y >= 0 && x >= 0 && y < locationMap.length && x < locationMap[y].length;
}
