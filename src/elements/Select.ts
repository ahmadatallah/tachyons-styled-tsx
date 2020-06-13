import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, SpaceProps, display, DisplayProps, width, WidthProps } from "styled-system";

type SelectProps = SpaceProps & DisplayProps & WidthProps;
const Select = styled("select", { shouldForwardProp })<SelectProps>(space, display, width, {});

export default Select;
