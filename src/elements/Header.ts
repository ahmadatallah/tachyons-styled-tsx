import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  display,
  DisplayProps,
  flex,
  FlexProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
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

type FooterProps = SpaceProps &
  HeightProps &
  WidthProps &
  DisplayProps &
  FlexProps &
  AlignItemsProps &
  JustifyContentProps &
  FontSizeProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
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

const Header = styled("header", { shouldForwardProp })(
  space,
  width,
  height,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
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

export default Header;
