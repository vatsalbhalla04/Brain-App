import {
  defaultStyles,
  variantClasses,
  type ButtonProps,
} from "../Props/ButtonProps";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth,
  loading
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles}${
        fullWidth ? " w-full flex justify-center" : ""
      } ${loading ? " opacity-45 cursor-default" : ""}`} 
    >
      <span className="pr-1">{startIcon}</span>
      {text}
      {endIcon}
    </button>
  );
}
