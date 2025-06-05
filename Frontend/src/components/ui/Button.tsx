/* eslint-disable @typescript-eslint/no-explicit-any */
type Variants = "primary" | "secondary";

export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}
const variantStyles = {
  primary: "text-white bg-purple-600 font-semibold",
  secondary: "bg-purple-300 text-purple-600 font-semibold",
};
const sizeStyles = {
  "sm": "py-4 px-6",
  "md": "py-6 px-6",
  "lg": "py-5 px-6"
};
const defaultStyles = "rounded-md p-4 flex";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
    {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
    {props.text}
    {props.endIcon}
    </button>
  );
};

<Button
  variant="primary"
  size="md"
  onClick={() => {}}
  text={"hey"}
  startIcon={"dj"}
  endIcon={"sd"}
/>;
