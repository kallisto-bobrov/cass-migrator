export type CheckboxType = {
  cbType: 'checkbox' | 'radio';
  label: Array<any>;
  id: string;
  onChange: () => void;
  isChecked: boolean;
};
