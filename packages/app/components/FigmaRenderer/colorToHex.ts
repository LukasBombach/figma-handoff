import { Color } from "../../types/figma";

export default function colorToHex({ r, g, b }: Color): string {
  const v = (num: number) => Math.round(255 * num).toString(16);
  return `#${[r, g, b].map(v).join("")}`;
}
