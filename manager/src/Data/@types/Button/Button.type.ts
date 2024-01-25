export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Text: string;
  onClick: () => void;
  Type?: "button" | "submit" | "reset";
};
