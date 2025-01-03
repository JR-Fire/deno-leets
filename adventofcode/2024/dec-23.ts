export function optionsCount(network: string[][], start: string): number {
    const [_, triplets, __] = local(network);
    //console.log(triplets.values().toArray().sort());
    return triplets.values()
        .reduce((s, c) => s + (c.split(',').filter(n => n.charAt(0) === start).length > 0 ? 1 : 0), 0);
}

export function optionsMost(network: string[][], start: string): number {
    const [locals, triplets, most] = local(network);
    console.log(most);
    return most.size;
}

function local(network: string[][]): [Map<string, string[]>, Set<string>, Set<string>] {
    const most: Set<string> = new Set<string>();
    const triplets: Set<string> = new Set<string>();
    const locals = new Map<string, string[]>();
    network.map(c => {
        const link1 = locals.get(c[0]) || [];
        link1.forEach(n => {
            if ((locals.get(n)?.filter(l => l === c[1])?.length || 0) > 0) {
                triplets.add([c[0], c[1], n].sort().join(','));
            }
        });
        locals.set(c[0], [...link1, c[1]]);

        const link2 = locals.get(c[1]) || [];
        link2.forEach(n => {
            if ((locals.get(n)?.filter(l => l === c[0])?.length || 0) > 0) {
                triplets.add([c[0], c[1], n].sort().join(','));
            }
        });
        locals.set(c[1], [...link2, c[0]]);
    });

    // locals.keys().forEach(n => {
    //     const links = locals.get(n)!;
    //     for (let i = 1; i < links.length; i++) {
    //         const plink = links[i - 1];
    //         const link = links[i];

    //         if (locals.get(plink) && locals.get(plink)!.filter(l=>l===link)
    //     }
    // });

    return [locals, triplets, most];
}