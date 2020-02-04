import { FC } from "react";
import { DOCUMENT } from "../../types/figma";
import Document from "./nodes/Document";

const FigmaRenderer: FC<{ document: DOCUMENT }> = ({ document }) => {
  return <Document document={document} />;
};

export default FigmaRenderer;
