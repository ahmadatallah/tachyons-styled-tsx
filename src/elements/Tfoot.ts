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
} from "styled-system";

export type TfootProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps;
const Tfoot = styled("tfoot", { shouldForwardProp })<TfootProps>(space, width, fontSize, color, {});

Tfoot.defaultProps = {
  width: 1,
};

export default Tfoot;
