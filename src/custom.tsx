import { CustomElements, JSX } from "src/jsx";
import { range } from "src/util";

function MyCustomComponent({
  children,
  requiredProp,
  optionalProp = 5,
}: {
  requiredProp: string;
  optionalProp?: number;
  children?: JSX.Element[]
}) {
  return <>
    <bar bar={5}>
      <foo foo={requiredProp + " nested"} />
    </bar>
    <foo foo={requiredProp} />
    {children}
  </>
}

export function test() {
  return <log fn={tree => console.log(JSON.stringify(tree, null, 2))}>
    <MyCustomComponent requiredProp="hello world">
      <foo foo="test" />
    </MyCustomComponent>
    {
      range(10).map((_, index) => <bar bar={index} />)
    }
  </log>
}
