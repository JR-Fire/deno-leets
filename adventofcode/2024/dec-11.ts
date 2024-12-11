

export function stones(data: string, blinks: number): number[] {
  let stones = data.split(' ').map(s => parseInt(s));

  for (let i = 0; i < blinks; i++) {
    stones = blink(stones);
  }

  return stones;
}

export function countStones(data: string, blinks: number): number {
  const stones = data.split(' ').map(s => parseInt(s));
  const blinkMap: Map<number, number[]> = new Map<number, number[]>();

  let stoneTypes: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < stones.length; i++) {
    const s = stones[i];
    let count = stoneTypes.get(s) || 0;
    count++;

    stoneTypes.set(s, count);
  }

  for (let i = 0; i < blinks; i++) {
    stoneTypes = blinkStoneTypes(stoneTypes, blinkMap);
  }

  return stoneTypes.entries().reduce((c, [_, count]) => c + count, 0);
}

export function blinkStoneTypes(currentTypes: Map<number, number>, blinkMap: Map<number, number[]>): Map<number, number> {

  const next: Map<number, number> = new Map<number, number>();
  currentTypes.forEach((count, stone) => {
    let blinked = blinkMap.get(stone);
    if (!blinked) {
      blinked = blinkStone(stone);
      blinkMap.set(stone, blinked);
    }

    for (let i = 0; i < blinked.length; i++) {
      let n = next.get(blinked[i]) || 0;
      n += count;

      next.set(blinked[i], n);
    }
  });

  return next;
}

export function blink(stones: number[]): number[] {

  const line: number[] = []
  for (let i = 0; i < stones.length; i++) {
    const s = stones[i];
    if (s === 0) {
      line.push(1);
      continue;
    }

    const even = `${s}`;
    const middle = even.length / 2;
    if (even.length % 2 === 0) {
      line.push(parseInt(even.slice(0, middle)));
      line.push(parseInt(even.slice(middle)));
      continue;
    }

    const n = s * 2024
    line.push(n);
  }

  return line;

  //return stones.flatMap(s => blinkStone(s));
}

function blinkStone(s: number): number[] {
  if (s === 0) {
    return [1];
  }

  const even = `${s}`;
  const middle = even.length / 2;
  if (even.length % 2 === 0) {
    return [parseInt(even.slice(0, middle)), parseInt(even.slice(middle))];
  }

  return [s * 2024];
}