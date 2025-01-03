
export function possibleDesigns(towels: string[], designs: string[]): number {
    const cache = new Set<string>(towels);
    const impossibles = new Set<string>();
    return designs.reduce((c, d) => {
        if (display(d, towels, cache, impossibles))
            return c + 1;

        return c;
    }, 0);
}

export function allPossibleDesigns(towels: string[], designs: string[]): number {
    const cache = new Set<string>(towels);
    const counter = new Map<string, number>();
    const impossibles = new Set<string>();
    return designs
        .filter(d => display(d, towels, cache, impossibles))
        .map(d => {
            const a = all(d, towels, counter, impossibles);

            return a;
        })
        .reduce((c, d) => c + d, 0);
}

function display(d: string, towels: string[], cache: Set<string>, impossibles: Set<string>): boolean {
    if (d.length === 0 || cache.has(d))
        return true;

    if (impossibles.has(d))
        return false;

    for (let i = 0; i < towels.length; i++) {
        const t = towels[i];

        const td = d.indexOf(t);
        if (td >= 0) {
            const l = d.slice(0, td);
            if (display(l, towels, cache, impossibles)) {
                cache.add(l);
            }
            else {
                impossibles.add(l);
                continue;
            }

            const r = d.slice(td + 1);
            if (display(r, towels, cache, impossibles)) {
                cache.add(r);
            } else {
                impossibles.add(r);
                continue;
            }

            cache.add(d);
            return true;
        }
    }

    impossibles.add(d);
    return false;
}

function all(d: string, towels: string[], counter: Map<string, number>, impossibles: Set<string>): number {

    for (let i = 0; i < towels.length; i++) {
        const t = towels[i];
        if (d.startsWith(t)) {
            return towels.filter(tw => t === tw).length + all(d.slice(t.length), towels, counter, impossibles)
        }
    }

    return 0;
}
