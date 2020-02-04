import { FC } from "react";
import { DOCUMENT } from "../../types/figma";
import { Stage, Layer } from "react-konva";
import Document from "./nodes/Document";

const FigmaRenderer: FC<{ document: DOCUMENT }> = ({ document }) => {
  return (
    <Stage width={800} height={600}>
      <Layer>
        <Document document={document} />
      </Layer>
    </Stage>
  );
};

export default FigmaRenderer;
