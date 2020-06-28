/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import elements from "elements";
import { jsx as emotionJSX } from "@emotion/core";
import "types/react-jsx";

type Element = keyof typeof elements;
type Tags = {
  [key: string]: React.ComponentType<any> | string | undefined;
};

const tags: Tags = {};

const isValidKey = (key: unknown): key is Element => {
  return typeof key === "string";
};

Object.keys(elements).forEach((key) => {
  if (isValidKey(key)) {
    tags[key.toLowerCase()] = elements[key];
  }
});

export const jsx = (type: any, props: any, ...children: any[]) => {
  return emotionJSX.apply(undefined, [tags[type] ?? type, props, ...children]);
};

export default jsx;
