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

export type DataProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps;
const Data = styled("data", { shouldForwardProp })<DataProps>(space, width, fontSize, color, {});

export default Data;
