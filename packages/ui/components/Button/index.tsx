import { PropsWithChildren } from "react";
import { button } from "./Button.module.css";

export function Button({ children }: PropsWithChildren) {
  return <button className={button}>{children}</button>;
}
