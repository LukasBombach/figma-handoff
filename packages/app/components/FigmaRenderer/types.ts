export interface FigmaNode {
  id: string;
  name: string;
  visible: boolean;
  type: "DOCUMENT";
}

export interface FigmaDocument extends FigmaNode {
  children: FigmaNode[];
}

export interface Canvas extends FigmaNode {
  children: FigmaNode[];
  backgroundColor: Color;
  prototypeStartNodeID: string;
  exportSettings: ExportSetting[];
}

export interface Frame extends FigmaNode {
  children: FigmaNode[];
  locked: boolean;
  background: Paint[];
  backgroundColor: Color;
  fills: Paint[];
  strokes: Paint[];
  strokeWeight: number;
  strokeAlign: string;
  cornerRadius: number;
  rectangleCornerRadii: number[];
  exportSettings: ExportSetting[];
  blendMode: BlendMode;
  preserveRatio: boolean;
  constraints: LayoutConstraint;
  transitionNodeID: string;
  transitionDuration: number;
  transitionEasing: EasingType;
  opacity: number;
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
  clipsContent: boolean;
  layoutGrids: LayoutGrid[];
  effects: Effect[];
  isMask: boolean;
  isMaskOutline: boolean;
}

export interface Group extends Frame {}

export interface Vector extends FigmaNode {
  locked: boolean;
  exportSettings: ExportSetting[];
  blendMode: BlendMode;
  preserveRatio: boolean;
  constraints: LayoutConstraint;
  transitionNodeID: string;
  transitionDuration: number;
  transitionEasing: EasingType;
  opacity: number;
  absoluteBoundingBox: Rectangle;
  effects: Effect[];
  size: Vector;
  relativeTransform: Transform;
  isMask: boolean;
  fills: Paint[];
  fillGeometry: Path[];
  strokes: Paint[];
  strokeWeight: number;
  strokeCap: string;
  strokeJoin: string;
  strokeDashes: number[];
  strokeMiterAngle: number;
  strokeGeometry: Path[];
  strokeAlign: string;
  styles: Record<StyleType, string>;
}

export interface BooleanOperation extends Vector {
  children: FigmaNode[];
  booleanOperation: string;
}

export interface Star extends Vector {}
export interface Line extends Vector {}
export interface Ellipse extends Vector {}
export interface RegularPolygon extends Vector {}

export interface Rectangle extends Vector {
  cornerRadius: number;
  rectangleCornerRadii: [number, number, number, number];
}

export interface Text extends Vector {
  characters: string;
  style: TypeStyle;
  characterStyleOverrides: number[];
  styleOverrideTable: Record<number, TypeStyle>;
}

export interface Slice {
  exportSettings: ExportSetting[];
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
}

export interface Component extends Frame {}

export interface Instance extends Frame {
  componentId: string;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface ExportSetting {
  suffix: string;
  format: string;
  constraint: Constraint;
}

export interface Constraint {
  type: ConstraintType;
  value: number;
}

export enum ConstraintType {
  SCALE = "SCALE",
  WIDTH = "WIDTH",
  HEIGHT = "HEIGHT",
}

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
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
  sectionSize: number;
  visible: boolean;
  color: Color;
  alignment: Alignment;
  gutterSize: number;
  offset: number;
  count: number;
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
  visible: boolean;
  radius: number;
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
  visible: boolean;
  opacity: number;
  color: Color;
  blendMode: BlendMode;
  gradientHandlePositions: Vector[];
  gradientStops: ColorStop[];
  scaleMode: ScaleMode;
  imageTransform: Transform;
  scalingFactor: number;
  imageRef: string;
  gifRef: string;
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
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export type Transform = [[number, number, number], [number, number, number]];

export interface FrameOffset {
  node_id: string;
  node_offset: Vector;
}

export interface ColorStop {
  position: number;
  color: Color;
}

export interface TypeStyle {
  fontFamily: string;
  fontPostScriptName: string;
  paragraphSpacing: number;
  paragraphIndent: number;
  italic: boolean;
  fontWeight: number;
  fontSize: number;
  textCase: TextCase;
  textDecoration: TextDecoration;
  textAlignHorizontal: TextAlignHorizontal;
  textAlignVertical: TextAlignVertical;
  letterSpacing: number;
  fills: Paint[];
  opentypeFlags: Record<string, number>;
  lineHeightPx: number;
  lineHeightPercent: number;
  lineHeightPercentFontSize: number;
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
  key: string;
  name: string;
  description: string;
}

export interface Style {
  key: string;
  name: string;
  description: string;
  style_type: StyleType;
}

export enum StyleType {
  FILL = "FILL",
  TEXT = "TEXT",
  EFFECT = "EFFECT",
  GRID = "GRID",
}
