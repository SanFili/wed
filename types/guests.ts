export type ItemType = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  dependencies?: string[];
  radios?: { id: string; label: string }[];
  checkboxes?: { name: string; label: string }[];
  errorText?: string;
};

export type GuestType = { title: string; text: string; formItems: any[] };

export type GuestsType = {
  [key: string]: GuestType;
};
