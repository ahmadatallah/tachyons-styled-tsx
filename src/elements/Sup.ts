import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  borderRadius,
  BorderRadiusProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type SupProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BorderRadiusProps &
  BackgroundColorProps &
  OpacityProps;

const Sup = styled("sup", { shouldForwardProp })<SupProps>(
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borderRadius,
  {}
);

export default Sup;
