
export function totalCalibrationSum(m: number[][]): number {
    return m.reduce((sum, equation) => {
        if (resultstupid(equation[0], equation.slice(1))) {
            sum += equation[0];
        }
        return sum;
    }, 0);
}

export function betterCalibrationSum(m: number[][]): number {
    return m.reduce((sum, equation) => {
        if (stupiderSum(equation.slice(2), equation[0], equation[1])) {
            sum += equation[0];
        }
        return sum;
    }, 0);
}

export function resultsimple(r: number, arg: number[]): boolean {
    let i = 0;
    const n = arg.length;
    do {
        const add = arg.slice(i).reduce((s, a) => s += a, 0);
        const mult = arg.slice(0, i).length > 1 ? arg.slice(0, i).reduce((s, a) => s *= a, 1) : 0;
        if (r === add + mult)
            return true;
        i++;
    }
    while (i <= n);

    return false;
}

export function resultreal(r: number, arg: number[]): boolean {
    for (let i = 0; i < arg.length; i++) {
        for (let j = i; j <= arg.length; j++) {
            const add1 = arg.slice(0, i);
            const multij = arg.slice(i, j);
            const add2 = arg.slice(j);

            const add = add1.reduce((s, a) => s += a, 0) + add2.reduce((s, a) => s += a, 0);
            const mult = multij.length > 1 ? multij.reduce((s, a) => s *= a, 1) : 0;
            if (r === add + mult)
                return true;
        }
    }

    return false;
}

export function resultstupid(r: number, arg: number[]): boolean {
    return stupidsum(arg.slice(1), r, arg[0]);
}

export function stupidsum(arg: number[], target: number, current: number): boolean {
    if (arg.length === 1)
        return target === current + arg[0] || target === current * arg[0];

    return stupidsum(arg.slice(1), target, current + arg[0]) || stupidsum(arg.slice(1), target, current * arg[0]);
}

function stupiderSum(arg: number[], target: number, current: number): boolean {
    if (arg.length < 1)
        return target === current;

    const stupiderNum = parseInt(`${current}${arg[0]}`);
    return stupiderSum(arg.slice(1), target, current + arg[0]) || stupiderSum(arg.slice(1), target, current * arg[0]) || stupiderSum(arg.slice(1), target, stupiderNum);
}