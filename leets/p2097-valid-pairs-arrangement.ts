export function validArrangement(pairs: number[][]): number[][] {
  const arrangement = new Map<number, number>(
    pairs.map((x) => [x[1], x[0]]),
  );

  const result = new Array<Array<number>>();
  for (let i = 0; i < pairs.length; i++) {
    const e = arrangement.get(pairs[i][1]);
    if (!e) {
      result.push(pairs[i]);
      break;
    }
  }

  if (result.length == 0) {
    result.push(pairs[0]);
  }

  while (arrangement.keys.length > result.length) {
    const e = arrangement.get(result[result.length - 1][1]);
    if (e) {
      result.push([result[result.length - 1][1], e]);
    } else {
      console.log("ENDS AT", result[result.length - 1][1]);
    }
  }

  return result;
}
