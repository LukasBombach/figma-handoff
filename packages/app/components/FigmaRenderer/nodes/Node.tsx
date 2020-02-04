import { FC } from "react";
import { NODE } from "../../../types/figma";
import Document from "./Document";
import Canvas from "./Canvas";

const typeMap = {
  DOCUMENT: Document,
  CANVAS: Canvas,
};

const Node: FC<{ node: NODE }> = ({ node }) => {
  const Node = typeMap[node.type];
  if (Node) return <Node node={node} />;
  console.warn(`Missing render node for ${node.name} (${node.type})`, node);
  return null;
};

export default Node;
