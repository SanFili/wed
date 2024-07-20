export type onChangeType = {
  name: string;
  value: string | boolean;
  checkboxName?: string;
};

export type FieldType = {
  disabled: boolean;
  dependencies: string[];
  error: boolean;
  value?: string[] | string;
};
