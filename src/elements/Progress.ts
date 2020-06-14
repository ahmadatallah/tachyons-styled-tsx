import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import theme from "../theme";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  display,
  DisplayProps,
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
  barColor?: string;
  valueColor?: string;
};

export type ProgressProps = DefaultProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  DisplayProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Progress = styled("progress", { shouldForwardProp })<ProgressProps>(
  space,
  width,
  height,
  display,
  color,
  borders,
  borderColor,
  borderRadius,
  (props) => ({
    overflow: "hidden",
    webkitAppearance: "none",
    appearance: "none",
    "&[value]::-webkit-progress-bar": {
      backgroundColor: props.barColor,
    },
    "&[value]::-webkit-progress-value": {
      backgroundColor: props.valueColor,
    },
    verticalAlign: "top",
  })
);

Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64,
  barColor: theme.colors.gray,
  valueColor: theme.colors.blue,
};

export default Progress;
