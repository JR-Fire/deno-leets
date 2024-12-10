const letterNumbers = new Map<string, number>([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

export function parseCoordinatesLetters(input: string[]): number {
  const coordinates: number[][] = [];

  const l = input.length;
  for (let i = 0; i < l; i++) {
    coordinates[i] = [];
    coordinates[i][0] = NaN;
    coordinates[i][1] = NaN;

    const line = input[i];

    let ixS = 0;
    let ixE = line.length - 1;
    while (
      ixS <= ixE && (isNaN(coordinates[i][0]) || isNaN(coordinates[i][1]))
    ) {
      if (isNaN(coordinates[i][0])) {
        const s = line[ixS];
        const n1 = parseInt(s, 10);
        if (!isNaN(n1)) {
          coordinates[i][0] = n1;
        } else {
          //check if letterred number
          const potentials = letterNumbers.entries().filter((ln) =>
            ln[0].charAt(0) === s
          );
          potentials.forEach((ln) => {
            if (isNaN(coordinates[i][0])) {
              const letters = ln[0];
              if (
                letters.length <= line.length - ixS &&
                line.slice(ixS).startsWith(letters)
              ) {
                coordinates[i][0] = ln[1];
              }
            }
          });

          ixS++;
        }
      }

      if (isNaN(coordinates[i][1])) {
        const s = line[ixE];
        const n2 = parseInt(s, 10);
        if (!isNaN(n2)) {
          coordinates[i][1] = n2;
        } else {
          //check if letterred number
          const potentials = letterNumbers.entries().filter((ln) =>
            ln[0].charAt(ln[0].length - 1) === s
          );
          potentials.forEach((ln) => {
            if (isNaN(coordinates[i][1])) {
              const letters = ln[0];
              if (
                ixE + 1 >= letters.length &&
                line.slice(0, ixE + 1).endsWith(letters)
              ) {
                coordinates[i][1] = ln[1];
              }
            }
          });

          ixE--;
        }
      }
    }
  }

  let sum = 0;
  coordinates.map((c) => sum += c[0] * 10 + c[1]);

  return sum;
}

export function parseCoordinatesBasic(input: string[]): number {
  const coordinates: number[][] = [];

  const l = input.length;
  for (let i = 0; i < l; i++) {
    coordinates[i] = [];
    coordinates[i][0] = NaN;
    coordinates[i][1] = NaN;

    let ixS = 0;
    let ixE = input[i].length - 1;
    while (
      ixS <= ixE && (isNaN(coordinates[i][0]) || isNaN(coordinates[i][1]))
    ) {
      if (isNaN(coordinates[i][0])) {
        const n1 = parseInt(input[i][ixS], 10);
        if (!isNaN(n1)) {
          coordinates[i][0] = n1;
        } else {
          ixS++;
        }
      }

      if (isNaN(coordinates[i][1])) {
        const n2 = parseInt(input[i][ixE], 10);
        if (!isNaN(n2)) {
          coordinates[i][1] = n2;
        } else {
          ixE--;
        }
      }
    }
  }

  let sum = 0;
  coordinates.map((c) => sum += c[0] * 10 + c[1]);

  return sum;
}
