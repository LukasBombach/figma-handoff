import { FC } from "react";
import { Stage, Rect } from "react-konva";
import { CANVAS } from "../../../types/figma";
import Node from "./Node";
import colorToRgba from "../colorToRgba";

const Canvas: FC<{ node: CANVAS }> = ({ node: canvas }) => {
  const visibleChildren = canvas.children.filter(c => c.visible !== false);
  const nodes = visibleChildren.map(c => <Node key={c.id} node={c} />);
  const bgColor = colorToRgba(canvas.backgroundColor);
  return (
    <Rect x={0} y={0} width={800} height={600} fill={bgColor}>
      {nodes}
    </Rect>
  );
};

export default Canvas;
