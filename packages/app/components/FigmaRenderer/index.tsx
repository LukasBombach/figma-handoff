import { useState, useEffect, useRef, FC } from "react";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import { DOCUMENT } from "../../types/figma";
import Document from "./nodes/Document";

const FigmaRenderer: FC<{ document: DOCUMENT }> = ({ document }) => {
  const [scale, setScale] = useState(1);
  const [[x, y], setPosition] = useState([0, 0]);
  const [[width, height], setSize] = useState([0, 0]);
  const container = useRef<HTMLDivElement>(null);
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
        style={{ border: "1px solid black" }}
        draggable={true}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        x={x}
        y={y}
      >
        <Document document={document} />
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

export default FigmaRenderer;
