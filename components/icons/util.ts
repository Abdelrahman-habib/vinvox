import React, { ReactElement, ReactNode } from "react";
import { createLucideIcon, IconNode } from "lucide-react";

interface SvgProps {
  children: ReactNode;
}
const parseSvgElement = (element: ReactElement): IconNode => {
  const { type, props } = element;

  const children = React.Children.toArray(props.children).filter(
    React.isValidElement
  );

  const attrs: Record<string, string> = {
    ...Object.fromEntries(
      Object.entries(props).map(([key, value]) => [key, value!.toString()])
    ),
    key: generateRandomString(9),
  };

  delete attrs.children;

  const node: IconNode = [[type as keyof React.ReactSVG, attrs]];

  if (children.length > 0) {
    children.forEach((child) => {
      node.push(...parseSvgElement(child as ReactElement));
    });
  }

  return node;
};

export const createIconFromJsxSvg = (
  jsxSvgElement: ReactElement<SvgProps>,
  iconName: string
) => {
  const elements = parseSvgElement(jsxSvgElement);
  return createLucideIcon(iconName, elements);
};

export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
