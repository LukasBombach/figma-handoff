import { Color } from "../../types/figma";

export default function colorToRgba({ r, g, b, a }: Color): string {
  const v = (num: number) => Math.round(255 * num);
  return `rgba(${[r, g, b].map(v).join(",")}, ${a})`;
}
