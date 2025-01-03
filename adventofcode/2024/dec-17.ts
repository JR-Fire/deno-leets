const NEXT_INSTRUCTION = 2n;
const COMBO_OP = [
    [1n, 0n, 0n, 0n],
    [1n, 0n, 0n, 0n],
    [1n, 0n, 0n, 0n],
    [1n, 0n, 0n, 0n],
    [0n, 1n, 0n, 0n],
    [0n, 0n, 1n, 0n],
    [0n, 0n, 0n, 1n],
];

export function mirror(program: bigint[]): bigint {
    const target = program.join(',');
    let t = 8n ** (BigInt(program.length) - 1n);
    console.log(`Program has length ${program.length}, 8 to the power is ${8 ** target.length}, start at ${t}`);
    const registers: bigint[] = [t, 0n, 0n];
    //let p = execute(program, registers, target.length);
    let p = prog(registers);
    while (p !== target) {
        t++;
        registers[0] = t;
        registers[1] = registers[2] = 0n;

        if (t % 1000000n === 0n)
            console.log(`At ${t} with registers ${registers} then program ${p}`);

        p = execute(program, registers, target.length);
    }

    return t;
}

export function execute(program: bigint[], registers: bigint[], maxTerminal = 2147483647): string {
    const terminal: bigint[] = [];
    let instructionPointer = 0n;
    while (instructionPointer >= 0 && instructionPointer < program.length && terminal.length <= maxTerminal) {
        const instr = program[Number(instructionPointer)];
        const operand = program[Number(instructionPointer) + 1];

        switch (instr) {
            case 0n: {
                const val = [operand, ...registers].reduce((s, v, ix) => s + v * COMBO_OP[Number(operand)][ix], 0n);
                registers[0] = BigInt(Math.floor(Number(registers[0] / 2n ** val)));
            }
                break;
            case 1n: {
                registers[1] = registers[1] ^ operand;
            }
                break;
            case 2n: {
                const val = [operand, ...registers].reduce((s, v, ix) => s + v * COMBO_OP[Number(operand)][ix], 0n);
                registers[1] = val % 8n;
            }
                break;
            case 3n: {
                if (registers[0] !== 0n)
                    instructionPointer = operand - NEXT_INSTRUCTION;
            }
                break;
            case 4n: {
                registers[1] = registers[1] ^ registers[2];
            }
                break;
            case 5n: {
                const val = [operand, ...registers].reduce((s, v, ix) => s + v * COMBO_OP[Number(operand)][ix], 0n);
                terminal.push(val % 8n);
            }
                break;
            case 6n: {
                const val = [operand, ...registers].reduce((s, v, ix) => s + v * COMBO_OP[Number(operand)][ix], 0n);
                registers[1] = BigInt(Math.floor(Number(registers[0] / 2n ** val)));
            }
                break;
            case 7n: {
                const val = [operand, ...registers].reduce((s, v, ix) => s + v * COMBO_OP[Number(operand)][ix], 0n);
                registers[2] = BigInt(Math.floor(Number(registers[0] / 2n ** val)));
            }
                break;

            default:
                break;
        }

        instructionPointer += NEXT_INSTRUCTION;
    }

    return terminal.join(',');
}


export function prog(registers: bigint[], maxTerminal = 16): string {

    const terminal: bigint[] = [];

    do {
        registers[1] = registers[0] % 8n;
        registers[1] = registers[1] ^ 3n;
        registers[2] = BigInt(Math.floor(Number(registers[0] / 2n ** registers[1])));
        registers[1] = registers[1] ^ 5n;
        registers[0] = BigInt(Math.floor(Number(registers[0] / 2n ** 3n)));

        registers[1] = registers[1] ^ registers[2];
        terminal.push(registers[1] % 8n);
    }
    while (registers[0] !== 0n && terminal.length <= maxTerminal);

    return terminal.join(',');
}