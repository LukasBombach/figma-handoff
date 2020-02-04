import { useState, useEffect, useRef, FC } from "react";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import { CANVAS } from "../../../types/figma";
import rgbaFromColor from "../rgba/fromColor";
import Node from "./Node";

const Canvas: FC<{ node: CANVAS }> = ({ node: canvas }) => {
  const [scale, setScale] = useState(1);
  const [[x, y], setPosition] = useState([40, 40]);
  const [[width, height], setSize] = useState([0, 0]);
  const container = useRef<HTMLDivElement>(null);
  const visibleChildren = canvas.children.filter(c => c.visible !== false);
  const nodes = visibleChildren.map(c => <Node key={c.id} node={c} />);
  const background = rgbaFromColor(canvas.backgroundColor);
  const scaleBy = 1.1;

  // todo create hook, ResizeObserver, unmount
  useEffect(() => {
    const width = container.current.offsetWidth;
    const height = container.current.offsetHeight;
    setSize([width, height]);
  }, []);

  // todo create hook
  const handleWheel = ({ evt, target }: Konva.KonvaEventObject<WheelEvent>) => {
    const stage = target.getStage();
    const mouseX = stage.getPointerPosition().x / scale - stage.x() / scale;
    const mouseY = stage.getPointerPosition().y / scale - stage.y() / scale;
    const newScale = evt.deltaY > 0 ? scale * scaleBy : scale / scaleBy;
    const newX = -(mouseX - stage.getPointerPosition().x / newScale) * newScale;
    const newY = -(mouseY - stage.getPointerPosition().y / newScale) * newScale;
    setScale(newScale);
    setPosition([newX, newY]);
    evt.preventDefault();
  };

  return (
    <div className="container" ref={container}>
      <Stage
        width={width}
        height={height}
        style={{ background }}
        draggable={true}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        x={x}
        y={y}
      >
        <Layer>{nodes}</Layer>
      </Stage>
      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Canvas;
