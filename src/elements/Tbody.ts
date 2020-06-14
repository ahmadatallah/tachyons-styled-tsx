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

export type TbodyProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps;
const Tbody = styled("tbody", { shouldForwardProp })<TbodyProps>(space, width, fontSize, color, {});

Tbody.defaultProps = {
  width: 1,
};

export default Tbody;
