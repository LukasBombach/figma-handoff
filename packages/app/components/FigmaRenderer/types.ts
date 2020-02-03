export interface FigmaNode {
  id: String;
  name: String;
  visible: Boolean;
  type: "DOCUMENT";
}

export interface FigmaDocument extends FigmaNode {
  children: FigmaNode[];
}

export interface Canvas extends FigmaNode {
  children: FigmaNode[];
  backgroundColor: Color;
  prototypeStartNodeID: String;
  exportSettings: ExportSetting[];
}

export interface Frame extends FigmaNode {
  children: FigmaNode[];
  locked: Boolean;
  background: Paint[];
  backgroundColor: Color;
  fills: Paint[];
  strokes: Paint[];
  strokeWeight: Number;
  strokeAlign: String;
  cornerRadius: Number;
  rectangleCornerRadii: Number[];
  exportSettings: ExportSetting[];
  blendMode: BlendMode;
  preserveRatio: Boolean;
  constraints: LayoutConstraint;
  transitionNodeID: String;
  transitionDuration: Number;
  transitionEasing: EasingType;
  opacity: Number;
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
  clipsContent: Boolean;
  layoutGrids: LayoutGrid[];
  effects: Effect[];
  isMask: Boolean;
  isMaskOutline: Boolean;
}

export interface Group extends Frame {}

export interface Vector extends FigmaNode {
  locked: Boolean;
  exportSettings: ExportSetting[];
  blendMode: BlendMode;
  preserveRatio: Boolean;
  constraints: LayoutConstraint;
  transitionNodeID: String;
  transitionDuration: Number;
  transitionEasing: EasingType;
  opacity: Number;
  absoluteBoundingBox: Rectangle;
  effects: Effect[];
  size: Vector;
  relativeTransform: Transform;
  isMask: Boolean;
  fills: Paint[];
  fillGeometry: Path[];
  strokes: Paint[];
  strokeWeight: Number;
  strokeCap: String;
  strokeJoin: String;
  strokeDashes: Number[];
  strokeMiterAngle: Number;
  strokeGeometry: Path[];
  strokeAlign: String;
  styles: Record<StyleType, String>;
}

export interface BooleanOperation extends Vector {
  children: FigmaNode[];
  booleanOperation: String;
}

export interface Star extends Vector {}
export interface Line extends Vector {}
export interface Ellipse extends Vector {}
export interface RegularPolygon extends Vector {}

export interface Rectangle extends Vector {
  cornerRadius: Number;
  rectangleCornerRadii: [Number, Number, Number, Number];
}

export interface Text extends Vector {
  characters: String;
  style: TypeStyle;
  characterStyleOverrides: Number[];
  styleOverrideTable: Record<Number, TypeStyle>;
}

export interface Slice {
  exportSettings: ExportSetting[];
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
}

export interface Component extends Frame {}

export interface Instance extends Frame {
  componentId: String;
}

export interface Color {
  r: Number;
  g: Number;
  b: Number;
  a: Number;
}

export interface ExportSetting {
  suffix: String;
  format: String;
  constraint: Constraint;
}

export interface Constraint {
  type: ConstraintType;
  value: Number;
}

export enum ConstraintType {
  SCALE,
  WIDTH,
  HEIGHT,
}

export interface Rectangle {
  x: Number;
  y: Number;
  width: Number;
  height: Number;
}

export enum BlendMode {
  PASS_THROUGH,
  NORMAL,
  DARKEN,
  MULTIPLY,
  LINEAR_BURN,
  COLOR_BURN,
  LIGHTEN,
  SCREEN,
  LINEAR_DODGE,
  COLOR_DODGE,
  OVERLAY,
  SOFT_LIGHT,
  HARD_LIGHT,
  DIFFERENCE,
  EXCLUSION,
  HUE,
  SATURATION,
  COLOR,
  LUMINOSITY,
}

export enum EasingType {
  EASE_IN,
  EASE_OUT,
  EASE_IN_AND_OUT,
  LINEAR,
}

export interface LayoutConstraint {
  vertical: VerticalLayoutConstraint;
  horizontal: HorizontalLayoutConstraint;
}

export enum VerticalLayoutConstraint {
  TOP,
  BOTTOM,
  CENTER,
  TOP_BOTTOM,
  SCALE,
}

export enum HorizontalLayoutConstraint {
  LEFT,
  RIGHT,
  CENTER,
  LEFT_RIGHT,
  SCALE,
}

export interface LayoutGrid {
  pattern: Pattern;
  sectionSize: Number;
  visible: Boolean;
  color: Color;
  alignment: Alignment;
  gutterSize: Number;
  offset: Number;
  count: Number;
}

export enum Pattern {
  COLUMNS,
  ROWS,
  GRID,
}

export enum Alignment {
  MIN,
  STRETCH,
  CENTER,
}
