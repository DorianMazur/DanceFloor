import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Tile } from "../../types/canvas";
import { recreateTiles, createTiles } from "../../utils/canvasHelpers";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./DanceFloor.css";

export interface IDanceFloor {
  dimensions: Dimensions;
}

const DanceFloor: React.FC<IDanceFloor> = ({ dimensions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const generatedTiles = useRef<Tile[]>([]);
  const [columns, setColumns] = useState<null | number>(null);
  const [rows, setRows] = useState<null | number>(null);

  const generateNewTiles = (r: number, c: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    generatedTiles.current = createTiles(ctx, r, c);
  };

  const changeColorTile = (
    e: React.MouseEvent<HTMLCanvasElement>,
    color: string
  ) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;
    const x = e.clientX - canvasRef.current?.offsetLeft;
    const y = e.clientY - canvasRef.current?.offsetTop;
    recreateTiles(ctx, x, y, generatedTiles.current, color);
  };

  useEffect(() => {
    generateNewTiles(dimensions.rows, dimensions.columns);
  }, [dimensions]);

  return (
    <>
      <div className="form-container">
        <h4>
          If you do not specify the configuration, the default values ​​taken
          from the API will be used
        </h4>
        <div>
          <Input
            label="Set column quantity"
            value={columns}
            onChange={(v) => setColumns(v)}
            name="columns"
          />
          <Input
            label="Set row quantity"
            value={rows}
            onChange={(v) => setRows(v)}
            name="rows"
          />
          <Button
            text="Generate"
            onPress={() =>
              generateNewTiles(
                rows || dimensions.rows,
                columns || dimensions.columns
              )
            }
          />
        </div>
      </div>
      <canvas
        className="canvas"
        ref={canvasRef}
        width="500"
        onMouseMove={(e) => changeColorTile(e, "rgb(0,0,0)")}
        onClick={(e) => changeColorTile(e, "rgb(255,255,255)")}
      />
    </>
  );
};

export default DanceFloor;
