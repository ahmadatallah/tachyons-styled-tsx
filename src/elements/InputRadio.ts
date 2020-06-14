import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
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

type DefaultProps = {
  type?: "radio";
};

export type InputRadioProps = DefaultProps &
  SpaceProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  BackgroundColorProps &
  OpacityProps;

const InputRadio = styled("input", { shouldForwardProp })<InputRadioProps>(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {}
);

InputRadio.defaultProps = {
  type: "radio",
};

export default InputRadio;
