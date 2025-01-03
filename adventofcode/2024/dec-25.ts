const PIN = '#';
const EMPTY = '.';

const rn = 7;
const cn = 5;

export function fits(schematics: string): number {
    //const [locks, keys]: [string[][], string[][]] = [[], []];
    const [locks, keys]: [number[][], number[][]] = [[], []];

    let lock = false;
    let ri = 0;
    const rows = schematics.split('\n');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row === '') {
            lock = false;
            ri = 0;
            continue;
        }

        const c = row.split('');
        if (ri === 0) {
            if (c.every(c => c === PIN) && rows[i + rn - 1].split('').every(c => c === EMPTY)) {
                lock = true;
                locks.push(new Array(cn).fill(0));
            } else {
                lock = false;
                keys.push(new Array(cn).fill(0));
            }
        } else if (ri !== rn - 1) {
            if (lock)
                c.map((pin, ix) => locks[locks.length - 1][ix] += (pin === PIN) ? 1 : 0);
            else
                c.map((pin, ix) => keys[keys.length - 1][ix] += (pin === PIN) ? 1 : 0);
        }

        ri++;
    }

    // console.log(`LOCKS: ${locks.join('\n')}\nKEYS: ${keys.join('\n')}`);

    let fits = 0;
    for (let i = 0; i < locks.length; i++) {
        const lock = locks[i];
        fits += keys.filter(k => k.every((pins, ix) => pins + lock[ix] <= cn)).length;
    }

    return fits;
}