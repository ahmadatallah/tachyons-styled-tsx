import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  display,
  DisplayProps,
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
} from "styled-system";

export type DetailsProps = SpaceProps &
  DisplayProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps;

const Details = styled("details", { shouldForwardProp })<DetailsProps>(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {}
);

Details.defaultProps = {
  display: "block",
};

export default Details;
