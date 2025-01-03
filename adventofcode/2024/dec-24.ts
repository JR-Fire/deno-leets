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

export function express(input: string, logic: string): number {
    const gates: Map<string, number> = new Map(input.split('\n').map(r => {
        const g = r.split(':')
        return [g[0].trim(), parseInt(g[1].trim())]
    }));

    const expr: Map<string, string> = new Map<string, string>();

    const remaining: string[][] = [];
    const go = logic.split('\n');
    go.forEach(g => {
        const calc = g.split('->');

        const [i, o] = [calc[0].trim(), calc[1].trim()];
        const op = i.split(' ');

        expr.set(o, i);

        const g1 = gates.get(op[0]);
        const g2 = gates.get(op[2]);
        if (g1 === undefined || g2 === undefined)
            remaining.push([...op, o]);
        else
            gates.set(o, result(op, g1, g2));
    });


    while (expr.keys().some(k => !k.startsWith('z'))) {
        expr.keys().filter(k => !k.startsWith('z')).forEach(k => {
            let ke = expr.get(k)!;

            const kexpr = ke.split(' ');
            if(kexpr[0].startsWith('y'))
                ke = `${kexpr[2]} ${kexpr[1]} ${kexpr[0]}`;

            expr.entries().forEach((e) => {
                if (e[1].indexOf(k) > -1)
                    expr.set(e[0], e[1].replace(k, `(${ke})`));

            });

            expr.delete(k);
        });
    }

    const sorted = expr.entries().toArray().sort((a, b) => a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1)
    
    const exp: string[][] = buildExpected(expr.size);
    
    for (let i = 0; i < exp.length; i++) {
        console.log(`GOT: ${sorted[i]}\nEXP: ${exp[i]}\n`);
    }

    return expr.size;
}

function buildExpected(size: number): string[][] {
    const e: string[][] = [
        [`z${toIx(0)}`, `x${toIx(0)} XOR y${toIx(0)}`],
        [`z${toIx(1)}`, `(x${toIx(0)} AND y${toIx(0)}) XOR (x${toIx(1)} XOR y${toIx(1)})`]
    ];
    let carry = `(x${toIx(1)} AND y${toIx(1)}) OR ((x${toIx(0)} AND y${toIx(0)}) AND (x${toIx(1)} XOR y${toIx(1)}))`;

    for (let i = 2; i < size; i++) {
        const curr = `(x${toIx(i)} XOR y${toIx(i)})`;
        e.push([`z${toIx(i)}`, `${curr} XOR (${carry})`]);
        carry = `((${carry}) AND (x${toIx(i)} XOR y${toIx(i)})) OR (x${toIx(i)} AND y${toIx(i)})`;
    }

    return e;
}

function toIx(i: number): string {
    return `${i.toString().padStart(2, '0')}`;
}
