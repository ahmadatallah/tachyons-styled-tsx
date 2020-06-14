import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type StrongProps = SpaceProps & FontSizeProps & FontWeightProps & BackgroundColorProps & OpacityProps;

const Strong = styled("strong", { shouldForwardProp })<StrongProps>(space, fontSize, fontWeight, color, {});

Strong.defaultProps = {
  fontWeight: "bolder",
};

export default Strong;
