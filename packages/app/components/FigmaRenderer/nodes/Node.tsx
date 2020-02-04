import { FC } from "react";
import { NODE } from "../../../types/figma";
import Document from "./Document";

const typeMap = {
  DOCUMENT: Document,
};

const Node: FC<{ node: NODE }> = ({ node }) => {
  const Node = typeMap[node.type];
  if (Node) return <Node node={node} />;
  console.warn(`Missing render node for ${node.name} (${node.type})`);
  return undefined;
};

export default Node;
