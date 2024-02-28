import { label } from "./Label.module.css";

export function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={label}>
      {children}
    </label>
  );
}
