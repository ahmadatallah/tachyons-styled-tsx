import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
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
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  color,
  borders,
  BorderProps,
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
  overflow,
  OverflowProps,
} from "styled-system";

export type ArticleProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FlexProps &
  FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps &
  FontSizeProps &
  TextAlignProps &
  LineHeightProps &
  BorderProps &
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
  GridAreaProps &
  OverflowProps;

const Article = styled("article", { shouldForwardProp })<ArticleProps>(
  space,
  width,
  maxWidth,
  display,
  flex,
  flexWrap,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  lineHeight,
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
  overflow,
  {
    boxSizing: "border-box",
  }
);

Article.defaultProps = {
  width: 1,
};
export default Article;
