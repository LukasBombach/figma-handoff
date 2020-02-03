import { Stage, Layer, Text } from "react-konva";

function FigmaRenderer() {
  return (
    <Stage width={800} height={600}>
      <Layer>
        <Text text="hello world" />
      </Layer>
    </Stage>
  );
}

export default FigmaRenderer;
