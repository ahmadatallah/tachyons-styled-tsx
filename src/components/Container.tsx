import React, { FC } from "react";
import Div from "elements/Div";

type ContainerProps = {
  innerBg?: string;
  innerWidth?: string | number;
};

const Container: FC<ContainerProps> = ({ innerBg, innerWidth, ...props }) => {
  return (
    <Div {...props}>
      <Div mx="auto" maxWidth={innerWidth} bg={innerBg}>
        {props.children}
      </Div>
    </Div>
  );
};

Container.defaultProps = {
  innerWidth: "64rem",
  innerBg: "transparent",
};

export default Container;
