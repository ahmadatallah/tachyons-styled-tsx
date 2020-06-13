import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  display,
  DisplayProps,
  maxWidth,
  MaxWidthProps,
  fontSize,
  FontSizeProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

type TextareaProps = SpaceProps &
  WidthProps &
  DisplayProps &
  MaxWidthProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderRadiusProps;

const Textarea = styled("textarea", { shouldForwardProp })<TextareaProps>(
  display,
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    overflow: "auto",
  }
);

export default Textarea;
