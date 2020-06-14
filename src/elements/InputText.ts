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
  type?: "text";
};

export type InputTextProps = DefaultProps &
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

const InputText = styled("input", { shouldForwardProp })<InputTextProps>(
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

InputText.defaultProps = {
  type: "text",
};

export default InputText;
