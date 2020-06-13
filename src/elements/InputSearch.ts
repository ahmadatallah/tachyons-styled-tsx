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
  type?: "search";
};

type InputSearchProps = DefaultProps &
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

const InputSearch = styled("input", { shouldForwardProp })<InputSearchProps>(
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
  { boxSizing: "border-box" }
);

InputSearch.defaultProps = {
  type: "search",
};

export default InputSearch;
