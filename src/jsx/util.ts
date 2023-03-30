import { JSX } from "src/jsx/types";

export function normaliseChildren(children: any) {
  if (!Array.isArray(children)) return children ? [children] : [];
  return children.flat().filter(Boolean);
}

export function isElementFn(element: JSX.Element): element is JSX.ElementFn {
  return typeof element === "function";
}

export function isPlainElement(element: JSX.Element): element is keyof JSX.IntrinsicElements {
  return typeof element === "string";
}
