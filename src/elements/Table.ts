import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  fontSize,
  FontSizeProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  layout,
  LayoutProps,
} from "styled-system";

export type TableProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  LayoutProps;

const Table = styled("table", { shouldForwardProp })<TableProps>(space, width, maxWidth, fontSize, color, layout, {
  borderCollapse: "collapse",
  cellSpacing: 0,
  cellPadding: 0,
});

Table.defaultProps = {
  width: 1,
};

export default Table;
