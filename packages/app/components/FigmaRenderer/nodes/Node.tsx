import { FC } from "react";
import { NODE } from "../../../types/figma";
import Document from "./Document";
import Canvas from "./Canvas";
import Frame from "./Frame";

const typeMap = {
  DOCUMENT: Document,
  CANVAS: Canvas,
  FRAME: Frame,
};

const Node: FC<{ node: NODE }> = ({ node }) => {
  const NodeType = typeMap[node.type];
  if (NodeType) return <NodeType node={node} />;
  console.warn(`Missing render node for ${node.name} (${node.type})`, node);
  return null;
};

export default Node;
