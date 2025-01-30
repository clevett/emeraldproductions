import { StaticImageData } from "next/image";

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

export * from "./hardcover";
