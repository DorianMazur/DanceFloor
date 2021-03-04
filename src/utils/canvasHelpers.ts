import { Tile } from "../types/canvas";

export const getRandomColor = (): string => {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  return `rgb(${red}, ${green}, ${blue})`;
};

export const getTileSize = (clientWidth: number, columns: number): number => {
  return clientWidth / columns;
};

export const recalculateCanvasHeight = (
  rows: number,
  tileSize: number
): number => {
  return tileSize * rows;
};

export const populateAndGenerateTiles = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  columns: number,
  tileSize: number
): Tile[] => {
  const generatedTiles: Tile[] = [];
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      ctx.beginPath();
      ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize);
      const color = getRandomColor();
      ctx.fillStyle = color;
      generatedTiles.push({
        x: x * tileSize,
        y: y * tileSize,
        width: tileSize,
        height: tileSize,
        color,
      });
      ctx.fill()
    }
  }
  return generatedTiles;
};

export const populateTiles = (
  ctx: CanvasRenderingContext2D,
  xMouse: number,
  yMouse: number,
  tiles: Tile[],
  colorToReplace: string,
): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    ctx.beginPath();
    ctx.rect(tile.x, tile.y, tile.width, tile.height);
    ctx.fillStyle = ctx.isPointInPath(xMouse, yMouse)
      ? colorToReplace
      : tile.color;
    ctx.fill();
  }
};

export const recreateTiles = (
  ctx: CanvasRenderingContext2D,
  xMouse: number,
  yMouse: number,
  tiles: Tile[],
  color: string,
): void => {
  populateTiles(
    ctx,
    xMouse,
    yMouse,
    tiles, 
    color
  );
};

export const createTiles = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  columns: number
): Tile[] => {
  const tileSize = getTileSize(ctx.canvas.clientWidth, columns);
  ctx.canvas.height = recalculateCanvasHeight(rows, tileSize);
  const generatedTiles = populateAndGenerateTiles(ctx, rows, columns, tileSize);
  return generatedTiles;
};
