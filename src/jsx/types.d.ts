

export declare namespace JSX {

  /* Utility Types */

  // Check if a property exists on a type, if yes return its type, if no return a fallback or never
  export type LookupIfExists<T, P extends string, F = never> = P extends keyof T ? T[P] : F;
  /**
   * All properties of an element, including children
   */
  export type PropsOf<T extends Element> =
    T extends keyof IntrinsicElements
      ? IntrinsicElements[T]
      : T extends ElementFn
        ? Parameters<T>[0]
        : never;
  /**
   * Children of an element
   */
  export type ChildrenOf<T extends Element> = LookupIfExists<PropsOf<T>, "children">;
  /**
   * Props of an element excluding children
   */
  export type PropsWithoutChildren<T extends Element> = Omit<PropsOf<T>, "children">;
  /**
   * Functional Components
   */
  export type ElementFn<T = any, R = any> = (props: T) => R;


  /* JSX Essentials: Element and IntrinsicElements */
  /**
   * Defines what can be an element. Everything not listed here will not work as a parameter to
   * {@link CustomElements#createElement} and as such will not be considered valid
   */
  export type Element = (keyof IntrinsicElements) | ElementFn;

  /**
   * All built-in element types. think html tags for default react behaviour.
   * @remarks all members must be lowercase!
   */
  export interface IntrinsicElements {
    foo: FooProps;
    bar: BarProps;
    baz: BazProps;
    log: LogProps;
  }

  export interface LogProps {
    fn?: (tree: any) => void;
  }


  export interface FooProps {
    foo: string;
    bar?: boolean;
  }

  export interface BarProps {
    bar: number;
    children?: Element[];
  }

  export interface BazProps {
    baz: string;
    children?: Element[];
  }
}
