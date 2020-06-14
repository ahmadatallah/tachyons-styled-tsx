import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

export type HrProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const Hr = styled("hr", { shouldForwardProp })<HrProps>(space, width, maxWidth, color, borders, borderColor, {
  boxSizing: "border-box",
  height: 0,
  overflow: "visible",
});

Hr.defaultProps = {
  borderTop: "1px solid currentColor",
  borderBottom: "0px solid transparent",
};

export default Hr;
