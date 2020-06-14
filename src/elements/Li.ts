import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
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
} from "styled-system";

export type LiProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Li = styled("li", { shouldForwardProp })<LiProps>(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
  }
);

Li.defaultProps = {
  pl: 0,
};

export default Li;
