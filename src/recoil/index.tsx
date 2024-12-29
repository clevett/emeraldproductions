"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilContextProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;
