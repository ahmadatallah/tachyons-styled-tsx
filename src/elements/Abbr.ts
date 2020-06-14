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
  display,
  DisplayProps,
  textStyle,
} from "styled-system";

export type AbbrProps = SpaceProps & WidthProps & FontSizeProps & FontWeightProps & TextAlignProps & DisplayProps;

const Abbr = styled("abbr", { shouldForwardProp })<AbbrProps>(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  textStyle,
  {}
);

export default Abbr;
