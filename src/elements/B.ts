import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
} from "styled-system";

type BProps = SpaceProps & WidthProps & DisplayProps & FontSizeProps & FontWeightProps;

const B = styled("b", { shouldForwardProp })<BProps>(space, width, display, fontSize, fontWeight, color, {});

B.defaultProps = {
  fontWeight: "bolder",
};

export default B;
