export function diffs(secrets: bigint[], count: number): number[][] {
    const diffs: number[][] = [];

    for (let i = 0; i < count; i++) {
        for (let b = 0; b < secrets.length; b++) {
            const p: number = price(secrets[b]);
            secrets[b] = next(secrets[b]);
            if (i > 0) {
                diffs[b].push(price(secrets[b]) - p);
            }
            else {
                diffs.push([]);
            }
        }
    }

    return diffs;
}

export function best(secrets: bigint[], count: number): number {
    const diffs: number[][] = [];
    const prices: number[][] = [];

    for (let i = 0; i < count; i++) {
        for (let b = 0; b < secrets.length; b++) {
            const p: number = price(secrets[b]);
            secrets[b] = next(secrets[b]);
            const cp = price(secrets[b]);
            if (i > 0) {
                prices[b].push(cp);
                diffs[b].push(cp - p);
            }
            else {
                diffs.push([]);
                prices.push([cp]);
            }
        }
    }

    const cachedPrices: Map<string, number> = new Map<string, number>();

    const cachedBuyerPrices: Map<string, number>[] = [];
    for (let b = 0; b < diffs.length; b++) {
        cachedBuyerPrices.push(new Map<string, number>());

        for (let i = 0; i <= diffs[b].length - 4; i++) {
            const seq = [...diffs[b].slice(i, i + 4)];

            if (!cachedBuyerPrices[b].get(`${seq}`)) {
                cachedBuyerPrices[b].set(`${seq}`, prices[b][i + 4]);

                const k = cachedPrices.get(`${seq}`) || 0;
                cachedPrices.set(`${seq}`, k + prices[b][i + 4]);
            }
        }
    }

    return Math.max(...cachedPrices.values());
}

export function nextN(secrets: bigint[], count: number): bigint {
    let secretSum = 0n;
    for (let i = 0; i < count; i++) {
        for (let b = 0; b < secrets.length; b++) {
            secrets[b] = next(secrets[b]);
            if (i === count - 1)
                secretSum += secrets[b];
        }
    }

    return secretSum;
}

export function next(secret: bigint): bigint {
    const m = secret * 64n;
    const p = mix(m, secret);
    const s = prune(p);
    const f32 = BigInt(Math.floor(Number(s / 32n)));
    const f = prune(mix(f32, s));
    return prune(mix(f * 2048n, f));
}

function mix(s: bigint, secret: bigint): bigint {
    return s ^ secret;
}

function prune(m: bigint): bigint {
    const d = 16777216n;
    const r = m % d;
    return r >= 0 ? r : r + d;
}

function price(secret: bigint): number {
    const s = `${secret}`;
    return parseInt(s.charAt(s.length - 1));
}
