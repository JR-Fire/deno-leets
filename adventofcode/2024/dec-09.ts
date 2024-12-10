const FREE = -1;

export function checksum(data: string): number {
  return reformat(data).reduce((s, d, ix) => s += d * ix, 0);
}

export function fragmentedchecksum(data: string): number {
  return defragment(data).reduce((s, d, ix) => s += d <= 0 ? 0 : (d * ix), 0);
}

export function stona(data: string): number[] {
  const na: number[] = [];
  for (let i = 0; i < data.length; i++) {
    na.push(parseInt(data.charAt(i)));
  }

  return na;
}
export function mapdisk(data: string): number[] {
  let fix = 0;
  const disk = [];

  const ndata = stona(data);
  for (let i = 0; i < ndata.length; i++) {
    let d = ndata[i];

    if (i % 2 == 0) {
      //even numbers are file sizes
      while (d > 0) {
        disk.push(fix);
        d--;
      }
      fix++;
    } else {
      //odd numbers are empty block sizes
      while (d > 0) {
        disk.push(-1);
        d--;
      }
    }
  }

  return disk;
}

export function reformat(data: string): number[] {
  const disk = mapdisk(data);

  const formatted: number[] = [];
  let i = 0;
  let n = disk.length - 1;
  while (i < n) {
    if (disk[i] === FREE) {
      disk[i] = disk[n];
      n--;
    }

    if (disk[i] !== FREE) {
      formatted.push(disk[i]);
      i++;
    }
  }

  if (disk[i] !== FREE) {
    formatted.push(disk[i]);
  }

  return formatted;
}

export function defragment(data: string): number[] {
  const disk = mapdisk(data);

  remap(disk);

  return disk;
}

function mapSpace(disk: number[]) {
  const files = new Map<number, number[]>(); //file, [start, end]
  const free = new Map<number, number[]>();
  let l = 0;
  let fsi: number;
  for (let i = 0; i < disk.length; i++) {
    if (disk[i] === FREE) {
      if (l === 0) {
        fsi = i;
      }
      l++;
    } else {
      if (l > 0) {
        const positions = free.get(l) || [];
        positions.push(fsi!);
        free.set(l, positions);
        l = 0;
      }

      let f = files.get(disk[i]);
      if (!f) {
        //file start
        f = [i, i];
      } else {
        //update end
        f[1] = i;
      }
      files.set(disk[i], f);
    }
  }
  return { files, free };
}

export function remap(disk: number[]): number[] {
  const { files, free } = mapSpace(disk);

  files.entries().toArray().reverse().map(([file, [start, end]]) => {
    const fileLength = end - start + 1;
    //find the leftmost (with smallestfirst free space index, that would fit the file
    const freeSpaces = free.entries().filter(([freeSpace, positions]) =>
      freeSpace >= fileLength && positions.filter((p) => p < start).length > 0
    ).toArray().sort((a, b) => a[1][0] - b[1][0]);
    if (freeSpaces.length > 0) {
      const nFree = freeSpaces[0][0];
      //move to first possible space, then set space as used
      let freeSpaceIx = freeSpaces[0][1][0];

      for (let fileIx = start; fileIx <= end; fileIx++) {
        disk[freeSpaceIx] = file;
        disk[fileIx] = FREE;
        freeSpaceIx++;
      }

      free.set(nFree, freeSpaces[0][1].slice(1));
      const f = nFree - fileLength;
      if (f > 0) {
        //update free space with leftover
        const positions = free.get(f) || [];
        positions.push(freeSpaceIx);
        free.set(f, positions.sort((a, b) => a - b));
      }
      return;
    }
  });

  return disk;
}
