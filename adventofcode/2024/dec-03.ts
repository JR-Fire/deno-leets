
const mult_start = 'mul(';
const mult_separator = ',';
const mult_end = ')';
const mult_enabled = 'do()';
const mult_disabled = "don't()";
export function sumEnabledMultiplications(lines: string[], isEnabled: boolean = true) {
    let sum = 0;

    for (let i = 0; i < lines.length; i++) {
        const row = lines[i];
        let mulS = row.indexOf(mult_start);
        let nextDisabled = row.indexOf(mult_disabled);
        let nextEnabled = 0;
        while (mulS >= 0) {
            if (nextDisabled < 0 || mulS > nextDisabled) {
                if (nextEnabled >= 0 && mulS > nextEnabled && (nextDisabled < 0 || mulS > nextDisabled)) {
                    isEnabled = true;
                }
                if (nextDisabled >= 0 && mulS > nextDisabled && (nextEnabled <= 0 || mulS < nextEnabled)) {
                    isEnabled = false;
                }

                if (isEnabled && nextEnabled > nextDisabled) {
                    nextDisabled = row.indexOf(mult_disabled, nextEnabled + mult_enabled.length);
                }
                if (!isEnabled && nextDisabled > nextEnabled) {
                    nextEnabled = row.indexOf(mult_enabled, nextDisabled + mult_disabled.length);
                }
            }

            const separator = row.indexOf(mult_separator, mulS + mult_start.length);
            const mulE = row.indexOf(mult_end, mulS + mult_start.length);
            if (isEnabled && separator > 0 && mulE > 0) {
                const arg1 = row.slice(mulS + mult_start.length, separator);
                const arg2 = row.slice(separator + 1, mulE);
                const num1 = parseExactInt(arg1);
                const num2 = parseExactInt(arg2);
                if (isEnabled && !isNaN(num1) && !isNaN(num2)) {
                    sum += num1 * num2;
                }
            }
            mulS = row.indexOf(mult_start, mulS + mult_start.length);
        }
    }

    return sum;
}

export function sumMultiplications(lines: string[]) {
    let sum = 0;

    for (let i = 0; i < lines.length; i++) {
        const row = lines[i];
        let mulS = row.indexOf(mult_start);
        while (mulS >= 0) {
            const separator = row.indexOf(mult_separator, mulS + mult_start.length);
            const mulE = row.indexOf(mult_end, mulS + mult_start.length);
            if (separator > 0 && mulE > 0) {
                const arg1 = row.slice(mulS + mult_start.length, separator);
                const arg2 = row.slice(separator + 1, mulE);
                const num1 = parseExactInt(arg1);
                const num2 = parseExactInt(arg2);
                if (!isNaN(num1) && !isNaN(num2)) {
                    sum += num1 * num2;
                }
            }
            mulS = row.indexOf(mult_start, mulS + mult_start.length);
        }
    }

    return sum;
}

function parseExactInt(s: string): number {
    const n = parseInt(s, 10);
    if (`${n}` !== s)
        return NaN;
    return n;
}