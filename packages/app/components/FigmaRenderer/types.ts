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
  SCALE = "SCALE",
  WIDTH = "WIDTH",
  HEIGHT = "HEIGHT",
}

export interface Rectangle {
  x: Number;
  y: Number;
  width: Number;
  height: Number;
}

export enum BlendMode {
  PASS_THROUGH = "PASS_THROUGH",
  NORMAL = "NORMAL",
  DARKEN = "DARKEN",
  MULTIPLY = "MULTIPLY",
  LINEAR_BURN = "LINEAR_BURN",
  COLOR_BURN = "COLOR_BURN",
  LIGHTEN = "LIGHTEN",
  SCREEN = "SCREEN",
  LINEAR_DODGE = "LINEAR_DODGE",
  COLOR_DODGE = "COLOR_DODGE",
  OVERLAY = "OVERLAY",
  SOFT_LIGHT = "SOFT_LIGHT",
  HARD_LIGHT = "HARD_LIGHT",
  DIFFERENCE = "DIFFERENCE",
  EXCLUSION = "EXCLUSION",
  HUE = "HUE",
  SATURATION = "SATURATION",
  COLOR = "COLOR",
  LUMINOSITY = "LUMINOSITY",
}

export enum EasingType {
  EASE_IN = "EASE_IN",
  EASE_OUT = "EASE_OUT",
  EASE_IN_AND_OUT = "EASE_IN_AND_OUT",
  LINEAR = "LINEAR",
}

export interface LayoutConstraint {
  vertical: VerticalLayoutConstraint;
  horizontal: HorizontalLayoutConstraint;
}

export enum VerticalLayoutConstraint {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  CENTER = "CENTER",
  TOP_BOTTOM = "TOP_BOTTOM",
  SCALE = "SCALE",
}

export enum HorizontalLayoutConstraint {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
  LEFT_RIGHT = "LEFT_RIGHT",
  SCALE = "SCALE",
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
  COLUMNS = "COLUMNS",
  ROWS = "ROWS",
  GRID = "GRID",
}

export enum Alignment {
  MIN = "MIN",
  STRETCH = "STRETCH",
  CENTER = "CENTER",
}

export interface Effect {
  type: EffectType;
  visible: Boolean;
  radius: Number;
  color: Color;
  blendMode: BlendMode;
  offset: Vector;
}

export enum EffectType {
  INNER_SHADOW = "INNER_SHADOW",
  DROP_SHADOW = "DROP_SHADOW",
  LAYER_BLUR = "LAYER_BLUR",
  BACKGROUND_BLUR = "BACKGROUND_BLUR",
}

export interface Paint {
  type: PaintType;
  visible: Boolean;
  opacity: Number;
  color: Color;
  blendMode: BlendMode;
  gradientHandlePositions: Vector[];
  gradientStops: ColorStop[];
  scaleMode: ScaleMode;
  imageTransform: Transform;
  scalingFactor: Number;
  imageRef: String;
  gifRef: String;
}

export enum PaintType {
  SOLID = "SOLID",
  GRADIENT_LINEAR = "GRADIENT_LINEAR",
  GRADIENT_RADIAL = "GRADIENT_RADIAL",
  GRADIENT_ANGULAR = "GRADIENT_ANGULAR",
  GRADIENT_DIAMOND = "GRADIENT_DIAMOND",
  IMAGE = "IMAGE",
  EMOJI = "EMOJI",
}

export enum ScaleMode {
  FILL = "FILL",
  FIT = "FIT",
  TILE = "TILE",
  STRETCH = "STRETCH",
}

export interface Vector {
  x: Number;
  y: Number;
}

export interface Size {
  width: Number;
  height: Number;
}

export type Transform = [[Number, Number, Number], [Number, Number, Number]];

export interface FrameOffset {
  node_id: String;
  node_offset: Vector;
}

export interface ColorStop {
  position: Number;
  color: Color;
}

export interface TypeStyle {
  fontFamily: String;
  fontPostScriptName: String;
  paragraphSpacing: Number;
  paragraphIndent: Number;
  italic: Boolean;
  fontWeight: Number;
  fontSize: Number;
  textCase: TextCase;
  textDecoration: TextDecoration;
  textAlignHorizontal: TextAlignHorizontal;
  textAlignVertical: TextAlignVertical;
  letterSpacing: Number;
  fills: Paint[];
  opentypeFlags: Record<string, Number>;
  lineHeightPx: Number;
  lineHeightPercent: Number;
  lineHeightPercentFontSize: Number;
  lineHeightUnit: LineHeightUnit;
}

export enum TextCase {
  UPPER = "UPPER",
  LOWER = "LOWER",
  TITLE = "TITLE",
  SMALL_CAPS = "SMALL_CAPS",
  SMALL_CAPS_FORCED = "SMALL_CAPS_FORCED",
}

export enum TextDecoration {
  STRIKETHROUGH = "STRIKETHROUGH",
  UNDERLINE = "UNDERLINE",
}

export enum TextAlignHorizontal {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
  JUSTIFIED = "JUSTIFIED",
}

export enum TextAlignVertical {
  TOP = "TOP",
  CENTER = "CENTER",
  BOTTOM = "BOTTOM",
}

export enum LineHeightUnit {
  PIXELS = "PIXELS",
  FONT_SIZE_PERCENT = "FONT_SIZE_%",
  INTRINSIC_PERCENT = "INTRINSIC_%",
}

export interface Component {
  key: String;
  name: String;
  description: String;
}

export interface Style {
  key: String;
  name: String;
  description: String;
  style_type: StyleType;
}

export enum StyleType {
  FILL = "FILL",
  TEXT = "TEXT",
  EFFECT = "EFFECT",
  GRID = "GRID",
}
