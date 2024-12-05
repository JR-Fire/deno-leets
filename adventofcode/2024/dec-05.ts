
export function sumPrintedMiddle(dataRules: number[][], dataUpdates: number[][]): number {
    let s = 0;

    dataUpdates.map(pageUpdate => {
        let wrongOrder = false;
        for (let i = 0; i < pageUpdate.length; i++) {
            const page = pageUpdate[i];

            const previousPages = dataRules.filter(r => r[1] == page).map(r => r[0]);
            if (previousPages.filter(prev => pageUpdate.includes(prev, i + 1)).length > 0) {
                wrongOrder = true;
                break;
            }
        }

        if (!wrongOrder) {
            s += pageUpdate[Math.floor(pageUpdate.length / 2)];
        }
    });

    return s;
}

export function getFixedIncorrectsSum(dataRules: number[][], dataUpdates: number[][]): number {
    const fixed: number[][] = [];
    dataUpdates.map(pageUpdate => {
        let wrongOrder = false;

        for (let i = 0; i < pageUpdate.length; i++) {

            let previousPages = dataRules.filter(r => r[1] == pageUpdate[i]).map(r => r[0]);
            let brokenRules = previousPages.filter(prev => pageUpdate.includes(prev, i + 1));
            while (brokenRules.length > 0) {
                wrongOrder = true;
                for (let index = 0; index < brokenRules.length; index++) {
                    const pageUpdateBrokenIx = pageUpdate.indexOf(brokenRules[index], i + 1);
                    
                    const t = pageUpdate[pageUpdateBrokenIx];
                    pageUpdate[pageUpdateBrokenIx] = pageUpdate[i];
                    pageUpdate[i] = t;
                }

                previousPages = dataRules.filter(r => r[1] == pageUpdate[i]).map(r => r[0]);
                brokenRules = previousPages.filter(prev => pageUpdate.includes(prev, i + 1));
            }
        }

        if (wrongOrder)
            fixed.push(pageUpdate);
    });

    return fixed.reduce((sum, r) => sum + r[Math.floor(r.length / 2)], 0);
}