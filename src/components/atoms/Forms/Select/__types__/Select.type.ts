export type SelectOptions = {
  value: string;
  text: string;
};

export type SelectType = {
  options?: Array<SelectOptions>;
  value?: string;
  handleChange?: any;
  label?: string;
  id: string;
  skin?: string;
  className?: string;
};
