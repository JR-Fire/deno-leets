export function listDistance(input: number[][]): number {
    let distance = 0;

    const l1: number[] = [];
    const l2: number[] = [];
    const l = input.length;
    for (let i = 0; i < l; i++) {
        l1.push(input[i][0]);
        l2.push(input[i][1]);
    }

    l1.sort();
    l2.sort();

    for (let i = 0; i < l; i++) {
        distance += Math.abs(l1[i] - l2[i]);
    }

    return distance;
}

export function listSimilarity(input: number[][]): number {
    const l1: number[] = [];
    const m2 = new Map<number, number>();
    const l = input.length;
    for (let i = 0; i < l; i++) {
        const location1 = input[i][0];
        l1.push(location1);

        const location2 = input[i][1];
        const count = m2.get(location2) || 0;
        m2.set(location2, count + 1);
    }

    let distance = 0;
    for (let i = 0; i < l; i++) {
        const location = l1[i];
        distance += location * (m2.get(location) || 0);
    }

    return distance;
}
