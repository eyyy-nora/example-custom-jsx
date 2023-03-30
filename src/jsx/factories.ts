import type { JSX } from "src/jsx/types";
import { isElementFn, isPlainElement, normaliseChildren } from "src/jsx/util";


export class CustomElements {
  /**
   * Creates fragments
   * @param props - The properties of fragments, by default only 'key' is allowed
   * @param children - The children of the fragment
   *
   * @remarks *required* for JSX fragment syntax to work, for compatability should be named 'Fragment' only.
   */
  static Fragment({ children }: { children: Element[] }) {
    return normaliseChildren(children);
  }

  /**
   * Creates elements and components
   * @param element - The element to create, either a string or a component function
   * @param props - The properties of the element
   * @param children - The children of the element
   *
   * @remarks *required* for JSX elements to work, for compatability should be named 'createElement' only.
   */
  static createElement<T extends JSX.Element>(
    element: T,
    props: JSX.PropsWithoutChildren<T> = {} as any, // null props
    ...children: JSX.ChildrenOf<T>
  ) {
    if (isPlainElement(element)) {
      if (element in this) return (this as any)[element](props, children);
      else return this.defaultElementFactory(element, props, children);
    }
    if (isElementFn(element)) return this.applyElementFn(element, props, children);
    throw new Error("Unsupported element type");
  }


  static defaultElementFactory<T extends JSX.Element>(
    element: T,
    props: JSX.PropsWithoutChildren<T>,
    children: JSX.ChildrenOf<T>,
  ) {
    return { element, props, children: normaliseChildren(children) }
  }

  static applyElementFn<FN extends JSX.ElementFn>(
    element: FN,
    props: JSX.PropsWithoutChildren<FN>,
    children: JSX.ChildrenOf<FN>,
  ) {
    return element({ ...props, children });
  }

  static log({ fn = console.log }: JSX.PropsWithoutChildren<"log">, children: JSX.ChildrenOf<"log">) {
    const normalised = normaliseChildren(children);
    fn(normalised);
    return normalised;
  }
}
