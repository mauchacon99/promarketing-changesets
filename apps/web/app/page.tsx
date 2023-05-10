import { add } from "math-helpers";
import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      {add(1, 8)}
      <Button />
    </>
  );
}
