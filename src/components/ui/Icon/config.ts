export const IconColor = ["black"] as const;
export type IconPropColor = (typeof IconColor)[number];

export const IconName = [
  "logo",
  "arrow",
  "drop-arrow",
  "mail",
  "web",
  "mobile",
  "setting",
  "profile",
  "pen",
  "square",
  "check",
  "danger",
  "activity",
  "bar-chart",
  "layers",
  "smartphone",
  "cup",
  "thunder",
  "external-link",
  "eye",
  "comment",
] as const;
export type IconPropName = (typeof IconName)[number];
