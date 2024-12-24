export function out(input: string, logic: string): number {
    const gates: Map<string, number> = new Map(input.split('\n').map(r => {
        const g = r.split(':')
        return [g[0].trim(), parseInt(g[1].trim())]
    }));

    const remaining: string[][] = [];
    const go = logic.split('\n');
    go.forEach(g => {
        const calc = g.split('->');

        const [i, o] = [calc[0].trim(), calc[1].trim()];
        const op = i.split(' ');
        const g1 = gates.get(op[0]);
        const g2 = gates.get(op[2]);
        if (g1 === undefined || g2 === undefined)
            remaining.push([...op, o]);
        else
            gates.set(o, result(op, g1, g2));
    });

    while (remaining.length > 0) {
        const op = remaining.shift()!;
        const g1 = gates.get(op[0]);
        const g2 = gates.get(op[2]);
        if (g1 === undefined || g2 === undefined)
            remaining.push(op);
        else
            gates.set(op[3], result(op, g1, g2));
    }

    const z = gates.entries().filter(g => g[0].startsWith('z')).toArray().sort((a, b) => a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1).map(g => g[1]);
    return z.reduce((s, g, i) => g === 1 ? (s! + (2 ** i)) : s, 0)!;

}

function result(op: string[], g1: number, g2: number): number {
    let r = 0;
    switch (op[1]) {
        case 'AND':
            r = g1 & g2;
            break;
        case 'OR':
            r = g1 | g2;
            break;
        case 'XOR':
            r = g1 ^ g2;
            break;
    }
    return r;
}
