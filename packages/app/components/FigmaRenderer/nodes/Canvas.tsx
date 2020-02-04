import { FC } from "react";
import { Rect } from "react-konva";
import { CANVAS } from "../../../types/figma";
import Node from "./Node";
import rgbaFromColor from "../rgba/fromColor";

const Canvas: FC<{ node: CANVAS }> = ({ node: canvas }) => {
  const bgColor = rgbaFromColor(canvas.backgroundColor);
  const visibleChildren = canvas.children.filter(c => c.visible !== false);
  const nodes = visibleChildren.map(c => <Node key={c.id} node={c} />);
  return (
    <>
      <Rect x={0} y={0} width={800} height={600} fill={bgColor}></Rect>
      {nodes}
    </>
  );
};

export default Canvas;
