export type ButtonType = {
  className?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  skin?: string;
  showArrow?: boolean;
  handleClick: (e: any) => void;
};
