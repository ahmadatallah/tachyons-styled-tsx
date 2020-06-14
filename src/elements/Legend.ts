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
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

export type LegendProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Legend = styled("legend", { shouldForwardProp })<LegendProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    maxWidth: "100%",
    whiteSpace: "normal",
  }
);

Legend.defaultProps = {
  color: "inherit",
  display: "table",
  p: 0,
};

export default Legend;
