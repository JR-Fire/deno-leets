export function safeReportsCount(input: string[]): number {
    let safeReports: number = 0;

    const l = input.length;
    for (let i = 0; i < l; i++) {
        const report = input[i].split(' ').map(level => parseInt(level));
        if (isSafeReport(report)) {
            safeReports++;
        }
    }

    return safeReports;
}

export function nearlySafeReportsCount(input: string[]): number {
    let nearlySafeReports: number = 0;

    const l = input.length;
    for (let i = 0; i < l; i++) {
        const report = input[i].split(' ').map(level => parseInt(level));
        if (isNearlySafeReport(report)) {
            nearlySafeReports++;
        }
    }

    return nearlySafeReports;
}

function isNearlySafeReport(report: number[]): boolean {
    if (isSafeReport(report))
        return true;

    for (let i = 0; i < report.length; i++) {
        if(isSafeReport(report.toSpliced(i, 1)))
            return true;
    }

    return false;
}

function isSafeReport(report: number[]): boolean {
    if (report.length < 2)
        return true;

    const steps: number[] = [];
    for (let i = 1; i < report.length; i++) {
        const prev = report[i - 1];
        const curr = report[i];
        const step = curr - prev;
        steps.push(step);
    }

    return steps.every(s => s <= -1 && s >= -3) || steps.every(s => s >= 1 && s <= 3);
}