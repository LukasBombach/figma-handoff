import { FC } from "react";
import { Rect } from "react-konva";
import { FRAME } from "../../../types/figma";
import Node from "./Node";
import rgbaFromColor from "../rgba/fromColor";

const Frame: FC<{ node: FRAME }> = ({ node: frame }) => {
  const { x, y, width, height } = frame.absoluteBoundingBox;
  const bgColor = rgbaFromColor(frame.backgroundColor);
  const visibleChildren = frame.children.filter(c => c.visible !== false);
  const nodes = visibleChildren.map(c => <Node key={c.id} node={c} />);
  return (
    <>
      <Rect x={x} y={y} width={width} height={height} fill={bgColor}></Rect>
      {nodes}
    </>
  );
};

export default Frame;
