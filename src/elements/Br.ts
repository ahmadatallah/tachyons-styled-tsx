import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, SpaceProps, display, DisplayProps } from "styled-system";

type BrProps = SpaceProps & DisplayProps;
const Br = styled("br", { shouldForwardProp })<BrProps>(space, display, {});

export default Br;
