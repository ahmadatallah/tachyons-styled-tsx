import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, SpaceProps, fontSize, FontSizeProps, color, BackgroundColorProps, OpacityProps } from "styled-system";

type TrProps = SpaceProps & FontSizeProps & BackgroundColorProps & OpacityProps;

const Tr = styled("tr", { shouldForwardProp })<TrProps>(space, fontSize, color, {});

export default Tr;
