export function discount(garden: string[][]): number {
  const plots = plotGardenRegions(garden);

  return plots.reduce((sum, { area, sides }) => sum + (area * sides.size), 0);
}

interface RegionPlot {
  crop: string;
  region?: number;
  sides?: [number | false, number | false, number | false, number | false];
}
type Plot = Required<RegionPlot>;

function plotGardenRegions(input: string[][]): { area: number; sides: Set<number>; }[] {

  const garden = input.map(c => c.map(crop => ({ crop } as Plot)));

  function plotAround(currRow: number, currCol: number) {
    return [
      [currRow + 1, currCol],
      [currRow - 1, currCol],
      [currRow, currCol + 1],
      [currRow, currCol - 1],
    ]
      .map(([row, col]) => ({ plot: garden[row]?.[col] as RegionPlot | undefined, row, col }));
  }

  function explodeCrop(currRow: number, currCol: number, region: number) {
    const currCrop = garden[currRow][currCol].crop;
    return plotAround(currRow, currCol)
      .filter(({ plot }) => plot && plot.crop === currCrop && plot.region === undefined)
      .forEach(({ plot, row, col }) => {
        plot!.region = region;
        explodeCrop(row, col, region);
      });
  }

  let regionCounter = 0;
  let sideCounter = 0;
  garden.forEach((line, row) => line.forEach((plot: RegionPlot, col) => {
    if (plot.region === undefined) {
      plot.region = regionCounter++;
      explodeCrop(row, col, plot.region);
    }

    plot.sides = [
      [garden[row - 1]?.[col], garden[row][col - 1]],
      [garden[row + 1]?.[col], garden[row][col - 1]],
      [garden[row][col - 1], garden[row - 1]?.[col]],
      [garden[row][col + 1], garden[row - 1]?.[col]],
    ].map(([frontPlot, sidePlot], sideIndex) =>
      (frontPlot?.crop === plot.crop) ? false :
        (sidePlot?.crop === plot.crop && sidePlot.sides[sideIndex] !== false) ? sidePlot.sides[sideIndex] :
          sideCounter++
    ) as Plot["sides"];
  }));

  return garden
    .reduce<Array<{ area: number, sides: Set<number> }>>((regions, line) => {
      line.forEach(({ region, sides }) => {
        regions[region] = regions[region] ?? { area: 0, sides: new Set() };
        regions[region].area += 1;
        sides
          .filter(side => side !== false)
          .forEach(side => regions[region].sides.add(side));
      });
      return regions;
    }, [])
}