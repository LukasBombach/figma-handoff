import { FC } from "react";
import { DOCUMENT } from "../../../types/figma";
import Node from "./Node";

const Document: FC<{ document: DOCUMENT }> = ({ document }) => {
  const visibleChildren = document.children.filter(c => c.visible !== false);
  const nodes = visibleChildren.map(c => <Node key={c.id} node={c} />);
  return <>{nodes}</>;
};

export default Document;
