import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

type ThProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const Th = styled("th", { shouldForwardProp })<ThProps>(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {}
);

Th.defaultProps = {
  fontWeight: "bold",
};
export default Th;
