/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import elements from "./elements";
import { jsx as emotionJSX } from "@emotion/core";

type Element = keyof typeof elements;
const tags: unknown = {};
type Tags = {
  [key: string]: React.ComponentType<any> | string | undefined;
};

const isValidKey = (key: unknown): key is Element => {
  return typeof key === "string";
};

Object.keys(elements).forEach((key) => {
  if (isValidKey(key)) {
    (tags as Tags)[(key as string).toLowerCase()] = elements[key] as React.ComponentType<any>;
  }
});

export const jsx = (type: any, props: any, ...children: any[]) => {
  return emotionJSX.apply(undefined, [(tags as Tags)[type] ?? type, props, ...children]);
};

export default jsx;
