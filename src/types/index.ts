import { StaticImageData } from "next/image";

export * from "./user";

export type Link = {
  icon?: StaticImageData;
  label: string;
  path: string;
};

export type List = {
  description: string;
  icon?: StaticImageData;
  label: string;
  path: string;
};

export type MenuSection = {
  label: string;
  list: Link[] | List[];
};
