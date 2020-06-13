import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";

import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  maxWidth,
  MaxWidthProps,
  position,
  PositionProps,
  top,
  TopProps,
  left,
  LeftProps,
  right,
  RightProps,
  bottom,
  BottomProps,
  display,
  DisplayProps,
  flex,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  textAlign,
  TextAlignProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridArea,
  GridAreaProps,
} from "styled-system";

type DivProps = SpaceProps &
  HeightProps &
  WidthProps &
  MaxWidthProps &
  PositionProps &
  TopProps &
  LeftProps &
  RightProps &
  BottomProps &
  DisplayProps &
  FlexProps &
  FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps &
  FontFamilyProps &
  FontSizeProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  GridGapProps &
  GridColumnGapProps &
  GridRowGapProps &
  GridColumnProps &
  GridRowProps &
  GridAutoFlowProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridTemplateAreasProps &
  GridAreaProps;

const Div = styled("div", { shouldForwardProp })<DivProps>(
  space,
  width,
  height,
  maxWidth,
  position,
  top,
  left,
  right,
  bottom,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontFamily,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  {
    boxSizing: "border-box",
  }
);

Div.defaultProps = {
  width: 1,
  color: "inherit",
};

export default Div;
