import { FieldType } from "@/types/form";

export const toFields = (items: any[]): { [key: string]: FieldType } => {
  const obj: { [key: string]: FieldType } = {};

  items.forEach((item) => {
    if (item.checkboxes) {
      obj[item.name] = { disabled: !!item.disabled, dependencies: item.dependencies, error: false, value: [] };
    } else {
      obj[item.name] = { disabled: !!item.disabled, dependencies: item.dependencies, error: false };
    }
  });

  return obj;
};

export const checkValidity = (field: FieldType) =>
  !((!field.disabled && Array.isArray(field.value) && !field.value!.length) || (!field.disabled && !field.value));
