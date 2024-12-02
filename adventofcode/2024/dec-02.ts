export function safeReportsCount(input: string[]): number {
    const safeReports: number[][] = [];

    const l = input.length;
    for (let i = 0; i < l; i++) {
        const report = input[i].split(' ').map(level => parseInt(level));
        if (isSafeReport(report)) {
            safeReports.push(report);
        }
    }

    return safeReports.length;
}

function isSafeReport(report: number[]): boolean {
    if (report.length < 2)
        return true;

    const sign = report[1] - report[0] > 0;
    for (let i = 1; i < report.length; i++) {
        const prev = report[i - 1];
        const curr = report[i];
        const step = curr - prev;

        if (sign) {
            if (step <= 0 || step > 3 || step < 1)
                return false;
        } else {
            if (step >= 0 || step < -3 || step > -1)
                return false;
        }
    }

    return true;
}