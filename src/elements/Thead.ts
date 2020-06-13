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

type TheadProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps;
const Thead = styled("thead", { shouldForwardProp })<TheadProps>(space, width, fontSize, color, {});

Thead.defaultProps = {
  width: 1,
};

export default Thead;
