import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
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
  fontSize,
  FontSizeProps,
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

export type SectionProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  BottomProps &
  DisplayProps &
  FlexProps &
  FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps &
  FontSizeProps &
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

const Section = styled("section", { shouldForwardProp })<SectionProps>(
  space,
  width,
  maxWidth,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
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

Section.defaultProps = {
  width: 1,
};

export default Section;
