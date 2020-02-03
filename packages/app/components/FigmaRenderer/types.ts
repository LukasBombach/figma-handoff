interface Node {
  id: String;
  name: String;
  visible: Boolean;
  type: "DOCUMENT";
}

interface Document extends Node {
  children: Node[];
}

interface Canvas extends Node {
  children: Node[];
  backgroundColor: Color;
  prototypeStartNodeID: String;
  exportSettings: ExportSetting[];
}

interface Frame extends Node {
  children: Node[];
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

interface Group extends Frame {}

interface Vector extends Node {
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

interface BooleanOperation extends Vector {
  children: Node[];
  booleanOperation: String;
}

interface Star extends Vector {}
interface Line extends Vector {}
interface Ellipse extends Vector {}
interface RegularPolygon extends Vector {}

interface Rectangle extends Vector {
  cornerRadius: Number;
  rectangleCornerRadii: [Number, Number, Number, Number];
}

interface Text extends Vector {
  characters: String;
  style: TypeStyle;
  characterStyleOverrides: Number[];
  styleOverrideTable: Record<Number, TypeStyle>;
}

interface Slice {
  exportSettings: ExportSetting[];
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
}

interface Component extends Frame {}

interface Instance extends Frame {
  componentId: String;
}

interface Color {
  r: Number;
  g: Number;
  b: Number;
  a: Number;
}

interface ExportSetting {
  suffix: String;
  format: String;
  constraint: Constraint;
}

interface Constraint {
  type: ConstraintType;
  value: Number;
}

enum ConstraintType {
  SCALE,
  WIDTH,
  HEIGHT,
}

interface Rectangle {
  x: Number;
  y: Number;
  width: Number;
  height: Number;
}

enum BlendMode {
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

enum EasingType {
  EASE_IN,
  EASE_OUT,
  EASE_IN_AND_OUT,
  LINEAR,
}

interface LayoutConstraint {
  vertical: VerticalLayoutConstraint;
  horizontal: HorizontalLayoutConstraint;
}

enum VerticalLayoutConstraint {
  TOP,
  BOTTOM,
  CENTER,
  TOP_BOTTOM,
  SCALE,
}

enum HorizontalLayoutConstraint {
  LEFT,
  RIGHT,
  CENTER,
  LEFT_RIGHT,
  SCALE,
}
