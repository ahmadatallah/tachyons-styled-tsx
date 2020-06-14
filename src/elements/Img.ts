import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  display,
  DisplayProps,
  width,
  maxWidth,
  MaxWidthProps,
  height,
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

export type ImgProps = SpaceProps &
  DisplayProps &
  MaxWidthProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Img = styled("img", { shouldForwardProp })<ImgProps>(
  space,
  display,
  width,
  maxWidth,
  height,
  color,
  borders,
  borderColor,
  borderRadius,
  {}
);

Img.defaultProps = {
  width: 1,
  display: "block",
  maxWidth: "100%",
  border: "0 none transparent",
};

export default Img;
