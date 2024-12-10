const XMAS: string[] = ["X", "M", "A", "S"];
const MAS: string[] = XMAS.slice(1);
export function xmas(lines: string[]) {
  let count = 0;

  lines.map((l, ix) => {
    let j = l.indexOf(XMAS[0]);
    while (j > -1) {
      count += findXMAS(j, lines, ix);

      j = l.indexOf(XMAS[0], j + 1);
    }
  });

  return count;
}

export function mas(lines: string[]) {
  let count = 0;

  lines.map((l, ix) => {
    if (ix - 1 >= 0 && ix + 1 < lines.length) {
      const prevLine = lines[ix - 1];
      const nextLine = lines[ix + 1];
      let j = l.indexOf(MAS[1]);
      while (j > -1) {
        if (
          (
            (hasLetter(prevLine, j - 1, MAS[0]) &&
              hasLetter(nextLine, j + 1, MAS[2])) ||
            (hasLetter(prevLine, j - 1, MAS[2]) &&
              hasLetter(nextLine, j + 1, MAS[0]))
          ) &&
          (
            (hasLetter(prevLine, j + 1, MAS[0]) &&
              hasLetter(nextLine, j - 1, MAS[2])) ||
            (hasLetter(prevLine, j + 1, MAS[2]) &&
              hasLetter(nextLine, j - 1, MAS[0]))
          )
        ) {
          count++;
        }

        j = l.indexOf(MAS[1], j + 1);
      }
    }
  });

  return count;
}

function hasLetter(line: string, p: number, letter: string) {
  return p >= 0 && p < line.length && line.charAt(p) == letter;
}

function findXMAS(i: number, lines: string[], lineIx: number): number {
  let c = 0;

  const l = lines[lineIx];
  const wF = hasLetter(l, i + 1, XMAS[1]) && hasLetter(l, i + 2, XMAS[2]) &&
    hasLetter(l, i + 3, XMAS[3]);
  if (wF) {
    c++;
  }
  const wB = hasLetter(l, i - 1, XMAS[1]) && hasLetter(l, i - 2, XMAS[2]) &&
    hasLetter(l, i - 3, XMAS[3]);
  if (wB) {
    c++;
  }

  if (lineIx - 3 >= 0) {
    const wU = hasLetter(lines[lineIx - 1], i, XMAS[1]) &&
      hasLetter(lines[lineIx - 2], i, XMAS[2]) &&
      hasLetter(lines[lineIx - 3], i, XMAS[3]);
    if (wU) {
      c++;
    }
    const wDUR = hasLetter(lines[lineIx - 1], i + 1, XMAS[1]) &&
      hasLetter(lines[lineIx - 2], i + 2, XMAS[2]) &&
      hasLetter(lines[lineIx - 3], i + 3, XMAS[3]);
    if (wDUR) {
      c++;
    }
    const wDUL = hasLetter(lines[lineIx - 1], i - 1, XMAS[1]) &&
      hasLetter(lines[lineIx - 2], i - 2, XMAS[2]) &&
      hasLetter(lines[lineIx - 3], i - 3, XMAS[3]);
    if (wDUL) {
      c++;
    }
  }
  if (lineIx + 3 < lines.length) {
    const wD = hasLetter(lines[lineIx + 1], i, XMAS[1]) &&
      hasLetter(lines[lineIx + 2], i, XMAS[2]) &&
      hasLetter(lines[lineIx + 3], i, XMAS[3]);
    if (wD) {
      c++;
    }
    const wDDR = hasLetter(lines[lineIx + 1], i + 1, XMAS[1]) &&
      hasLetter(lines[lineIx + 2], i + 2, XMAS[2]) &&
      hasLetter(lines[lineIx + 3], i + 3, XMAS[3]);
    if (wDDR) {
      c++;
    }
    const wDDL = hasLetter(lines[lineIx + 1], i - 1, XMAS[1]) &&
      hasLetter(lines[lineIx + 2], i - 2, XMAS[2]) &&
      hasLetter(lines[lineIx + 3], i - 3, XMAS[3]);
    if (wDDL) {
      c++;
    }
  }

  return c;
}
