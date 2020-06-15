/** @jsx jsx */
import jsx from "../jsx";
import React, { FC } from "react";

type CardProps = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  tag: string;
  link: Record<"text" | "href", string>;
  maxWidth: string | number;
  border?: string;
  borderColor?: string;
  borderRadius?: string | number;
  style?: Record<string, string | number>;
};

const Card: FC<CardProps> = ({ children, ...props }) => {
  const { image, title, subtitle, text, tag, link, maxWidth } = props;
  return (
    <article {...props}>
      <div position="relative">
        {tag && (
          <div
            position="absolute"
            top={16}
            right={16}
            width="auto"
            px={2}
            py={1}
            borderRadius={1}
            bg="black-80"
            color="white"
            fontSize={0}
          >
            {tag}{" "}
          </div>
        )}
        <img src={image} />
      </div>
      <div px={[3, 4]} py={[3, 4]}>
        {title && (
          <h3 fontSize={3} mt={0} mb={1}>
            {title}
          </h3>
        )}
        {subtitle && (
          <h3 fontSize={1} mt={0} mb={2} lineHeight={1.25}>
            {subtitle}
          </h3>
        )}
        {text && (
          <p fontSize={1} my={0}>
            {text}
          </p>
        )}
        {link && (
          <a href={link.href} fontWeight={700} fontSize={1} color="blue" borderRadius={3} px={0} py={2}>
            {link.text}
          </a>
        )}
      </div>
    </article>
  );
};

Card.defaultProps = {
  border: "1px solid",
  borderColor: "black-10",
  borderRadius: 2,
  style: { overflow: "hidden" },
};

export default Card;
